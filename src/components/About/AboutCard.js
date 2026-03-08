import React from "react";
import { TbTerminal2 } from "react-icons/tb";
import { AiFillCode } from "react-icons/ai";
import { MdSportsEsports } from "react-icons/md";

function AboutCard() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.98rem", lineHeight: 1.82, color: "var(--text-dim)", marginBottom: "1.5rem" }}>
        Hi, I'm <span style={{ color: "var(--gold)", fontWeight: 500 }}>Isaí Céspedes</span>, a full-stack
        software engineer from <span style={{ color: "var(--gold)", fontWeight: 500 }}>Valencia, Spain</span>.
        <br /><br />
        I have <span style={{ color: "var(--cyan)" }}>3+ years</span> of professional experience
        contributing to scalable web applications in international, remote-first teams. Currently at{" "}
        <span style={{ color: "var(--gold)", fontWeight: 500 }}>Stack Builders</span>, I've led frontend
        migrations, type safety overhauls (resolving 4,000+ TypeScript errors), and developer experience
        improvements for clients including Twilio, Thrv, and Communico.
        <br /><br />
        I specialize in <span style={{ color: "var(--gold)", fontWeight: 500 }}>TypeScript, React, and developer experience</span>{" "}
        — with a strong emphasis on testing, clean code, and shipping reliable software.
      </p>

      <ul className="activity-list">
        <li className="activity-item">
          <MdSportsEsports /> Gaming &amp; Streaming
        </li>
        <li className="activity-item">
          <AiFillCode /> Building side projects
        </li>
        <li className="activity-item">
          <TbTerminal2 /> Improving developer experience
        </li>
      </ul>

      <div className="quote-block" style={{ marginTop: "2rem" }}>
        <p className="quote-text">"If you can think about it, you can make it"</p>
        <p className="quote-author">— Isaí Céspedes</p>
      </div>
    </div>
  );
}

export default AboutCard;
