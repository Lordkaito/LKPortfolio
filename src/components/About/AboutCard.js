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
            Hi, I'm <span className="cyan">Isai Cespedes</span>, a full-stack
            developer from <span className="cyan">Valencia, Spain</span>.
            <br />
            <br />
            I have 2+ years of professional experience building web products —
            from Twitch streaming tools and Chrome extensions to REST APIs and
            full-stack applications. I care deeply about clean code, good DX,
            and shipping things that actually work.
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
              <TbTerminal2 /> Exploring new stacks
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
            — Isai Cespedes
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
