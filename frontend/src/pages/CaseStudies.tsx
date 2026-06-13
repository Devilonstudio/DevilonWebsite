import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <PageLayout>
      <PageBanner
        badge="Representative Projects"
        title="Project"
        titleHighlight="Highlights"
        description="Examples of the products, platforms, and systems our team is equipped to deliver for agencies, startups, and growing businesses."
      />

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-4 block">
              Featured Work
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
              Project{" "}
              <span className="gradient-text">Highlights</span>
            </h2>

            <p className="text-foreground/60 text-xl">
              Examples of the products, platforms, and systems our team is
              equipped to deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-black min-h-[520px] transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl ${
                  index % 2 === 1 ? "lg:translate-y-16" : ""
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Blue Glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Project Number */}
                <div className="absolute top-8 right-8 z-10">
                  <span className="text-8xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                    {study.industry}
                  </span>

                  <h3 className="text-4xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                    {study.shortDescription}
                  </p>

                  <div className="h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent mb-6" />

                  <span className="inline-flex items-center text-blue-400 text-sm font-bold uppercase tracking-widest">
                    View Case Study
                    <ArrowUpRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Looking for a Reliable{" "}
              <span className="gradient-text">
                White-Label Development Partner?
              </span>
            </h2>

            <p className="text-primary-foreground/70 text-lg mb-8">
              Whether you need help with a single project or ongoing delivery
              support, our team can operate as an extension of your agency.
            </p>

            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss a Partnership
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;