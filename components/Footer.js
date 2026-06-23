import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white/80 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <p className="font-display text-2xl text-white mb-3 tracking-wide">FIROZA</p>
          <p className="text-sm leading-relaxed">
            Timeless eastern wear crafted for the modern, confident woman.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#unstitched">Unstitched</a></li>
            <li><a href="#luxury-pret">Luxury Pret</a></li>
            <li><a href="#categories">Festive Wear</a></li>
            <li><a href="#categories">Formal Wear</a></li>
            <li><a href="#categories">Modest Fashion</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Style Journal</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail size={14} /> hello@firoza.pk</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +92 300 0000000</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
        <p>© 2026 FIROZA. All rights reserved.</p>
        <p>Demo storefront — built with Next.js.</p>
      </div>
    </footer>
  );
}
