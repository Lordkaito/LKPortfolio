import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Web Crawler",
    description:
      "Web crawler built with Puppeteer that extracts data from Hacker News (YCombinator). Supports filtering by comments, points, or viewing all articles.",
    ghLink: "https://github.com/Lordkaito/web-crawler",
    lang: "JS",
    pattern: 1,
  },
  {
    title: "Multichattt",
    description:
      "Watch multiple Twitch streams and their chats simultaneously. Built with React and TypeScript, uses the Twitch API for stream data and chat integration.",
    ghLink: "https://github.com/Lordkaito/multichattt",
    lang: "TS",
    pattern: 2,
  },
  {
    title: "Transcripthorrr",
    description:
      "Python Flask server that uses AI to transcribe audio to text. Exposes two endpoints — one for quick transcription and one for higher accuracy.",
    ghLink: "https://github.com/Lordkaito/transcripthorrr",
    lang: "PY",
    pattern: 3,
  },
  {
    title: "Budget",
    description:
      "A personal expense tracker built with Ruby. Track daily and monthly spending, add purchase notes, manage user accounts — create, edit, and delete.",
    ghLink: "https://github.com/Lordkaito/budget",
    lang: "RB",
    pattern: 1,
  },
  {
    title: "Car Rental Backend",
    description:
      "Ruby backend API for managing a car rental service. Full CRUD for cars, customers, and rentals. Search by brand, model, year, and price.",
    ghLink: "https://github.com/Lordkaito/final-capstone-backend",
    lang: "RB",
    pattern: 2,
  },
  {
    title: "Bwidgets",
    description:
      "Online platform for Twitch streamers to discover, preview, and acquire custom stream widgets. Built with React and TypeScript.",
    ghLink: "https://github.com/Lordkaito/bwidgets-frontend",
    lang: "TS",
    pattern: 3,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="project-section-header">
          <h1 className="prompt">
            &gt;_ my_projects
            <span className="cursor-blink">_</span>
          </h1>
          <p>// 6 projects &middot; github.com/Lordkaito</p>
        </div>

        <Row style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          {projects.map((proj, i) => (
            <Col md={4} className="project-card-item" key={i}>
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
