import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "10px" }}
      className="github-calendar-section"
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <span className="cyan">{"// "}</span>days i code
      </h1>
      <GitHubCalendar
        username="Lordkaito"
        blockSize={14}
        blockMargin={4}
        theme={{
          dark: ["#0d1b2a", "#0a3a4f", "#005f7a", "#0099bb", "#00d4ff"],
        }}
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
