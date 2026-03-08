# Home One-Page Expansion — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convertir la Home en una experiencia one-page scroll con 6 secciones nuevas que muestren el perfil completo al recruiter, respetando la estética VOID.EXE existente.

**Architecture:** 6 componentes React nuevos en `src/components/Home/`, todos importados en `Home.js`. Los estilos se añaden al final de `src/style.css`. Se usa un custom hook `useReveal` para IntersectionObserver compartido.

**Tech Stack:** React 18, CSS custom properties, IntersectionObserver API, react-icons (ya instalado)

---

## Task 1: Stats Counter (`Stats.js`)

**Files:**
- Create: `src/components/Home/Stats.js`
- Modify: `src/style.css` (append at end)

**Step 1: Crear el componente Stats**

```jsx
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
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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
          // reveal children
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
```

**Step 2: Añadir estilos al final de `src/style.css`**

```css
/* ══════════════════════════════════════════════════════════════
   NEW SECTIONS — Home One-Page Expansion
   ══════════════════════════════════════════════════════════════ */

/* ─── Stats Section ──────────────────────────────────────────── */
.stats-section {
  position: relative; background: var(--void-3);
  padding: 7rem 0; overflow: hidden;
}
.stats-grid-bg {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px);
  background-size: 50px 50px;
}
.stats-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 1; }
.stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
@media(max-width: 900px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
@media(max-width: 500px) { .stats-row { grid-template-columns: 1fr; } }

.stat-item {
  text-align: center; padding: 2.5rem 1.5rem;
  border: 1px solid var(--border);
  background: rgba(10,10,26,0.5);
  position: relative; overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.stat-item::before {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, var(--gold-glow) 0%, transparent 70%);
  opacity: 0; transition: opacity 0.3s;
}
.stat-item:hover { border-color: var(--gold); transform: translateY(-6px); box-shadow: 0 12px 40px var(--gold-glow); }
.stat-item:hover::before { opacity: 1; }

.stat-number {
  font-family: var(--font-display); font-size: clamp(3.5rem, 7vw, 6rem);
  color: var(--gold); line-height: 1;
  text-shadow: 0 0 40px var(--gold-glow-lg), 0 0 80px var(--gold-glow);
  letter-spacing: 0.02em;
}
.stat-label {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.2rem;
  text-transform: uppercase; color: var(--text); margin-top: 0.7rem;
}
.stat-sub {
  font-family: var(--font-body); font-size: 0.75rem; color: var(--text-dim);
  margin-top: 0.35rem;
}
```

**Step 3: Verificar visualmente** — el servidor de desarrollo debe mostrar la sección con 4 contadores animados debajo del About intro.

---

## Task 2: What I Build (`WhatIBuild.js`)

**Files:**
- Create: `src/components/Home/WhatIBuild.js`
- Modify: `src/style.css` (append)

**Step 1: Crear el componente**

```jsx
// src/components/Home/WhatIBuild.js
import React, { useEffect, useRef } from "react";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiGraphql, SiPostgresql } from "react-icons/si";
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
            <div className={`wib-card reveal reveal-delay-${i + 1}`} key={i}>
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
```

**Step 2: Añadir estilos**

```css
/* ─── What I Build ───────────────────────────────────────────── */
.wib-section { background: var(--void); padding: 7rem 0; }
.wib-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
.wib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
@media(max-width: 900px) { .wib-grid { grid-template-columns: 1fr; } }

.wib-card {
  background: var(--void-2); border: 1px solid var(--border);
  padding: 2.5rem 2rem; position: relative; overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
  cursor: default;
}
.wib-card-scanline {
  position: absolute; left: 0; top: -100%; width: 100%; height: 50px;
  background: linear-gradient(180deg, rgba(212,175,55,0.1) 0%, transparent 100%);
  pointer-events: none;
}
.wib-card:hover { border-color: var(--gold); transform: translateY(-5px); box-shadow: 0 0 40px var(--gold-glow), 0 20px 40px rgba(0,0,0,0.5); }
.wib-card:hover .wib-card-scanline { animation: scanline-sweep 0.7s ease forwards; }
.wib-card:hover .wib-icon svg { color: var(--gold); filter: drop-shadow(0 0 12px var(--gold)); }

.wib-icon { font-size: 3rem; color: var(--text-dim); margin-bottom: 1.5rem; transition: color 0.3s; }
.wib-icon svg { transition: color 0.3s, filter 0.3s; }
.wib-title {
  font-family: var(--font-display); font-size: 2rem; letter-spacing: 0.05em;
  color: var(--text); margin-bottom: 1rem;
}
.wib-desc {
  font-family: var(--font-body); font-size: 0.9rem; line-height: 1.75;
  color: var(--text-dim); margin-bottom: 1.5rem;
}
.wib-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.wib-tag {
  font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.12rem;
  text-transform: uppercase; color: var(--cyan); border: 1px solid rgba(0,255,240,0.2);
  padding: 3px 10px; background: rgba(0,255,240,0.04);
}
```

---

## Task 3: Experience Timeline (`ExperienceTimeline.js`)

**Files:**
- Create: `src/components/Home/ExperienceTimeline.js`
- Modify: `src/style.css` (append)

**Step 1: Crear el componente**

```jsx
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
            <div className={`exp-item reveal reveal-delay-${i + 1}`} key={i}>
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
                  {job.bullets.map((b, j) => (
                    <li key={j}><span className="bullet-arrow">▸</span> {b}</li>
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
```

**Step 2: Añadir estilos**

```css
/* ─── Experience Timeline ────────────────────────────────────── */
.exp-section { background: var(--void-2); padding: 7rem 0; }
.exp-inner { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
.exp-timeline { display: flex; flex-direction: column; gap: 0; }

.exp-item { display: grid; grid-template-columns: 36px 1fr; gap: 2rem; position: relative; padding-bottom: 3rem; }
.exp-item:last-child { padding-bottom: 0; }

.exp-line-col { display: flex; flex-direction: column; align-items: center; padding-top: 6px; }
.exp-dot {
  width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0;
  border: 2px solid var(--gold-dim); background: var(--void-2);
  transition: border-color 0.3s, box-shadow 0.3s;
}
.exp-dot-active {
  border-color: var(--gold); background: var(--gold);
  box-shadow: 0 0 0 4px var(--gold-glow), 0 0 20px var(--gold-glow-lg);
  animation: pulse-glow 2.5s ease-in-out infinite;
}
.exp-connector {
  width: 1px; flex: 1; min-height: 40px;
  background: linear-gradient(180deg, var(--gold-dim) 0%, rgba(212,175,55,0.1) 100%);
  margin-top: 6px;
}

.exp-content {
  background: rgba(10,10,26,0.5); border: 1px solid var(--border);
  padding: 2rem; transition: border-color 0.3s, box-shadow 0.3s;
}
.exp-content:hover { border-color: var(--gold-dim); box-shadow: 0 0 30px var(--gold-glow); }

.exp-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 1rem; flex-wrap: wrap; margin-bottom: 1.2rem;
}
.exp-company {
  font-family: var(--font-display); font-size: 2rem; letter-spacing: 0.05em;
  color: var(--gold); line-height: 1;
}
.exp-role {
  font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-mono);
  letter-spacing: 0.1rem; margin-top: 0.3rem;
}
.exp-meta { text-align: right; display: flex; flex-direction: column; gap: 0.3rem; align-items: flex-end; }
.exp-period {
  font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan); letter-spacing: 0.1rem;
}
.exp-location {
  font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.08rem;
}
.exp-badge-current {
  font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.15rem;
  background: var(--gold); color: var(--void); padding: 2px 8px; font-weight: 700;
}

.exp-bullets {
  list-style: none; display: flex; flex-direction: column; gap: 0.6rem;
  margin-bottom: 1.2rem;
}
.exp-bullets li {
  font-family: var(--font-body); font-size: 0.88rem; color: var(--text-dim);
  line-height: 1.6; display: flex; gap: 0.6rem;
}
.bullet-arrow { color: var(--gold); flex-shrink: 0; }
.exp-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }

@media(max-width: 600px) {
  .exp-item { grid-template-columns: 1fr; }
  .exp-line-col { display: none; }
  .exp-meta { text-align: left; align-items: flex-start; margin-top: 0.5rem; }
}
```

---

## Task 4: Featured Projects (`FeaturedProjects.js`)

**Files:**
- Create: `src/components/Home/FeaturedProjects.js`
- Modify: `src/style.css` (append)

**Step 1: Crear el componente** — reutiliza `ProjectCard` directamente, sin duplicar datos

```jsx
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
            <div className={`reveal reveal-delay-${i + 1}`} key={i}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
        <div className="fp-cta reveal reveal-delay-4">
          <Link to="/project" className="btn-void-outline">
            [ See All Projects → ]
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
```

**Step 2: Añadir estilos mínimos**

```css
/* ─── Featured Projects ──────────────────────────────────────── */
.fp-section { background: var(--void); padding: 7rem 0; }
.fp-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.fp-grid { margin-bottom: 3rem; }
.fp-cta { text-align: center; }
```

---

## Task 5: Testimonials (`Testimonials.js`)

**Files:**
- Create: `src/components/Home/Testimonials.js`
- Modify: `src/style.css` (append)

**Step 1: Crear el componente**

```jsx
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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

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
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5000);
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
              key={i}
              className={`testi-slide${i === active ? " testi-active" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="testi-quote-wrap">
                <span className="testi-mark">"</span>
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
          * Placeholders — to be replaced with verified testimonials
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
```

**Step 2: Añadir estilos**

```css
/* ─── Testimonials ───────────────────────────────────────────── */
.testi-section { background: var(--void-3); padding: 7rem 0; }
.testi-inner { max-width: 800px; margin: 0 auto; padding: 0 2rem; }

.testi-carousel { position: relative; min-height: 220px; }
.testi-slide {
  position: absolute; inset: 0;
  opacity: 0; pointer-events: none;
  transition: opacity 0.6s ease;
  display: flex; flex-direction: column; gap: 1.5rem;
}
.testi-slide.testi-active { opacity: 1; pointer-events: auto; position: relative; }

.testi-quote-wrap {
  border-left: 3px solid var(--cyan); padding: 1.5rem 2rem;
  background: rgba(0,255,240,0.03); position: relative;
}
.testi-mark {
  font-family: var(--font-display); font-size: 5rem; color: var(--cyan);
  opacity: 0.15; position: absolute; top: -1rem; left: 1.2rem; line-height: 1;
}
.testi-quote {
  font-family: var(--font-mono); font-size: 0.88rem; line-height: 1.85;
  color: var(--text-dim); position: relative; z-index: 1;
}
.testi-author { display: flex; align-items: center; gap: 1rem; }
.testi-avatar {
  width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
  background: var(--gold-glow); border: 1px solid var(--gold-dim);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700;
  color: var(--gold); letter-spacing: 0.05rem;
}
.testi-name {
  font-family: var(--font-mono); font-size: 0.75rem; color: var(--gold);
  letter-spacing: 0.1rem; text-transform: uppercase;
}
.testi-role { font-family: var(--font-body); font-size: 0.78rem; color: var(--text-dim); margin-top: 0.2rem; }

.testi-dots { display: flex; justify-content: center; gap: 0.7rem; margin-top: 2rem; }
.testi-dot {
  width: 8px; height: 8px; border-radius: 50%; border: 1px solid var(--gold-dim);
  background: transparent; cursor: none; transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.testi-dot-active { background: var(--gold); border-color: var(--gold); box-shadow: 0 0 10px var(--gold); }
.testi-disclaimer {
  text-align: center; font-family: var(--font-mono); font-size: 0.62rem;
  color: var(--text-dim); margin-top: 1.5rem; letter-spacing: 0.1rem; opacity: 0.5;
}
```

---

## Task 6: Contact CTA (`ContactCTA.js`)

**Files:**
- Create: `src/components/Home/ContactCTA.js`
- Modify: `src/style.css` (append)

**Step 1: Crear el componente**

```jsx
// src/components/Home/ContactCTA.js
import React, { useEffect, useRef } from "react";
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactCTA() {
  const sectionRef = useRef(null);

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

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-scanline" aria-hidden="true" />
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner">
        <p className="section-eyebrow reveal" style={{ textAlign: "center" }}>{"//"} available for work</p>
        <h2 className="contact-headline reveal reveal-delay-1">
          LET'S WORK<br /><span className="gold">TOGETHER</span>
        </h2>
        <p className="contact-sub reveal reveal-delay-2">
          Open to full-time roles, contracts, and interesting collaborations. <br />
          Based in Valencia, Spain — working <span className="cy">100% remote</span>.
        </p>
        <div className="contact-links reveal reveal-delay-3">
          <a
            href="https://www.linkedin.com/in/isaicespedes/"
            target="_blank" rel="noreferrer"
            className="contact-btn"
          >
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href="https://github.com/Lordkaito"
            target="_blank" rel="noreferrer"
            className="contact-btn"
          >
            <AiFillGithub /> GitHub
          </a>
          <a
            href="mailto:isai.cespedes@example.com"
            className="contact-btn contact-btn-primary"
          >
            <AiOutlineMail /> Send Email
          </a>
        </div>
        <div className="contact-status reveal reveal-delay-4">
          <span className="status-dot" />
          <span className="status-text">Available for new opportunities</span>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
```

**Step 2: Añadir estilos**

```css
/* ─── Contact CTA ────────────────────────────────────────────── */
.contact-section {
  background: var(--void); padding: 8rem 0;
  position: relative; overflow: hidden; text-align: center;
}
.contact-scanline {
  position: absolute; left: 0; top: -100%; width: 100%; height: 120px;
  background: linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.06) 50%, transparent 100%);
  animation: scanline-sweep 3s ease 0.5s infinite;
  pointer-events: none;
}
.contact-glow {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%);
}
.contact-inner { max-width: 800px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 1; }
.contact-headline {
  font-family: var(--font-display); font-size: clamp(4rem, 10vw, 8rem);
  line-height: 1; letter-spacing: 0.03em; color: var(--text);
  text-shadow: 0 0 60px rgba(240,237,228,0.05);
  margin: 1.5rem 0;
}
.contact-headline .gold {
  text-shadow: 0 0 40px var(--gold-glow-lg), 0 0 80px var(--gold-glow) !important;
}
.contact-sub {
  font-family: var(--font-body); font-size: 1rem; line-height: 1.75;
  color: var(--text-dim); margin-bottom: 3rem;
}
.contact-links { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.contact-btn {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.15rem;
  text-transform: uppercase; padding: 14px 28px;
  border: 1px solid var(--gold-dim); color: var(--gold); background: transparent;
  cursor: none; display: inline-flex; align-items: center; gap: 0.6rem;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
}
.contact-btn:hover { border-color: var(--gold); box-shadow: 0 0 20px var(--gold-glow); background: var(--gold-glow); color: var(--gold); }
.contact-btn-primary {
  background: var(--gold); color: var(--void); border-color: var(--gold);
}
.contact-btn-primary:hover { background: transparent; color: var(--gold); }

.contact-status { display: flex; align-items: center; justify-content: center; gap: 0.7rem; margin-top: 2.5rem; }
.status-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #28C840;
  box-shadow: 0 0 0 0 rgba(40,200,64,0.4);
  animation: pulse-status 2s ease-in-out infinite;
}
@keyframes pulse-status {
  0%  { box-shadow: 0 0 0 0 rgba(40,200,64,0.5); }
  70% { box-shadow: 0 0 0 8px rgba(40,200,64,0); }
  100%{ box-shadow: 0 0 0 0 rgba(40,200,64,0); }
}
.status-text { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); letter-spacing: 0.1rem; }
```

---

## Task 7: Integrar todo en `Home.js`

**Files:**
- Modify: `src/components/Home/Home.js`

**Step 1: Añadir imports al inicio del archivo**

Reemplazar el bloque de imports (líneas 1–4):
```jsx
import React, { useEffect, useRef } from "react";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import WhatIBuild from "./WhatIBuild";
import ExperienceTimeline from "./ExperienceTimeline";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";
import ContactCTA from "./ContactCTA";
```

**Step 2: Añadir las secciones en el return, después de `<Home2 />`**

```jsx
      <Stats />
      <WhatIBuild />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
```

---

## Task 8: Añadir "contact" anchor al Navbar

**Files:**
- Modify: `src/components/Navbar.js`

**Step 1:** Añadir un link de contacto que haga scroll (el anchor es la sección `ContactCTA`). Usar `<a href="/#contact">` — y añadir `id="contact"` al `<section>` de `ContactCTA.js`.

En `ContactCTA.js`, al `<section className="contact-section">` añadir `id="contact"`.

En `Navbar.js`, en `nav-links` añadir:
```jsx
<li className="nav-link-item"><a href="/#contact">contact</a></li>
```

Y en el mobile menu:
```jsx
<a href="/#contact" onClick={close}><span className="gold">{"//"}</span> contact</a>
```

---

## Task 9: Verificación final

**Step 1:** Iniciar servidor de desarrollo
```bash
cd /Users/icespedes/apps/LKPortfolio && npm start
```

**Step 2:** Verificar en browser en http://localhost:3000:
- [ ] Stats counters animan al hacer scroll hasta esa sección
- [ ] WhatIBuild cards muestran scanline sweep al hover
- [ ] ExperienceTimeline muestra Stack Builders con badge "CURRENT" pulsando
- [ ] FeaturedProjects muestra 3 tarjetas con link "See All Projects"
- [ ] Testimonials rota automáticamente cada 5 segundos
- [ ] ContactCTA muestra el status dot verde pulsando
- [ ] Navbar tiene link "contact" que hace scroll a la sección
- [ ] Responsive: todas las secciones se ven bien en mobile

**Step 3:** Build de producción
```bash
npm run build
```
Expected: Build exitoso sin errores.

**Step 4:** Commit
```bash
git add -A
git commit -m "feat: expand home to one-page portfolio experience with 6 new sections"
```
