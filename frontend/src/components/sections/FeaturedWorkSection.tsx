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
  className="group relative overflow-hidden rounded-2xl border border-border bg-card h-[420px] flex flex-col justify-end transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
  style={{ animationDelay: `${index * 100}ms` }}
>
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 via-40% to-background to-85%" />
  </div>

  {/* Content */}
  <div className="relative p-8 z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
    <h3 className="text-2xl font-bold text-foreground mb-3 transition-colors">
      {project.title}
    </h3>

    <p className="text-black/60 font-medium leading-relaxed mb-6 line-clamp-2">
      {project.shortDescription}
    </p>

    {/* Technologies */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologies.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 4 && (
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
          +{project.technologies.length - 4}
        </span>
      )}
    </div>

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
  );
};

export default FeaturedWorkSection;
