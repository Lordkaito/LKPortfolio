import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`void-nav${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="nav-logo" onClick={close}>
          [ LC ]
        </Link>
        <ul className="nav-links">
          <li className="nav-link-item"><Link to="/">home</Link></li>
          <li className="nav-link-item"><Link to="/about">about</Link></li>
          <li className="nav-link-item"><Link to="/project">projects</Link></li>
          <li className="nav-link-item"><Link to="/resume">resume</Link></li>
          <li className="nav-link-item"><a href="/#contact">contact</a></li>
        </ul>
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </nav>
      {open && (
        <div className="nav-mobile-menu">
          <Link to="/" onClick={close}><span className="gold">{"//"}</span> home</Link>
          <Link to="/about" onClick={close}><span className="gold">{"//"}</span> about</Link>
          <Link to="/project" onClick={close}><span className="gold">{"//"}</span> projects</Link>
          <Link to="/resume" onClick={close}><span className="gold">{"//"}</span> resume</Link>
          <a href="/#contact" onClick={close}><span className="gold">{"//"}</span> contact</a>
        </div>
      )}
    </>
  );
}

export default NavBar;
