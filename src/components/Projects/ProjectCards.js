import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCard({ title, description, ghLink, demoLink, lang, pattern }) {
  return (
    <div className="project-card-panel">
      <div className={`pattern-${pattern || 1}`}></div>
      <div className="pcp-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
        <span className="pcp-filename">
          {title.toLowerCase().replace(/\s+/g, "_")}.js
        </span>
        {lang && <span className="lang-badge">{lang}</span>}
      </div>
      <div className="pcp-body">
        <h3 className="pcp-title">{title}</h3>
        <p className="pcp-desc">{description}</p>
        <div className="pcp-links">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pcp-link"
            >
              <AiFillGithub /> source
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pcp-link"
            >
              <AiOutlineLink /> demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
