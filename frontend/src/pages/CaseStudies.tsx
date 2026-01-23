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
        badge="Our Work"
        title="Case"
        titleHighlight="Studies"
        description="Explore how we've helped businesses transform their operations and achieve remarkable results through technology."
      />

      {/* Case Studies Grid */}
    <section className="py-20 lg:py-28 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, index) => (
        <Link
          key={study.id}
          to={`/case-studies/${study.id}`}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card h-[420px] flex flex-col justify-end transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 via-40% to-background to-85%" />
          </div>

          {/* Content */}
          <div className="relative p-8 z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
              {study.industry}
            </span>

            <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors">
              {study.title}
            </h3>

            <p className="text-black/60 font-medium leading-relaxed mb-6 line-clamp-2">
              {study.shortDescription}
            </p>

            <span className="inline-flex items-center text-accent text-sm font-bold uppercase tracking-widest">
              View Case Study
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Be Our Next <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how we can help transform your business with the right 
              technology solutions.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start a Conversation
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
