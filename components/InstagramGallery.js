import { Instagram } from "lucide-react";
import Reveal from "./Reveal";
import { INSTAGRAM } from "../lib/data";

export default function InstagramGallery() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <Reveal as="div" className="fade-up text-center mb-10">
        <p className="text-firoza-deep text-xs tracking-[0.2em] uppercase mb-2">@firoza.official</p>
        <h2 className="font-display text-3xl md:text-4xl inline-flex items-center gap-3">
          <Instagram size={24} className="text-champagne" /> Follow Our World
        </h2>
      </Reveal>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {INSTAGRAM.map((src, i) => (
          <a key={i} href="#" className="group relative block overflow-hidden aspect-square">
            <img
              src={src}
              alt="FIROZA on Instagram"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}
