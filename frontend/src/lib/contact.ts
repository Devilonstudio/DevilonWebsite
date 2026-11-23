import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { site } from "@/config/site";

export interface ContactInput {
  name: string;
  email: string;
  company?: string;
  need?: string;
  timeline?: string;
  existingLink?: string;
  message: string;
  wantsNda?: boolean;
  honeypot?: string;   // hidden field; real people leave it empty
  elapsedMs?: number;  // time between page load and submit
}

export type ContactResult = { ok: true } | { ok: false; error: string };

const fallback = `We couldn't send your message. Please email us at ${site.email}.`;
const clip = (v: string | undefined, max: number) => {
  const t = (v ?? "").trim().slice(0, max);
  return t.length ? t : null;
};

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  // Bots tend to fill hidden fields or submit instantly. Pretend it worked and store nothing.
  if (input.honeypot || (input.elapsedMs !== undefined && input.elapsedMs < 2500)) return { ok: true };

  const name = clip(input.name, 120);
  const email = clip(input.email, 254);
  const message = clip(input.message, 4000);
  if (!name || !email || !message) return { ok: false, error: "Please fill in your name, email and message." };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, error: "Please enter a valid email address." };

  if (!isSupabaseConfigured || !supabase) return { ok: false, error: fallback };

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    company: clip(input.company, 160),
    need: clip(input.need, 120),
    timeline: clip(input.timeline, 120),
    existing_link: clip(input.existingLink, 500),
    message,
    wants_nda: Boolean(input.wantsNda),
    page: window.location.pathname,
  });

  if (error) {
    // The database rejects floods (see the trigger in schema.sql). Everything else gets the generic message.
    if (/too many submissions/i.test(error.message)) {
      return { ok: false, error: "You've sent a few messages in a short time. Please wait a few minutes and try again." };
    }
    return { ok: false, error: fallback };
  }
  return { ok: true };
}
