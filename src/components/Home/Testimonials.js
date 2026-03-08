// src/components/Home/Testimonials.js
import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Isaí has an exceptional ability to navigate complex codebases and deliver clean, maintainable solutions. His TypeScript expertise and attention to developer experience made a real difference on our team.",
    name: "Placeholder — Colleague",
    role: "Senior Engineer · Stack Builders",
    initials: "JD",
  },
  {
    quote:
      "Working with Isaí on the Communico integration was great. He communicates clearly, ships on time, and always asks the right questions upfront. The kind of engineer every team wants.",
    name: "Placeholder — Colleague",
    role: "Tech Lead · Stack Builders",
    initials: "AK",
  },
  {
    quote:
      "Isaí took ownership of the frontend migration end-to-end. He found patterns in the codebase that nobody else had documented and built tools to automate the fixes. Impressive.",
    name: "Placeholder — Colleague",
    role: "Engineering Manager · Stack Builders",
    initials: "MR",
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
    }, 5000);
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
        <p className="testi-disclaimer reveal reveal-delay-4">
          {"* Placeholders — to be replaced with verified testimonials"}
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
