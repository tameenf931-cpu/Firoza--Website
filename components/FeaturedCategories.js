import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { CATEGORIES } from "../lib/data";

export default function FeaturedCategories() {
  return (
    <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle eyebrow="Shop By Edit" title="Featured Categories" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.name} className={`fade-up delay-${(i % 4) + 1}`}>
            <a href="#" className="group relative block overflow-hidden aspect-[4/5]">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-display text-xl">{c.name}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
