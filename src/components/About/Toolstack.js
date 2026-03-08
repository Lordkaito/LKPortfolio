import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiDocker,
  SiPrettier,
  SiJira,
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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          <div className="tech-icon-wrapper">
            {tool.icon}
            <span>{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
