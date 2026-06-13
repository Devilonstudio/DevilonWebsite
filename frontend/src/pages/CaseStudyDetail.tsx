import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageBanner from "@/components/shared/PageBanner";
import { getCaseStudyById, caseStudies } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = caseStudyId ? getCaseStudyById(caseStudyId) : undefined;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const currentIndex = caseStudies.findIndex((s) => s.id === caseStudy.id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <PageLayout>
      <PageBanner
        badge={caseStudy.industry}
        title={caseStudy.title}
        description={caseStudy.shortDescription}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              
            {/* Project Image with Overlay */}
            <div className="relative h-80 rounded-2xl overflow-hidden">
              {/* Background Image */}
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {caseStudy.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 line-clamp-2">
                  {caseStudy.shortDescription}
                </p>
              </div>
            </div>
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Solution Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Key Outcomes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-5 bg-card rounded-xl border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-foreground mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Project Type</div>
                    <div className="font-medium text-foreground">{caseStudy.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Industry</div>
                    <div className="font-medium text-foreground">{caseStudy.industry}</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-bold mb-3">Planning a Similar Project?</h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Whether you're supporting a client project or need additional development capacity, our team is ready to help.
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              All Project Highlights
            </Link>
            <Link
              to={`/case-studies/${nextStudy.id}`}
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Next: {nextStudy.title}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudyDetail;
