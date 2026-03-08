import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Engineer",
          "TypeScript Specialist",
          "Developer Experience Advocate",
          "React & Node.js Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  );
}

export default Type;
