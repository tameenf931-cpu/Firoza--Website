import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { REVIEWS } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle eyebrow="In Their Words" title="Loved By Women Everywhere" />
      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.id} className={`fade-up delay-${i + 1} bg-beige/60 p-8`}>
            <div className="flex gap-1 mb-4 text-champagne">
              {Array.from({ length: r.rating }).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="font-display text-lg leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
            <p className="text-xs uppercase tracking-widest text-ink/60">{r.name}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
