import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Web Crawler"
              description="A web crawler built with JavaScript using puppeteer. It using the ycombinator website as a base, extracts information from the articles and allows you to filter them by comments, points or show them all."
              ghLink="https://github.com/Lordkaito/web-crawler"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Multichattt"
              description="A website built to allow you to see many twitch chats at the same time, including the streams of those users. Built with React and Typescript, it uses the twitch API to get the information of the streams and the chat."
              ghLink="https://github.com/Lordkaito/multichattt"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Transcripthorrr"
              description="A simple Python server that uses AI to transcript audio to text. This version uses two endpoints in an API depending if you want a quick transcription or a more accurate one. Built with Flask Python"
              ghLink="https://github.com/Lordkaito/transcripthorrr"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Budget"
              description="An app to help you track your daily and monthly expenses, allowing you to add all the purchases you do, date and adding notes to it. You can login, create a new account, edit your profile and delete it. Built with Ruby"
              ghLink="https://github.com/Lordkaito/budget"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Car rental backend"
              description="Backend built with Ruby to manage a car rental company. It allows you to create, edit and delete cars, customers and rentals. It also allows you to search for cars by brand, model, year and price."
              ghLink="https://github.com/Lordkaito/final-capstone-backend"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Bwidgets"
              description="An online platform to store and showcase some custom widgets for twitch streamers. Built with React and Typescript this app allows you to see, test and buy widgets for your stream"
              ghLink="https://github.com/Lordkaito/bwidgets-frontend"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
