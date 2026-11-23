import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = ({
  title = "Want to know if your app is ready for real users?",
  body = "Send us the app. You'll get a fixed-price audit and a written answer from the people who would do the work.",
  cta = "Book an audit",
}: { title?: string; body?: string; cta?: string }) => (
  <section className="bg-accent on-dark">
    <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32">
      <h2 className="text-white max-w-4xl mb-8 text-[clamp(1.9rem,4.6vw,3.4rem)]">{title}</h2>
      <p className="text-white/85 text-lg max-w-2xl mb-10">{body}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="xl" className="bg-white text-black border-2 border-white hover:bg-black hover:text-white hover:border-black">
          <Link to="/contact">{cta} <ArrowRight /></Link>
        </Button>
        <Button asChild size="xl" variant="heroOutline">
          <a href="mailto:hello@devilonstudio.com">hello@devilonstudio.com</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
