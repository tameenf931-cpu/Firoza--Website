import Reveal from "./Reveal";

export default function BrandMessage() {
  return (
    <section id="about" className="py-24 px-6 bg-beige/50">
      <Reveal as="div" className="fade-up max-w-3xl mx-auto text-center">
        <p className="text-firoza-deep text-xs tracking-[0.25em] uppercase mb-5">Our Philosophy</p>
        <p className="font-display text-2xl md:text-3xl leading-relaxed text-ink/90 italic">
          &ldquo;FIROZA celebrates the elegance, confidence, and individuality of modern
          women. Our collections blend exceptional craftsmanship, premium fabrics, and
          contemporary design to create timeless fashion that empowers women to express
          their unique style.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
