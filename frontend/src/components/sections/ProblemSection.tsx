import LayerStack from "@/components/shared/LayerStack";

const ProblemSection = () => (
  <section className="py-24 lg:py-32 section-dark on-dark">
    <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
      <div>
        <p className="text-sm font-semibold text-blue-400 mb-5">The shift</p>
        <h2 className="text-primary-foreground mb-6">Prototypes are cheap now. Production isn't.</h2>
        <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4 max-w-lg">
          AI can generate interfaces, APIs and whole apps quickly, and we use it every day. What it doesn't do is take
          responsibility for what happens when real people use the result.
        </p>
        <p className="text-primary-foreground text-lg leading-relaxed font-medium max-w-lg">
          We handle the layer between "it works in a demo" and "customers can depend on it."
        </p>
      </div>
      <LayerStack />
    </div>
  </section>
);

export default ProblemSection;
