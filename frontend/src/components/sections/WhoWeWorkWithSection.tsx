import { Link } from "react-router-dom";
import { ArrowRight, Building2, Zap } from "lucide-react";

const WhoWeWorkWithSection = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Section Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-wider mb-4 block">
            Who We Work With
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Your Role, Our{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Agencies Card */}
          <Link
            to="/agency-partnerships"
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#0A0A0A] backdrop-blur-sm p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Main Blue Glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Secondary Glow */}
            <div className="absolute -left-16 bottom-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-7">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl scale-110" />
                  <Building2 className="relative w-8 h-8 text-blue-500" />
                </div>

                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">
                  FOR AGENCIES
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl leading-tight font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                Need reliable overflow capacity?
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed font-medium text-sm lg:text-base">
                We act as your engineering backend team for web and SaaS work.
                You keep the client. We handle delivery. Fast, reliable, no
                drama.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "We disappear into your workflow",
                  "Your branding, your client relationships",
                  "Rapid turnaround on web and SaaS projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>

                    <span className="text-white/80 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              <span className="inline-flex items-center text-blue-500 text-sm font-bold uppercase tracking-widest">
                Learn More
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </div>
          </Link>

          {/* Product Teams Card */}
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-[#0A0A0A] backdrop-blur-sm p-7 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Main Blue Glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Secondary Glow */}
            <div className="absolute -left-16 bottom-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-7">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl scale-110" />
                  <Zap className="relative w-8 h-8 text-blue-500" />
                </div>

                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">
                  FOR PRODUCT TEAMS
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl leading-tight font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                Need extra engineering velocity?
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed font-medium text-sm lg:text-base">
                We help SaaS companies and product teams ship features faster.
                Scale your engineering capacity without the overhead of hiring
                and onboarding.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Ship features in half the time",
                  "Seamless integration with your team",
                  "No long-term commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>

                    <span className="text-white/80 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              <span className="inline-flex items-center text-blue-500 text-sm font-bold uppercase tracking-widest">
                Get In Touch
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;