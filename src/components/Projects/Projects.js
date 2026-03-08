import React from "react";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Web Crawler",
    description:
      "Web crawler built with Puppeteer that extracts data from Hacker News (YCombinator). Supports filtering by comments, points, or viewing all articles.",
    ghLink: "https://github.com/Lordkaito/web-crawler",
    lang: "JS",
  },
  {
    title: "Multichattt",
    description:
      "Watch multiple Twitch streams and their chats simultaneously. Built with React and TypeScript, uses the Twitch API for stream data and chat integration.",
    ghLink: "https://github.com/Lordkaito/multichattt",
    lang: "TS",
  },
  {
    title: "Transcripthorrr",
    description:
      "Python Flask server that uses AI to transcribe audio to text. Exposes two endpoints — one for quick transcription and one for higher accuracy.",
    ghLink: "https://github.com/Lordkaito/transcripthorrr",
    lang: "PY",
  },
  {
    title: "Budget",
    description:
      "A personal expense tracker built with Ruby. Track daily and monthly spending, add purchase notes, manage user accounts — create, edit, and delete.",
    ghLink: "https://github.com/Lordkaito/budget",
    lang: "RB",
  },
  {
    title: "Car Rental Backend",
    description:
      "Ruby backend API for managing a car rental service. Full CRUD for cars, customers, and rentals. Search by brand, model, year, and price.",
    ghLink: "https://github.com/Lordkaito/final-capstone-backend",
    lang: "RB",
  },
  {
    title: "Bwidgets",
    description:
      "Online platform for Twitch streamers to discover, preview, and acquire custom stream widgets. Built with React and TypeScript.",
    ghLink: "https://github.com/Lordkaito/bwidgets-frontend",
    lang: "TS",
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="prompt-text">
            &gt;_ my_projects<span className="cursor-blink">_</span>
          </div>
          <p className="sub">// 6 projects · github.com/Lordkaito</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
