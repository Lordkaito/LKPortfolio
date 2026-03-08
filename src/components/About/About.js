import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <p className="section-eyebrow">{"//"} who am i</p>
        <h1 className="section-title" style={{ marginBottom: "2rem" }}>
          KNOW WHO <span className="gold">I'M</span>
        </h1>
        <AboutCard />

        <h2 className="skills-section-title">
          <span className="gold">{"//"} </span>Professional Skillset
        </h2>
        <Techstack />

        <h2 className="skills-section-title">
          <span className="gold">{"//"} </span>Tools I Use
        </h2>
        <Toolstack />

        <Github />
      </div>
    </div>
  );
}

export default About;
