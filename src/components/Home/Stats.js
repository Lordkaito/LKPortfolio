// src/components/Home/Stats.js
import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3, suffix: "+", label: "Years of Experience", sub: "professional" },
  { value: 4000, suffix: "+", label: "TypeScript Errors", sub: "resolved at Stack Builders" },
  { value: 6, suffix: "+", label: "Open-Source Projects", sub: "github.com/Lordkaito" },
  { value: 100, suffix: "%", label: "Remote Work", sub: "international teams" },
];

function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function StatItem({ value, suffix, label, sub, started, index }) {
  const count = useCountUp(value, 1800 + index * 200, started);
  return (
    <div className="stat-item reveal" style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}

function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid-bg" aria-hidden="true" />
      <div className="stats-inner">
        <p className="section-eyebrow" style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          {"//"} by the numbers
        </p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          IMPACT <span className="gold">METRICS</span>
        </h2>
        <div className="stats-row">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
