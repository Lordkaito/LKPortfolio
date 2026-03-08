import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "3rem",
        paddingTop: "2rem",
      }}
    >
      <h2 className="skills-section-title">
        <span className="gold">{"//"} </span>Days I Code
      </h2>
      <GitHubCalendar
        username="Lordkaito"
        blockSize={14}
        blockMargin={4}
        theme={{
          dark: ["#0a0a1a", "#3a2e09", "#7a6015", "#b89328", "#D4AF37"],
        }}
        fontSize={14}
      />
    </div>
  );
}

export default Github;
