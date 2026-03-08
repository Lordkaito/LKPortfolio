import React from "react";
import Card from "react-bootstrap/Card";
import { TbTerminal2 } from "react-icons/tb";
import { AiFillCode } from "react-icons/ai";
import { MdSportsEsports } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi, I'm <span className="cyan">Isaí Céspedes</span>, a full-stack
            software engineer from{" "}
            <span className="cyan">Valencia, Spain</span>.
            <br />
            <br />
            I have <span className="cyan">3+ years</span> of professional
            experience contributing to scalable web applications in
            international, remote-first teams. Currently at{" "}
            <span className="cyan">Stack Builders</span>, I've led frontend
            migrations, type safety overhauls (resolving 4,000+ TypeScript
            errors), and developer experience improvements for clients including
            Twilio, Thrv, and Communico.
            <br />
            <br />
            I specialize in{" "}
            <span className="cyan">
              TypeScript, React, and developer experience
            </span>{" "}
            — with a strong emphasis on testing, clean code, and shipping
            reliable software.
          </p>
          <ul
            style={{
              paddingLeft: 0,
              marginTop: "1.2rem",
              listStyle: "none",
            }}
          >
            <li className="about-activity">
              <MdSportsEsports /> Gaming &amp; Streaming
            </li>
            <li className="about-activity">
              <AiFillCode /> Building side projects
            </li>
            <li className="about-activity">
              <TbTerminal2 /> Improving developer experience
            </li>
          </ul>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
            }}
          >
            "If you can think about it, you can make it"
          </p>
          <footer
            style={{
              color: "var(--accent-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
            }}
          >
            — Isaí Céspedes
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
