import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { BLOG_POSTS } from "../lib/data";

export default function StyleGuide() {
  return (
    <section id="blog" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle eyebrow="The Edit" title="Style Guide & Fashion Journal" />
      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.id} className={`fade-up delay-${i + 1} group cursor-pointer`}>
            <div className="overflow-hidden mb-5 aspect-[4/3]">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="font-display text-xl leading-snug mb-3">{post.title}</h3>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-firoza-deep">
              Read More <ArrowRight size={13} />
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
