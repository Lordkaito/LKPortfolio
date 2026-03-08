import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCard({ title, description, ghLink, demoLink, lang, pattern }) {
  return (
    <div className="proj-card">
      <div className="proj-card-header">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="proj-card-filename">
          {title.toLowerCase().replace(/\s+/g, "_")}.void
        </span>
        {lang && <span className="lang-badge">{lang}</span>}
      </div>
      <div className="proj-card-body">
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{description}</p>
        <div className="proj-links">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="proj-link">
              <AiFillGithub /> source
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="proj-link">
              <AiOutlineLink /> demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
