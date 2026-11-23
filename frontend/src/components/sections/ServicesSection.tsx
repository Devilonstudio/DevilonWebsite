import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";

const path = (id: string) => (id === "ai-to-production" ? "/ai-to-production" : `/services/${id}`);

const ServicesSection = () => {
  const primary = services.filter((x) => x.primary);
  const others = services.filter((x) => !x.primary);
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="text-foreground mb-5">Where most projects start.</h2>
          <p className="text-muted-foreground text-lg">
            Most clients begin with one of these three. Everything else we build is listed below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primary.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <Link
                  to={path(s.id)}
                  className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-[0_18px_40px_-30px_rgba(20,28,45,0.4)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_30px_50px_-28px_rgba(20,28,45,0.5)]"
                >
                  <span className="icon-tile mb-6"><Icon className="w-6 h-6" /></span>
                  <p className="text-sm font-medium text-accent mb-2">{s.audience}</p>
                  <h3 className="text-2xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.shortDescription}</p>
                  <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                    {s.useCases.slice(0, 3).map((u) => (
                      <li key={u} className="flex gap-2.5"><Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" strokeWidth={3} />{u}</li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-muted-foreground">
          We also build{" "}
          {others.map((x, i, arr) => (
            <span key={x.id}>
              <Link to={path(x.id)} className="text-foreground font-semibold underline decoration-accent underline-offset-4 hover:text-accent">{x.title.toLowerCase()}</Link>
              {i < arr.length - 2 ? ", " : i === arr.length - 2 ? " and " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
