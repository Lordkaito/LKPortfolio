import React from "react";

function Pre({ load }) {
  if (!load) return <div id="preloader-none" />;

  return (
    <div id="preloader">
      <div className="boot-logo">VOID.EXE</div>
      <div className="boot-text">
        INITIALIZING SYSTEM<span className="blink">_</span>
      </div>
      <div className="boot-bar-wrap">
        <div className="boot-bar" />
      </div>
      <div className="boot-version">v2.0.26 // ISAI CÉSPEDES // PORTFOLIO</div>
    </div>
  );
}

export default Pre;
