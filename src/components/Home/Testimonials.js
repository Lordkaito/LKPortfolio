// src/components/Home/Testimonials.js
import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Isaí consistently supports teammates and contributes to team productivity by collaborating on complex features, helping unblock others, and refining tasks before implementation. He communicates proactively to resolve blockers with both the team and client, follows strong engineering practices, and demonstrates openness to feedback during code reviews.",
    name: "Cristian Motoche",
    role: "Tech Lead · Stack Builders",
    initials: "CM",
  },
  {
    quote:
      "Isaí takes strong ownership of the tasks he works on, asking the right questions and ensuring features are delivered polished and production-ready. He contributes positively to team collaboration, supports technical alignment between client and team, improves development workflows, and provides thoughtful code reviews at a peer engineering level.",
    name: "Jota Martinez",
    role: "Software Engineer · Stack Builders",
    initials: "JM",
  },
  {
    quote:
      "Isaí consistently delivers high-quality work and is recognized as a reliable and collaborative engineer, making him a great teammate to work with across teams and projects.",
    name: "Kieran",
    role: "Client · Communico",
    initials: "KI",
  },
  {
    quote:
      "Isaí shows strong curiosity and initiative when improving the development environment, experimenting with tooling such as linters and editor extensions. He adapts quickly, learns fast, and provides reliable support during demanding periods while contributing to cleaner and more maintainable frontend code.",
    name: "David Barrera",
    role: "Tech Lead · Stack Builders",
    initials: "DB",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 8000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const go = (i) => {
    setActive(i);
    startInterval();
  };

  return (
    <section className="testi-section" ref={sectionRef}>
      <div className="testi-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} social proof</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: "center", marginBottom: "3rem" }}>
          WHAT PEOPLE <span className="gold">SAY</span>
        </h2>
        <div className="testi-carousel reveal reveal-delay-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.initials}
              className={`testi-slide${i === active ? " testi-active" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="testi-quote-wrap">
                <span className="testi-mark" aria-hidden="true">"</span>
                <p className="testi-quote">{t.quote}</p>
              </div>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-dots reveal reveal-delay-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testi-dot${i === active ? " testi-dot-active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
