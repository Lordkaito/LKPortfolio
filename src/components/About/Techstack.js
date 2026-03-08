import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiRuby,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiRubyonrails,
  SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <DiRuby />, name: "Ruby" },
  { icon: <SiRubyonrails />, name: "Rails" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          <div className="tech-icon-wrapper">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
