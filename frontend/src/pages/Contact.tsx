import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";
import { site } from "@/config/site";
import { submitContact } from "@/lib/contact";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [wantsNda, setWantsNda] = useState(false);
  const openedAt = useRef(Date.now());
  const [extra, setExtra] = useState({ need: "", timeline: "", existing: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      need: extra.need,
      timeline: extra.timeline,
      existingLink: extra.existing,
      message: formData.message,
      wantsNda,
      honeypot,
      elapsedMs: Date.now() - openedAt.current,
    });

    if (result.ok) {
      toast({ title: "Message sent!", description: "Thanks. We'll reply by email." });
      setFormData({ name: "", email: "", company: "", message: "" });
      setExtra({ need: "", timeline: "", existing: "" });
      setWantsNda(false);
    } else {
      toast({ title: "Something went wrong", description: result.error, variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <PageBanner
        badge="Contact"
        title="Have something that"
        titleHighlight="needs to be built?"
        description="Tell us what you're trying to build, fix or automate. We'll figure out whether we're the right team for it."
        compact
      />

      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Start a Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="need" className="block text-sm font-medium text-foreground mb-2">What do you need help with?</label>
                    <select
                      id="need"
                      value={extra.need}
                      onChange={(e) => setExtra((p) => ({ ...p, need: e.target.value }))}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="">Select one</option>
                      <option>Audit my AI-built app</option>
                      <option>Technical delivery for an agency client</option>
                      <option>Automation or internal tools</option>
                      <option>Data pipelines or dashboards</option>
                      <option>Web or mobile product</option>
                      <option>AI integration</option>
                      <option>Interactive 3D</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">Timeline</label>
                    <Input
                      id="timeline"
                      value={extra.timeline}
                      onChange={(e) => setExtra((p) => ({ ...p, timeline: e.target.value }))}
                      placeholder="e.g. launch in 6 weeks"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    What are you building? *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you trying to build, fix or automate?"
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <div>
                  <label htmlFor="existing" className="block text-sm font-medium text-foreground mb-2">Link to your app or repo</label>
                  <Input
                    id="existing"
                    value={extra.existing}
                    onChange={(e) => setExtra((p) => ({ ...p, existing: e.target.value }))}
                    placeholder="Link to the live app or repo, and what it was built with"
                    className="h-12"
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                  <input type="checkbox" checked={wantsNda} onChange={(e) => setWantsNda(e.target.checked)} className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]" />
                  <span>Send me an NDA before I share anything. We'll sign yours or send ours.</span>
                </label>
                <p className="text-xs text-muted-foreground">We use your details only to reply and to run any work we do together. See our <Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.</p>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : <><Send className="ml-2 w-4 h-4" /> Send Message</>}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Prefer email?</h2>
                <p className="text-muted-foreground mb-8">
                  Write to us directly and we'll reply with next steps.
                </p>
              </div>

              <div className="mb-8 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground mb-4">What happens next</h3>
                <ol className="space-y-4">
                  {[
                    ["We read your message", "And reply by email, usually with a few questions."],
                    ["A short call, if it helps", "We ask about the app, who uses it and what worries you."],
                    ["A fixed quote", "For the audit or the project, confirmed before anything starts."],
                  ].map(([t, d], i) => (
                    <li key={t} className="flex gap-4">
                      <span className="w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span>
                        <span className="block font-medium text-foreground">{t}</span>
                        <span className="block text-sm text-muted-foreground">{d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@devilonstudio.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@devilonstudio.com
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

            {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 text-left">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "It depends on scope. We start by understanding what exists, then give you a plan and an estimate.",
                },
                {
                  q: "Do you work with agencies?",
                  a: "Yes. We work behind your brand as your technical delivery partner when a client needs software outside your core capability.",
                },
                {
                  q: "What's your engagement model?",
                  a: "We support direct projects and white-label partnerships, for a single project or ongoing work.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
