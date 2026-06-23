"use client";

import { Heart } from "lucide-react";
import { formatPKR } from "../lib/data";

export function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-beige mb-4 aspect-[3/4]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart size={15} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink/85 text-white text-center text-xs uppercase tracking-widest py-3">
          View Details
        </div>
      </div>
      {product.category && (
        <p className="text-[11px] uppercase tracking-widest text-firoza-deep mb-1">{product.category}</p>
      )}
      <h3 className="font-display text-lg leading-tight mb-1">{product.name}</h3>
      <p className="text-sm text-ink/70">{formatPKR(product.price)}</p>
    </div>
  );
}

export function ProductRow({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
