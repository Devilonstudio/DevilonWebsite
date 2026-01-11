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
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project image placeholder */}
                <div
                  className={`h-56 ${study.image} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center">
                    <span className="font-bold text-3xl text-accent">
                      {study.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                        +{study.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    View Case Study
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
