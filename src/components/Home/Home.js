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

function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  let W = (canvas.width = canvas.offsetWidth);
  let H = (canvas.height = canvas.offsetHeight);
  let mouse = { x: W / 2, y: H / 2 };

  const COUNT = 90;
  const LINK_DIST = 130;
  const ATTRACT = 0.012;

  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.5 + 0.2,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < COUNT; i++) {
      const p = particles[i];
      // soft attract toward mouse
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 250) {
        p.vx += (dx / dist) * ATTRACT;
        p.vy += (dy / dist) * ATTRACT;
      }

      // dampen velocity
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;

      // wrap around
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
      ctx.fill();

      // draw links
      for (let j = i + 1; j < COUNT; j++) {
        const q = particles[j];
        const lx = p.x - q.x;
        const ly = p.y - q.y;
        const d = Math.sqrt(lx * lx + ly * ly);
        if (d < LINK_DIST) {
          const opacity = (1 - d / LINK_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // cyan accent dots near mouse
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 255, 240, 0.3)";
    ctx.fill();
  }

  let raf;
  function loop() {
    draw();
    raf = requestAnimationFrame(loop);
  }
  loop();

  const onResize = () => {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  const onMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("mousemove", onMove, { passive: true });

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mousemove", onMove);
  };
}

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cleanup = initParticles(canvas);
    return cleanup;
  }, []);

  return (
    <section>
      <div className="hero-section">
        {/* 3D Grid Background */}
        <div className="grid-3d-bg" />

        {/* Particle Canvas */}
        <canvas
          ref={canvasRef}
          className="hero-canvas"
          style={{ width: "100%", height: "100%" }}
        />

        <div className="hero-content">
          {/* Left — Name + Type + CTA */}
          <div>
            <p className="hero-label">{"//"} full-stack developer</p>

            <div className="hero-name-wrap">
              <span className="hero-name">ISAI</span>
              <span className="hero-name-outline">CESPEDES</span>
              {/* Glitch layers */}
              <span className="glitch-layer-1" aria-hidden="true">
                <span style={{ display: "block", lineHeight: 0.9 }}>ISAÍ</span>
                <span style={{ display: "block", lineHeight: 0.9 }}>CÉSPEDES</span>
              </span>
              <span className="glitch-layer-2" aria-hidden="true">
                <span style={{ display: "block", lineHeight: 0.9 }}>ISAÍ</span>
                <span style={{ display: "block", lineHeight: 0.9 }}>CÉSPEDES</span>
              </span>
            </div>

            <div className="hero-type-wrap">
              <Type />
            </div>

            <div className="hero-cta">
              <Link to="/project" className="btn-void">
                [ View Projects ]
              </Link>
              <a
                href="/CV.pdf"
                className="btn-void-outline"
                target="_blank"
                rel="noreferrer"
              >
                [ Download CV ]
              </a>
            </div>
          </div>

          {/* Right — Code Block */}
          <div className="hero-code-block">
            <div className="code-block-header">
              <span className="cb-dot cb-dot-r" />
              <span className="cb-dot cb-dot-y" />
              <span className="cb-dot cb-dot-g" />
              <span className="cb-filename">developer.void</span>
            </div>
            <div className="code-block-body">
              <div className="code-line">
                <span className="c-kw">const</span>{" "}
                <span className="c-var">engineer</span>{" "}
                <span className="c-punc">= &#123;</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">name</span>
                <span className="c-punc">:</span>{" "}
                <span className="c-str">"Isaí Céspedes"</span><span className="c-punc">,</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">location</span>
                <span className="c-punc">:</span>{" "}
                <span className="c-str">"Valencia, Spain"</span><span className="c-punc">,</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">company</span>
                <span className="c-punc">:</span>{" "}
                <span className="c-str">"Stack Builders"</span><span className="c-punc">,</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">stack</span>
                <span className="c-punc">: [</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">"TypeScript"</span>
                <span className="c-punc">,</span>{" "}
                <span className="c-str">"React"</span><span className="c-punc">,</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">"Node.js"</span>
                <span className="c-punc">,</span>{" "}
                <span className="c-str">"GraphQL"</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-punc">],</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">focus</span>
                <span className="c-punc">:</span>{" "}
                <span className="c-str">"DX &amp; type safety"</span><span className="c-punc">,</span>
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="c-key">available</span>
                <span className="c-punc">:</span>{" "}
                <span className="c-bool">true</span>
              </div>
              <div className="code-line">
                <span className="c-punc">&#125;;</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Home2 />
      <Stats />
      <WhatIBuild />
      <ExperienceTimeline />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </section>
  );
}

export default Home;
