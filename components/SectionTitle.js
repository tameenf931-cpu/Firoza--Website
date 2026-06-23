import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, align = "center", light = false }) {
  return (
    <Reveal
      as="div"
      className={`fade-up ${align === "center" ? "text-center" : "text-left"} mb-12`}
    >
      {eyebrow && (
        <p
          className={`text-xs tracking-[0.2em] uppercase mb-3 ${
            light ? "text-champagne" : "text-firoza-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`thread font-display text-3xl md:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
