"use client";

import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const NAV = [
  { label: "Home", href: "#" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Unstitched", href: "#unstitched" },
  { label: "Luxury Pret", href: "#luxury-pret" },
  { label: "Festive Wear", href: "#categories" },
  { label: "Formal Wear", href: "#categories" },
  { label: "Casual Wear", href: "#categories" },
  { label: "Modest Fashion", href: "#categories" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <button onClick={() => setMenuOpen(true)} className="lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>

        <a href="#" className="font-display text-3xl tracking-[0.08em] text-firoza-deep">
          FIROZA
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide uppercase">
          {NAV.slice(0, 8).map((item) => (
            <a key={item.label} href={item.href} className="text-ink/80 hover:text-firoza-deep transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:inline-flex">
            <Search size={19} />
          </button>
          <button aria-label="Wishlist" className="hidden md:inline-flex">
            <Heart size={19} />
          </button>
          <button onClick={() => setCartOpen(true)} className="relative inline-flex" aria-label="Bag">
            <ShoppingBag size={19} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-firoza-deep text-white text-[10px] flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-ivory z-50 flex flex-col px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between mb-10">
            <span className="font-display text-2xl text-firoza-deep">FIROZA</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-5 text-sm uppercase tracking-wide">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-ink/80">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}