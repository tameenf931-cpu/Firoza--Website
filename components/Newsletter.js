"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-firoza-deep py-20 px-6">
      <Reveal className="fade-up max-w-xl mx-auto text-center">
        <p className="text-champagne text-xs tracking-[0.25em] uppercase mb-3">Stay In Style</p>
        <h2 className="font-display text-white text-3xl md:text-4xl mb-4">Join the FIROZA Circle</h2>
        <p className="text-white/75 text-sm mb-8">
          Be first to know about new collections, festive drops, and members-only previews.
        </p>
        {submitted ? (
          <p className="text-champagne text-sm">Thank you — you're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/40 text-white placeholder-white/60 px-4 py-3 text-sm outline-none focus:border-champagne"
            />
            <button
              type="submit"
              className="bg-champagne text-ink px-6 py-3 text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
