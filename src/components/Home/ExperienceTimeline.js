// src/components/Home/ExperienceTimeline.js
import React, { useEffect, useRef } from "react";

const JOBS = [
  {
    company: "Stack Builders",
    role: "Full-Stack Software Engineer",
    period: "2022 — Present",
    location: "Remote · International",
    badges: ["TypeScript", "React", "Node.js", "GraphQL"],
    bullets: [
      "Led a frontend migration resolving 4,000+ TypeScript errors across a large-scale codebase.",
      "Worked with clients including Twilio, Thrv, and Communico on scalable web platforms.",
      "Introduced testing standards and DX tooling improvements adopted team-wide.",
      "Collaborated in remote-first, cross-timezone agile teams.",
    ],
    current: true,
  },
  {
    company: "Microverse",
    role: "Technical Mentor & Code Reviewer",
    period: "2021 — 2022",
    location: "Remote · Global",
    badges: ["Ruby on Rails", "React", "Code Review"],
    bullets: [
      "Mentored junior developers in full-stack fundamentals across 5+ countries.",
      "Performed systematic code reviews with focus on clean code and test coverage.",
    ],
    current: false,
  },
];

function ExperienceTimeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" ref={sectionRef}>
      <div className="exp-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} career</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: "center", marginBottom: "4rem" }}>
          EXPERIENCE <span className="gold">TIMELINE</span>
        </h2>
        <div className="exp-timeline">
          {JOBS.map((job, i) => (
            <div className={`exp-item reveal reveal-delay-${i + 1}`} key={job.company}>
              <div className="exp-line-col">
                <div className={`exp-dot${job.current ? " exp-dot-active" : ""}`} />
                {i < JOBS.length - 1 && <div className="exp-connector" />}
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-company">{job.company}</h3>
                    <p className="exp-role">{job.role}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{job.period}</span>
                    <span className="exp-location">{job.location}</span>
                    {job.current && <span className="exp-badge-current">CURRENT</span>}
                  </div>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>
                      <span className="bullet-arrow">▸</span> {b}
                    </li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {job.badges.map((b) => (
                    <span className="wib-tag" key={b}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
