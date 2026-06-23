"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as = "div" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref} className={`${className} ${inView ? "in-view" : ""}`}>
      {children}
    </Tag>
  );
}
