import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const FeaturedWorkSection = () => {
  const featuredProjects = [...caseStudies, ...caseStudies];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <span className="text-accent font-bold text-sm uppercase tracking-wider mb-4 block">
              Featured Work
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
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

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

          <div className="flex gap-8 animate-marquee w-max">
            {featuredProjects.map((project, index) => (
              <Link
                key={`${project.id}-${index}`}
                to={`/case-studies/${project.id}`}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-black h-[500px] w-[460px] flex-shrink-0 transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                </div>

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Number */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="text-8xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                    0{(index % caseStudies.length) + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10 text-white">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="h-px bg-gradient-to-r from-blue-500/50 via-white/10 to-transparent mb-5" />

                  <span className="inline-flex items-center text-blue-400 text-sm font-bold uppercase tracking-widest">
                    View Case Study
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;