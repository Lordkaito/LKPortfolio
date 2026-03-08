import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="d-flex justify-content-center mb-4 mb-md-0">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div
                style={{
                  border: "2px solid var(--border)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 0 30px var(--accent-glow)",
                  maxWidth: "260px",
                }}
              >
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Isai Cespedes"
                  style={{ display: "block", filter: "brightness(0.95)" }}
                />
              </div>
            </Tilt>
          </Col>

          <Col md={8} className="home-about-description">
            <p className="section-label">{"// "}about me</p>
            <h1 style={{ fontSize: "2rem" }}>
              LET ME <span className="cyan">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body" style={{ marginTop: "1.2rem" }}>
              I fell in love with programming and never looked back. I'm a
              full-stack engineer based in{" "}
              <span className="cyan">Valencia, Spain</span>, with 3+ years of
              experience building scalable web applications in{" "}
              <span className="cyan">international, remote-first teams</span>.
              <br />
              <br />
              Currently at <span className="cyan">Stack Builders</span>, I've
              worked with clients like Twilio, Thrv, and Communico — leading
              frontend migrations, type safety overhauls, and DX improvements
              across global teams.
              <br />
              <br />
              I specialize in{" "}
              <span className="cyan">TypeScript, React, and Node.js</span> —
              with a strong focus on{" "}
              <span className="cyan">
                developer experience, code quality, and testing
              </span>
              . I believe great software is built by people who care about the
              details.
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: "3rem" }}>
          <Col md={12} className="home-about-social text-center">
            <p
              className="section-label"
              style={{ justifyContent: "center", display: "flex" }}
            >
              {"// "}find me on
            </p>
            <ul className="home-about-social-links">
              <li>
                <a
                  href="https://github.com/Lordkaito"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiFillGithub /> github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Lordkaito_"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiOutlineTwitter /> twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/isaicespedes/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <FaLinkedinIn /> linkedin
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
