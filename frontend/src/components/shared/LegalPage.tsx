import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { site } from "@/config/site";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

interface Props {
  badge: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  otherLink: { to: string; label: string };
}

const LegalPage = ({ badge, title, intro, sections, otherLink }: Props) => (
  <PageLayout>
    <PageBanner badge={badge} title={title} description={`Last updated ${site.policiesUpdated}.`} compact />
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[14rem_1fr] gap-10 lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <ul className="sticky top-28 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i + 1}`} className="text-muted-foreground hover:text-accent transition-colors">{i + 1}. {s.heading}</a>
              </li>
            ))}
          </ul>
        </nav>
        <article className="max-w-3xl">
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">{intro}</p>
          {sections.map((s, i) => (
            <section key={s.heading} id={`s${i + 1}`} className="scroll-mt-28 mb-10">
              <h2 className="text-xl md:text-2xl text-foreground mb-3">{i + 1}. {s.heading}</h2>
              {s.paragraphs?.map((p) => (<p key={p} className="text-foreground/75 leading-relaxed mb-3">{p}</p>))}
              {s.items && (
                <ul className="list-disc pl-5 space-y-1.5 text-foreground/75 leading-relaxed">
                  {s.items.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              )}
            </section>
          ))}
          <p className="text-sm text-muted-foreground border-t border-border pt-6">
            Questions about this page? Email <a className="text-foreground font-medium underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
            See also our <Link className="text-foreground font-medium underline underline-offset-4" to={otherLink.to}>{otherLink.label}</Link>.
          </p>
        </article>
      </div>
    </section>
  </PageLayout>
);

export default LegalPage;
