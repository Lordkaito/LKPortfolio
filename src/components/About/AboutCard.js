import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Isai Cespedes </span>
            from <span className="purple"> Valencia, Spain.</span>
            <br /> I am a full stack Software Developer with 2+ years of experience in web development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Streaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can think about it, you can make it"{" "}
          </p>
          <footer className="blockquote-footer">Isai Cespedes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
