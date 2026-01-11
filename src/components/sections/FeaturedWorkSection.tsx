import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const FeaturedWorkSection = () => {
  const featuredProjects = caseStudies.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Projects That Make an{" "}
              <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/case-studies">
              View All Projects
              <ArrowUpRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/case-studies/${project.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center">
                  <span className="font-bold text-2xl text-accent">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center text-accent text-sm font-medium group/btn">
                  View Case Study
                  <ArrowUpRight
                    className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={16}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
