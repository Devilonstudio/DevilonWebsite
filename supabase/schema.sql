-- Contact form storage for devilonstudio.com
-- Run once in the Supabase SQL editor. Review before running.

create table if not exists public.contact_submissions (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null check (char_length(name) between 1 and 120),
  email         text not null check (char_length(email) between 3 and 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  company       text check (company is null or char_length(company) <= 160),
  need          text check (need is null or char_length(need) <= 120),
  timeline      text check (timeline is null or char_length(timeline) <= 120),
  existing_link text check (existing_link is null or char_length(existing_link) <= 500),
  message       text not null check (char_length(message) between 1 and 4000),
  page          text check (page is null or char_length(page) <= 200),
  wants_nda     boolean not null default false,
  status        text not null default 'new'
);

-- If you already ran an earlier version of this file, add the new column instead of re-creating the table:
--   alter table public.contact_submissions add column if not exists wants_nda boolean not null default false;

-- Row Level Security: the public (anon) key may INSERT and nothing else.
alter table public.contact_submissions enable row level security;

drop policy if exists "anyone can submit the contact form" on public.contact_submissions;
create policy "anyone can submit the contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (status = 'new');

-- No select / update / delete policies exist, so those are denied. Make the grants match.
revoke all on public.contact_submissions from anon, authenticated;
grant insert on public.contact_submissions to anon, authenticated;

-- Flood guard: at most 10 submissions per minute overall, and 3 per 10 minutes per email.
create or replace function public.contact_flood_guard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select count(*) from public.contact_submissions where created_at > now() - interval '1 minute') >= 10 then
    raise exception 'Too many submissions, try again shortly';
  end if;
  if (select count(*) from public.contact_submissions
        where lower(email) = lower(new.email) and created_at > now() - interval '10 minutes') >= 3 then
    raise exception 'Too many submissions from this email';
  end if;
  return new;
end;
$$;

drop trigger if exists contact_flood_guard on public.contact_submissions;
create trigger contact_flood_guard
  before insert on public.contact_submissions
  for each row execute function public.contact_flood_guard();

-- Read your messages in the Supabase dashboard (Table editor) or with the service role from a trusted place.
