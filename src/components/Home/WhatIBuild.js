// src/components/Home/WhatIBuild.js
import React, { useEffect, useRef } from "react";
import { SiReact } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { AiFillCode } from "react-icons/ai";

const CARDS = [
  {
    icon: <SiReact />,
    title: "Frontend Architecture",
    desc: "Scalable React & TypeScript apps — from design systems to micro-frontends. I obsess over bundle size, render performance, and developer ergonomics.",
    tags: ["React", "TypeScript", "Next.js", "Redux", "Testing"],
  },
  {
    icon: <DiNodejs />,
    title: "Backend & APIs",
    desc: "RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL. I design for reliability, type safety end-to-end, and smooth integration with any frontend.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "MongoDB", "REST"],
  },
  {
    icon: <AiFillCode />,
    title: "Developer Experience",
    desc: "I led a 4,000+ TypeScript error migration at Stack Builders — I turn messy codebases into maintainable, well-tested, CI/CD-ready platforms.",
    tags: ["ESLint", "Jest", "CI/CD", "DX", "Code Review"],
  },
];

function WhatIBuild() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wib-section" ref={sectionRef}>
      <div className="wib-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} what i do</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          WHAT I <span className="gold">BUILD</span>
        </h2>
        <div className="wib-grid">
          {CARDS.map((c, i) => (
            <div className={`wib-card reveal reveal-delay-${i + 1}`} key={c.title}>
              <div className="wib-card-scanline" aria-hidden="true" />
              <div className="wib-icon">{c.icon}</div>
              <h3 className="wib-title">{c.title}</h3>
              <p className="wib-desc">{c.desc}</p>
              <div className="wib-tags">
                {c.tags.map((t) => (
                  <span className="wib-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIBuild;
