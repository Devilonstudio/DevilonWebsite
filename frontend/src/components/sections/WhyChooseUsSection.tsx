import { Cpu, Search, Users, PackageCheck, Handshake } from "lucide-react";

const icons = [Cpu, Search, Users, PackageCheck, Handshake];

const points = [
  ["AI-native, engineer-owned", "We use AI tooling heavily because it makes us faster. A person reads, tests and answers for every line that ships."],
  ["An honest audit first", "We look before we quote, and tell you plainly whether to fix what you have or rebuild it. Sometimes the answer is \"it's fine.\""],
  ["Small team, wide range", "Web, mobile, automation, AI and 3D under one roof, with direct contact with the people doing the work."],
  ["Handover, not lock-in", "You get the repo, the documentation and the deployment. Nothing about the work depends on us staying."],
  ["White-label when you need it", "For agencies we work under your brand and in your channels. NDA before we see client material."],
];

const WhyChooseUsSection = () => (
  <section className="py-20 lg:py-28 section-dark on-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold text-blue-400 mb-4">Why Devilon</p>
        <h2 className="text-primary-foreground mb-4">We don't sell code. We answer for what ships.</h2>
        <p className="text-primary-foreground/65 text-lg">
          Software is easier to start than ever. These are the commitments that make it worth finishing with us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map(([t, d], i) => {
          const Icon = icons[i];
          return (
            <div
              key={t}
              data-reveal
              style={{ transitionDelay: `${i * 50}ms` }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
            >
              <span className="icon-tile mb-5"><Icon className="w-5 h-5" /></span>
              <h3 className="text-xl text-primary-foreground mb-2">{t}</h3>
              <p className="text-primary-foreground/65 leading-relaxed">{d}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
