import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { caseStudies } from "@/data/caseStudies";
import ProjectVisual from "@/components/shared/ProjectVisual";

const CaseStudies = () => {
  return (
    <PageLayout>
      <PageBanner
        badge="Our Work"
        title="How we build,"
        titleHighlight="by example."
        description="Representative builds for each kind of project we take on: product engineering, automation and mobile."
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground max-w-2xl mb-12">
            Representative builds created to show how we approach each type of project. Client work is shown separately, where permission allows.
          </p>

          <div className="border-t border-foreground">
            {caseStudies.map((study, i) => (
              <Link key={study.id} to={`/case-studies/${study.id}`} className="group grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center py-10 border-b border-foreground/20">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <ProjectVisual variant={study.visual} className="aspect-[16/10] w-full" />
                </div>
                <div>
                  <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-accent mb-4">{String(i + 1).padStart(2, "0")} · {study.service}</p>
                  <h2 className="text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors mb-4">{study.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-lg">{study.shortDescription}</p>
                  <span className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-accent">
                    See the approach <ArrowUpRight className="ml-1.5 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 section-dark on-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-primary-foreground mb-6">
              Want to see how we'd handle <span className="gradient-text">your</span> problem?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Describe what you're working on and we'll tell you honestly whether we're the right team.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Product
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
