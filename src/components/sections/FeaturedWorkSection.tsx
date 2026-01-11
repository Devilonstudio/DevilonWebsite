import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinFlow - Banking Platform",
    description:
      "A comprehensive digital banking solution enabling seamless transactions, account management, and real-time analytics for over 500,000 users.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
  {
    title: "HealthHub - Telemedicine App",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with healthcare providers through video consultations and secure messaging.",
    technologies: ["React Native", "Python", "MongoDB", "Azure"],
    image: "bg-gradient-to-br from-primary/20 to-accent/10",
  },
  {
    title: "LogiTrack - Supply Chain SaaS",
    description:
      "End-to-end logistics management platform with real-time tracking, inventory optimization, and predictive analytics.",
    technologies: ["Next.js", "Java", "Kubernetes", "GCP"],
    image: "bg-gradient-to-br from-accent/10 to-primary/30",
  },
];

const FeaturedWorkSection = () => {
  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
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
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowUpRight className="ml-2" size={18} />
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image placeholder */}
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

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent">
                  View Case Study
                  <ArrowUpRight
                    className="ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    size={16}
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
