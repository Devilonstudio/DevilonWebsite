const technologies = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend & Languages
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "JavaScript", category: "Language" },
  { name: "C++", category: "Language" },

  // Mobile
  { name: "Flutter", category: "Mobile" },
  { name: "Native iOS", category: "Mobile" },

  // Databases
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "MS SQL Server", category: "Database" },

  // Automation & Data
  { name: "n8n", category: "Automation" },
  { name: "Retool", category: "Automation" },
  { name: "Power BI", category: "Data" },
  { name: "ETL / ELT Pipelines", category: "Data" },

  // DevOps & Cloud
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },

  // Creative & Visualization
  { name: "Blender", category: "Creative" },
  { name: "DaVinci Resolve", category: "Creative" },
  { name: "Adobe Suite", category: "Creative" },

  // Networking & IoT
  { name: "Cisco Packet Tracer", category: "Networking" },
  { name: "Adafruit IO", category: "IoT" },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies We{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage cutting-edge technologies to build robust, scalable, and
            future-proof solutions.
          </p>
        </div>

        {/* Technologies grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-badge"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Categories legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm">
          {[ "Frontend","Backend","Language","Mobile","Database", "Automation","Data","DevOps","Networking", "IoT",].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent/50" />
              <span className="text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
