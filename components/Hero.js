"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/firoza-hero/1600/1200"
        alt="FIROZA campaign"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p
          className={`text-champagne text-xs tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          The Spring Campaign — 2026
        </p>
        <h1
          className={`font-display text-white text-5xl md:text-7xl leading-[1.05] mb-6 transition-all duration-700 delay-150 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Elegance, <em className="italic text-champagne">Woven</em><br />
          Into Every Thread
        </h1>
        <p
          className={`text-white/85 max-w-xl mb-9 text-sm md:text-base transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Discover FIROZA's new season of unstitched lawn, luxury pret, and festive
          couture — crafted for the woman who wears her confidence quietly.
        </p>
        <div
          className={`flex gap-4 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#new-arrivals"
            className="bg-champagne text-ink px-7 py-3 text-xs uppercase tracking-widest hover:bg-white transition-colors"
          >
            Shop New Arrivals
          </a>
          <a
            href="#luxury-pret"
            className="border border-white/70 text-white px-7 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Luxury Pret <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
