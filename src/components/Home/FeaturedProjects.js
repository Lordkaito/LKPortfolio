// src/components/Home/FeaturedProjects.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../Projects/ProjectCards";

const FEATURED = [
  {
    title: "Multichattt",
    description:
      "Watch multiple Twitch streams and their chats simultaneously. Built with React and TypeScript, uses the Twitch API for stream data and chat integration.",
    ghLink: "https://github.com/Lordkaito/multichattt",
    lang: "TS",
  },
  {
    title: "Bwidgets",
    description:
      "Online platform for Twitch streamers to discover, preview, and acquire custom stream widgets. Built with React and TypeScript.",
    ghLink: "https://github.com/Lordkaito/bwidgets-frontend",
    lang: "TS",
  },
  {
    title: "Transcripthorrr",
    description:
      "Python Flask server that uses AI to transcribe audio to text. Exposes two endpoints — one for quick transcription and one for higher accuracy.",
    ghLink: "https://github.com/Lordkaito/transcripthorrr",
    lang: "PY",
  },
];

function FeaturedProjects() {
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
    <section className="fp-section" ref={sectionRef}>
      <div className="fp-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} work</p>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          FEATURED <span className="gold">PROJECTS</span>
        </h2>
        <div className="projects-grid fp-grid">
          {FEATURED.map((p, i) => (
            <div className={`reveal reveal-delay-${i + 1}`} key={p.title}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
        <div className="fp-cta reveal reveal-delay-4">
          <Link to="/project" className="btn-void-outline">
            {"[ See All Projects → ]"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
