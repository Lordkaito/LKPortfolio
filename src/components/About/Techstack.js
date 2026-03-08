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
  SiGraphql,
  SiJest,
  SiPhp,
  SiEslint,
} from "react-icons/si";

const skills = [
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <DiRuby />, name: "Ruby" },
  { icon: <SiRubyonrails />, name: "Rails" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <SiEslint />, name: "ESLint" },
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
