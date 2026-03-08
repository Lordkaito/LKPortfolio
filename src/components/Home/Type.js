import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "TypeScript Architect",
          "Developer Experience Advocate",
          "React & Node.js Builder",
          "Remote-First Collaborator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
        delay: 55,
      }}
    />
  );
}

export default Type;
