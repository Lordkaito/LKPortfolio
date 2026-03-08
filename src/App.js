import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      if (
        t.tagName === "A" || t.tagName === "BUTTON" ||
        t.closest("a") || t.closest("button") ||
        t.classList.contains("proj-card") ||
        t.classList.contains("skill-card")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <Router>
      {/* VOID.EXE Crosshair Cursor */}
      <div
        className="cursor-crosshair"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <span className="ch-h" />
        <span className="ch-v" />
        <span className="ch-dot" />
      </div>
      <div
        className={`cursor-ring${hovered ? " hovered" : ""}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
