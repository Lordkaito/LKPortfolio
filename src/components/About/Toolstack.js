import React from "react";
import {
  SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiDocker, SiPrettier, SiJira,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <DiGithubBadge />, name: "GitHub" },
  { icon: <SiPrettier />, name: "Prettier" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiJira />, name: "Jira" },
];

function Toolstack() {
  return (
    <div className="skills-grid">
      {tools.map((t, i) => (
        <div className="skill-card" key={i}>
          {t.icon}
          <span>{t.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
