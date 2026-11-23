import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const WhoWeWorkWithSection = () => (
  <section className="grid md:grid-cols-2">
    <Link to="/ai-to-production" className="group bg-accent p-8 md:p-12 lg:p-16 hover:bg-foreground transition-colors">
      <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-white/80 mb-10">01 / Founders &amp; companies</p>
      <h2 className="text-white mb-6">Built something with AI? Let's get it production-ready.</h2>
      <p className="text-white/80 text-lg leading-relaxed max-w-lg mb-10">
        Move from prototype to a product people can depend on, with the architecture,
        backend, integrations and reliability it needs to ship.
      </p>
      <span className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-white">
        AI → Production <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
    <Link to="/agency-partnerships" className="group bg-background p-8 md:p-12 lg:p-16 hover:bg-foreground transition-colors">
      <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-accent mb-10">02 / Agencies</p>
      <h2 className="text-foreground group-hover:text-white mb-6">Your client needs software someone is accountable for.</h2>
      <p className="text-muted-foreground group-hover:text-white/70 text-lg leading-relaxed max-w-lg mb-10">
        Your team can prototype now. We take on the engineering that has to be secure,
        integrated and maintained, behind your brand.
      </p>
      <span className="inline-flex items-center font-bold uppercase tracking-wide text-sm text-accent group-hover:text-blue-400">
        Agency partnerships <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  </section>
);

export default WhoWeWorkWithSection;
