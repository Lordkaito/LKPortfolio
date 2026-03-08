import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <p className="section-label">{"// "}who am i</p>
            <h1
              style={{
                fontSize: "2rem",
                fontFamily: "var(--font-mono)",
                paddingBottom: "20px",
                color: "var(--text-primary)",
              }}
            >
              Know Who <span className="cyan">I'M</span>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>

        <h1 className="project-heading">
          <span className="cyan">{"// "}</span>professional skillset
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <span className="cyan">{"// "}</span>tools i use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
