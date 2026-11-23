import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import ProjectVisual from "@/components/shared/ProjectVisual";

const FeaturedWorkSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
        <div>
          <p className="eyebrow mb-5">Selected builds</p>
          <h2 className="text-foreground">What we build, in practice.</h2>
        </div>
        <Link to="/case-studies" className="font-bold uppercase tracking-wide text-sm text-accent inline-flex items-center">
          All projects <ArrowUpRight className="ml-1.5 w-4 h-4" />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground max-w-xl mb-14">
        Representative builds created to show how we approach each type of project. Client work is shown separately, where permission allows.
      </p>

      <div className="border-t border-foreground">
        {caseStudies.map((c, i) => (
          <Link
            key={c.id}
            to={`/case-studies/${c.id}`}
            className="group grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center py-10 border-b border-foreground/20"
          >
            <div className={i % 2 ? "md:order-2" : ""}>
              <ProjectVisual variant={c.visual} className="aspect-[16/10] w-full" />
            </div>
            <div>
              <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-accent mb-4">
                {String(i + 1).padStart(2, "0")} · {c.service}
              </p>
              <h3 className="text-3xl md:text-5xl text-foreground group-hover:text-accent transition-colors mb-4">{c.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-lg">{c.shortDescription}</p>
              <ul className="mb-6 space-y-1.5 font-mono-ui text-xs text-foreground/70">
                {c.demonstrates.slice(0, 3).map((d) => (<li key={d}><span className="text-accent font-bold">+ </span>{d}</li>))}
              </ul>
              <span className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-accent">
                See the approach <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWorkSection;
