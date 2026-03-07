# Portfolio Redesign "Terminal Architect" — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rediseñar el portafolio de Isai Cespedes con estética "Terminal Architect" — cyan eléctrico + negro profundo, tipografía monoespaciada como display, elementos visuales que hablan el lenguaje del developer.

**Architecture:** Multi-página React SPA (Home, About, Projects, Resume). Se mantiene la estructura de rutas React Router existente, se reemplazan todos los estilos CSS y se refactorizan los componentes para el nuevo diseño. No se cambia la lógica de negocio, solo la presentación.

**Tech Stack:** React 17, React Bootstrap 2, React Router v6, react-icons, typewriter-effect, react-github-calendar, @fontsource/jetbrains-mono, @fontsource/dm-sans, @fontsource/space-mono

---

## Task 0: Instalar tipografías y verificar entorno

**Files:**
- Modify: `package.json`
- Modify: `src/index.css`

**Step 1: Instalar paquetes de fuentes**

```bash
cd /Users/icespedes/apps/LKPortfolio
npm install @fontsource/jetbrains-mono @fontsource/dm-sans @fontsource/space-mono
```

Expected: éxito sin errores de peer dependencies.

**Step 2: Verificar que la app compila**

```bash
npm start
```

Expected: compila en < 60 segundos, abre en localhost:3000.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add JetBrains Mono, DM Sans, Space Mono font packages"
```

---

## Task 1: Sistema de diseño — Variables CSS y estilos globales

**Files:**
- Rewrite: `src/style.css`
- Modify: `src/App.css`
- Modify: `src/index.css`

**Step 1: Reemplazar src/style.css en su totalidad**

El archivo completo debe quedar así:

```css
/* ============================================
   TERMINAL ARCHITECT — Design System
   Portfolio: Isai Cespedes (LordKaito)
   ============================================ */

/* Fonts */
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/700.css";
@import "@fontsource/dm-sans/400.css";
@import "@fontsource/dm-sans/500.css";
@import "@fontsource/space-mono/400.css";

/* CSS Variables */
html {
  --bg-primary:     #050a0f;
  --bg-secondary:   #0d1b2a;
  --bg-surface:     #0f2133;
  --bg-surface-2:   #142840;
  --accent-primary: #00d4ff;
  --accent-glow:    rgba(0, 212, 255, 0.15);
  --accent-dim:     #0099bb;
  --text-primary:   #e8f4f8;
  --text-secondary: #6b8fa6;
  --text-code:      #00d4ff;
  --border:         #1a3a4f;
  --border-accent:  #00d4ff;
  --dot-color:      rgba(0, 212, 255, 0.07);
  --font-mono:      'JetBrains Mono', monospace;
  --font-body:      'DM Sans', sans-serif;
  --font-label:     'Space Mono', monospace;
}

/* --------- Base --------- */
body {
  background-color: var(--bg-primary) !important;
  color: var(--text-primary) !important;
  font-family: var(--font-body) !important;
}

.App {
  min-height: 100vh;
  background-color: var(--bg-primary);
}

.cyan {
  color: var(--accent-primary) !important;
}

button:focus {
  box-shadow: none !important;
}

/* --------- Scrollbar --------- */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-secondary); }
::-webkit-scrollbar-thumb {
  background: var(--accent-dim);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--accent-primary);
}

/* --------- Custom Cursor --------- */
body { cursor: none; }
.custom-cursor {
  width: 10px;
  height: 10px;
  background: var(--accent-primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  box-shadow: 0 0 12px var(--accent-primary), 0 0 24px var(--accent-glow);
}
.custom-cursor-ring {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 212, 255, 0.4);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.15s ease;
  transform: translate(-10px, -10px);
}

/* --------- Preloader --------- */
#preloader {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 999999;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
#preloader::after {
  content: ">_ loading...";
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--accent-primary);
  animation: preloader-blink 1s infinite;
}
@keyframes preloader-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
#preloader-none { opacity: 0; transition: opacity 0.3s; }
#no-scroll { overflow: hidden; height: 100vh; }

/* --------- Navbar --------- */
.sticky {
  background-color: rgba(5, 10, 15, 0.92) !important;
  border-bottom: 1px solid var(--accent-primary) !important;
  transition: all 0.3s ease-out 0s !important;
  backdrop-filter: blur(20px) !important;
}
.navbar {
  position: fixed !important;
  transition: all 0.3s ease-out 0s !important;
  padding: 0.8rem 2rem !important;
  font-family: var(--font-mono) !important;
  font-size: 0.9rem !important;
}
.navbar-brand {
  color: var(--accent-primary) !important;
  font-family: var(--font-mono) !important;
  font-size: 1.1rem !important;
  letter-spacing: 0.05em;
}
.navbar-brand .prompt {
  opacity: 0.6;
  margin-right: 4px;
}
.nav-link {
  color: var(--text-secondary) !important;
  transition: color 0.2s ease !important;
  padding: 0.4rem 0.8rem !important;
  position: relative;
}
.nav-link:hover, .nav-link:focus {
  color: var(--accent-primary) !important;
}
.nav-link::after {
  content: "";
  display: block;
  height: 1px;
  background: var(--accent-primary);
  width: 0;
  transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }
.navbar-toggler {
  border: 1px solid var(--border-accent) !important;
  background: transparent !important;
}
.navbar-toggler-icon {
  filter: brightness(0) saturate(100%) invert(70%) sepia(60%) saturate(500%) hue-rotate(163deg) !important;
}
@media (max-width: 767px) {
  .navbar {
    padding: 1rem 1.5rem !important;
    background-color: rgba(5, 10, 15, 0.98) !important;
  }
}

/* --------- Dot Grid Background --------- */
.dot-grid-bg {
  background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* --------- Section Animations --------- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up {
  animation: fadeUp 0.6s ease forwards;
  opacity: 0;
}
.fade-up-1 { animation-delay: 0.1s; }
.fade-up-2 { animation-delay: 0.25s; }
.fade-up-3 { animation-delay: 0.4s; }
.fade-up-4 { animation-delay: 0.55s; }
.fade-up-5 { animation-delay: 0.7s; }

/* --------- Section Label --------- */
.section-label {
  font-family: var(--font-label);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--accent-primary);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

/* --------- HOME Section --------- */
.home-section {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Mesh gradient overlay */
.home-section::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.home-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.heading-label {
  font-family: var(--font-label);
  font-size: 0.8rem;
  color: var(--accent-primary);
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
}

.heading-name {
  font-family: var(--font-mono) !important;
  font-size: clamp(2.5rem, 6vw, 5rem) !important;
  font-weight: 700 !important;
  color: var(--text-primary) !important;
  line-height: 1.05 !important;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.heading-name .main-name {
  display: block;
  color: var(--accent-primary);
}

.type-wrapper {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.type-wrapper .Typewriter__cursor {
  color: var(--accent-primary) !important;
}

/* CTA Buttons */
.btn-terminal {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.65rem 1.5rem;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}
.btn-terminal:hover {
  background: var(--accent-glow);
  color: var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
}
.btn-terminal.filled {
  background: var(--accent-primary);
  color: var(--bg-primary);
}
.btn-terminal.filled:hover {
  background: var(--accent-dim);
  color: var(--bg-primary);
}

/* Code Block Decoration */
.code-block-deco {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.7;
}
.code-block-deco .cb-header {
  background: var(--bg-surface-2);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid var(--border);
}
.code-block-deco .dot {
  width: 10px; height: 10px;
  border-radius: 50%;
}
.dot-red   { background: #ff5f56; }
.dot-yellow{ background: #ffbd2e; }
.dot-green { background: #27c93f; }
.code-block-deco .cb-filename {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-left: 8px;
}
.code-block-deco .cb-body {
  padding: 1.2rem 1.5rem;
}
.code-kw   { color: #569cd6; }
.code-var  { color: #9cdcfe; }
.code-str  { color: #ce9178; }
.code-punc { color: var(--text-secondary); }
.code-cyan { color: var(--accent-primary); }
.code-comment { color: #6a9955; }

/* Line-by-line typing animation */
.code-line {
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  animation: codeLine 0.01s forwards;
}
.code-line:nth-child(1)  { animation-delay: 0.3s; }
.code-line:nth-child(2)  { animation-delay: 0.55s; }
.code-line:nth-child(3)  { animation-delay: 0.8s; }
.code-line:nth-child(4)  { animation-delay: 1.05s; }
.code-line:nth-child(5)  { animation-delay: 1.3s; }
.code-line:nth-child(6)  { animation-delay: 1.55s; }
.code-line:nth-child(7)  { animation-delay: 1.8s; }
.code-line:nth-child(8)  { animation-delay: 2.05s; }
.code-line:nth-child(9)  { animation-delay: 2.3s; }
.code-line:nth-child(10) { animation-delay: 2.55s; }
@keyframes codeLine {
  to { opacity: 1; }
}

/* --------- HOME About (Home2) --------- */
.home-about-section {
  background: var(--bg-secondary);
  padding: 5rem 0;
  position: relative;
}
.home-about-section::before {
  content: "";
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 1px;
  background: linear-gradient(to right, transparent, var(--accent-primary), transparent);
}
.home-about-description h1 {
  font-family: var(--font-mono) !important;
  font-size: 1.8rem !important;
  color: var(--text-primary) !important;
  margin-bottom: 1.5rem;
}
.home-about-body {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

/* Social Links */
.home-about-social h1 {
  font-family: var(--font-mono) !important;
  font-size: 1.2rem !important;
  color: var(--text-secondary) !important;
  letter-spacing: 0.1em;
}
.home-about-social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.social-icon-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-secondary) !important;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  transition: all 0.2s ease;
}
.social-icon-link:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary) !important;
  background: var(--accent-glow);
}
.social-icon-link svg { font-size: 1rem; }

/* --------- ABOUT Section --------- */
.about-section {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
}
.quote-card-view {
  background: var(--bg-surface) !important;
  border: 1px solid var(--border) !important;
  border-radius: 4px !important;
  color: var(--text-secondary) !important;
  padding: 0 !important;
}
.quote-card-view .card-body {
  padding: 2rem !important;
}
.quote-card-view blockquote p {
  color: var(--text-secondary) !important;
  line-height: 1.8;
}
.quote-card-view .about-activity {
  color: var(--text-primary) !important;
  margin: 0.5rem 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
}
.quote-card-view .about-activity svg {
  color: var(--accent-primary);
}

/* Tech & Tools heading */
.project-heading {
  font-family: var(--font-mono) !important;
  font-size: 1.5rem !important;
  color: var(--text-primary) !important;
  text-align: center !important;
  padding: 2rem 0 1rem !important;
}

/* Tech icons */
.tech-icons {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 1rem !important;
}
.tech-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: default;
  width: 100%;
  background: var(--bg-surface);
}
.tech-icon-wrapper:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 16px var(--accent-glow);
  transform: translateY(-3px);
}
.tech-icon-wrapper svg {
  font-size: 2.2rem !important;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}
.tech-icon-wrapper:hover svg { color: var(--accent-primary); }
.tech-icon-wrapper span {
  font-family: var(--font-label);
  font-size: 0.65rem;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
}

/* GitHub Calendar */
.github-calendar-section {
  padding: 2rem 0;
}

/* --------- PROJECTS Section --------- */
.project-section {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary);
}
.project-section-header {
  text-align: center;
  padding: 2rem 0 0.5rem;
}
.project-section-header .prompt {
  font-family: var(--font-mono);
  font-size: 1.8rem;
  color: var(--text-primary);
}
.project-section-header .prompt .cursor-blink {
  color: var(--accent-primary);
  animation: cursorBlink 1s infinite;
}
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.project-section-header p {
  font-family: var(--font-label);
  font-size: 0.75rem;
  color: var(--text-secondary);
  letter-spacing: 0.15em;
  margin-top: 0.5rem;
}

/* Project Cards */
.project-card-item {
  padding: 1rem;
}
.project-card-panel {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.project-card-panel:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 8px 40px rgba(0, 212, 255, 0.1);
  transform: translateY(-4px);
}
.project-card-panel .pcp-header {
  background: var(--bg-surface-2);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid var(--border);
}
.project-card-panel .pcp-filename {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-left: 8px;
  flex: 1;
}
.lang-badge {
  font-family: var(--font-label);
  font-size: 0.65rem;
  padding: 2px 8px;
  border: 1px solid var(--accent-dim);
  border-radius: 2px;
  color: var(--accent-primary);
  letter-spacing: 0.08em;
}
.project-card-panel .pcp-body {
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.project-card-panel .pcp-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}
.project-card-panel .pcp-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}
.project-card-panel .pcp-links {
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}
.pcp-link {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
}
.pcp-link:hover { color: var(--accent-primary); }
.pcp-link svg { font-size: 1rem; }

/* Card pattern backgrounds */
.pattern-1 { background: repeating-linear-gradient(45deg, rgba(0,212,255,0.03) 0, rgba(0,212,255,0.03) 1px, transparent 0, transparent 50%); background-size: 12px 12px; height: 60px; margin-bottom: 0; }
.pattern-2 { background: repeating-linear-gradient(-45deg, rgba(0,212,255,0.03) 0, rgba(0,212,255,0.03) 1px, transparent 0, transparent 50%); background-size: 12px 12px; height: 60px; }
.pattern-3 { background: radial-gradient(rgba(0,212,255,0.08) 1px, transparent 1px); background-size: 16px 16px; height: 60px; }

/* --------- FOOTER --------- */
.footer {
  background: var(--bg-secondary) !important;
  border-top: 1px solid var(--border) !important;
  padding: 2rem 0 !important;
}
.footer-copywright {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-copywright h3 {
  font-family: var(--font-mono) !important;
  font-size: 0.78rem !important;
  color: var(--text-secondary) !important;
  font-weight: 400 !important;
  margin: 0 !important;
}
.footer-body {
  display: flex;
  justify-content: center;
}
.footer-icons {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.footer-icons a {
  color: var(--text-secondary) !important;
  font-size: 1.2rem;
  transition: color 0.2s, transform 0.2s;
  display: block;
}
.footer-icons a:hover {
  color: var(--accent-primary) !important;
  transform: translateY(-2px);
}

/* --------- RESUME Section --------- */
.resume-section {
  min-height: 100vh;
  padding-top: 80px;
  background: var(--bg-primary) !important;
}
.resume-section .resume {
  color: var(--text-secondary) !important;
}

/* --------- Misc --------- */
.about-img img {
  border: 2px solid var(--border);
  filter: brightness(0.9) contrast(1.05);
}

/* Remove old purple references */
.purple { color: var(--accent-primary) !important; }
```

**Step 2: Limpiar App.css** — vaciar el contenido no necesario y dejar solo:

```css
/* App.css — Terminal Architect */
.App {
  text-align: left;
  background-color: var(--bg-primary);
  min-height: 100vh;
}
```

**Step 3: Actualizar index.css** — agregar imports de fuentes al inicio:

```css
/* index.css */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #050a0f;
  color: #e8f4f8;
}

code {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
}
```

**Step 4: Verificar que la app compila sin errores**

```bash
npm start
```

Expected: sin errores de CSS, página visible en localhost:3000.

**Step 5: Commit**

```bash
git add src/style.css src/App.css src/index.css
git commit -m "style: implement Terminal Architect design system — CSS variables, typography, base styles"
```

---

## Task 2: Pre-loader rediseñado

**Files:**
- Modify: `src/components/Pre.js`

**Step 1: Reemplazar Pre.js**

```jsx
import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
    </div>
  );
}

export default Pre;
```

(El preloader se estiliza completamente por CSS — `#preloader::after` con contenido ">_ loading..." ya definido en style.css)

**Step 2: Commit**

```bash
git add src/components/Pre.js
git commit -m "style: redesign preloader with terminal text animation"
```

---

## Task 3: Navbar rediseñada

**Files:**
- Modify: `src/components/Navbar.js`

**Step 1: Reemplazar Navbar.js**

```jsx
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="prompt">&gt;_</span>
          <span>lk.dev</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> about
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
```

**Step 2: Verificar en browser que la navbar se ve bien y los links navegan**

**Step 3: Commit**

```bash
git add src/components/Navbar.js
git commit -m "feat: redesign Navbar with terminal aesthetic — >_ brand, lowercase monospace links"
```

---

## Task 4: Home Hero (Home.js)

**Files:**
- Modify: `src/components/Home/Home.js`

**Step 1: Reemplazar Home.js**

```jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section dot-grid-bg" id="home">
        <Container className="home-content">
          <Row className="align-items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
            <Col md={6} className="fade-up fade-up-1">
              <p className="heading-label">// full-stack developer</p>
              <h1 className="heading-name">
                ISAI
                <strong className="main-name">CESPEDES</strong>
              </h1>
              <div className="type-wrapper">
                <Type />
              </div>
              <div style={{ marginTop: "2rem" }}>
                <a href="/project" className="btn-terminal filled">
                  [ View Projects ]
                </a>
                <a
                  href="/CV.pdf"
                  className="btn-terminal"
                  target="_blank"
                  rel="noreferrer"
                >
                  [ Download CV ]
                </a>
              </div>
            </Col>

            <Col md={6} className="fade-up fade-up-3 d-none d-md-block">
              <div className="code-block-deco">
                <div className="cb-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="cb-filename">developer.js</span>
                </div>
                <div className="cb-body">
                  <div className="code-line"><span className="code-kw">const</span> <span className="code-var">developer</span> <span className="code-punc">= &#123;</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-var">name</span><span className="code-punc">:</span> <span className="code-str">"Isai Cespedes"</span><span className="code-punc">,</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-var">location</span><span className="code-punc">:</span> <span className="code-str">"Valencia, Spain"</span><span className="code-punc">,</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-var">skills</span><span className="code-punc">: [</span></div>
                  <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"JavaScript"</span><span className="code-punc">,</span> <span className="code-str">"TypeScript"</span><span className="code-punc">,</span></div>
                  <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"React"</span><span className="code-punc">,</span> <span className="code-str">"Node.js"</span><span className="code-punc">,</span> <span className="code-str">"Ruby"</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-punc">],</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-var">passion</span><span className="code-punc">:</span> <span className="code-str">"gaming &amp; web"</span><span className="code-punc">,</span></div>
                  <div className="code-line">&nbsp;&nbsp;<span className="code-var">available</span><span className="code-punc">:</span> <span className="code-cyan">true</span></div>
                  <div className="code-line"><span className="code-punc">&#125;;</span></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
```

**Step 2: Verificar en browser — hero debe mostrarse con code block a la derecha en desktop**

**Step 3: Commit**

```bash
git add src/components/Home/Home.js
git commit -m "feat: redesign Home hero with 2-col layout and animated code block decoration"
```

---

## Task 5: Type.js — Actualizar strings

**Files:**
- Modify: `src/components/Home/Type.js`

**Step 1: Reemplazar Type.js**

```jsx
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "React & Node.js Builder",
          "TypeScript Enthusiast",
          "Open Source Contributor",
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
```

**Step 2: Commit**

```bash
git add src/components/Home/Type.js
git commit -m "feat: update typewriter strings to be more specific and professional"
```

---

## Task 6: Home2 — Sección de Intro

**Files:**
- Modify: `src/components/Home/Home2.js`

**Step 1: Reemplazar Home2.js**

```jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="d-flex justify-content-center mb-4 mb-md-0">
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div style={{
                border: "2px solid var(--border)",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 0 30px var(--accent-glow)",
                maxWidth: "260px"
              }}>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="Isai Cespedes"
                  style={{ display: "block", filter: "brightness(0.95)" }}
                />
              </div>
            </Tilt>
          </Col>

          <Col md={8} className="home-about-description">
            <p className="section-label">// about me</p>
            <h1 style={{ fontSize: "2rem" }}>
              LET ME <span className="cyan">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body" style={{ marginTop: "1.2rem" }}>
              I fell in love with programming a long time ago and never looked back.
              I'm a full-stack developer based in Valencia, Spain, with 2+ years of experience
              building web applications — from streaming tools to backend APIs.
              <br /><br />
              My core stack is{" "}
              <span className="cyan">JavaScript, TypeScript, Ruby</span> — I work across
              the full stack with{" "}
              <span className="cyan">React, Node.js, Next.js, and Ruby on Rails</span>.
              <br /><br />
              When I'm not building, I'm gaming, streaming, or experimenting with
              new technologies. I believe the best products are built by people who
              actually <span className="cyan">care</span> about the details.
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: "3rem" }}>
          <Col md={12} className="home-about-social text-center">
            <p className="section-label" style={{ justifyContent: "center", display: "flex" }}>// find me on</p>
            <ul className="home-about-social-links">
              <li>
                <a
                  href="https://github.com/Lordkaito"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiFillGithub /> github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Lordkaito_"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiOutlineTwitter /> twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/isaicespedes/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <FaLinkedinIn /> linkedin
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
```

**Step 2: Commit**

```bash
git add src/components/Home/Home2.js
git commit -m "feat: redesign Home2 intro section with new layout and improved copy"
```

---

## Task 7: About Page

**Files:**
- Modify: `src/components/About/About.js`
- Modify: `src/components/About/AboutCard.js`
- Modify: `src/components/About/Github.js`

**Step 1: Actualizar About.js**

```jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <p className="section-label">// who am i</p>
            <h1 style={{
              fontSize: "2rem",
              fontFamily: "var(--font-mono)",
              paddingBottom: "20px"
            }}>
              Know Who <span className="cyan">I'M</span>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* Placeholder decorative element if no image */}
          </Col>
        </Row>

        <h1 className="project-heading">
          <span className="cyan">// </span>professional skillset
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <span className="cyan">// </span>tools i use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
```

**Step 2: Actualizar AboutCard.js**

```jsx
import React from "react";
import Card from "react-bootstrap/Card";
import { TbTerminal2 } from "react-icons/tb";
import { AiFillCode } from "react-icons/ai";
import { MdSportsEsports } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi, I'm <span className="cyan">Isai Cespedes</span>, a full-stack developer
            from <span className="cyan">Valencia, Spain</span>.
            <br /><br />
            I have 2+ years of professional experience building web products —
            from Twitch streaming tools and Chrome extensions to REST APIs and
            full-stack applications. I care deeply about clean code, good DX, and
            shipping things that actually work.
          </p>
          <ul style={{ paddingLeft: 0, marginTop: "1.2rem" }}>
            <li className="about-activity">
              <MdSportsEsports /> Gaming &amp; Streaming
            </li>
            <li className="about-activity">
              <AiFillCode /> Building side projects
            </li>
            <li className="about-activity">
              <TbTerminal2 /> Exploring new stacks
            </li>
          </ul>
          <p style={{ color: "var(--text-secondary)", marginTop: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
            "If you can think about it, you can make it"
          </p>
          <footer style={{ color: "var(--accent-primary)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            — Isai Cespedes
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
```

**Step 3: Actualizar Github.js** — cambiar el color del calendario a cyan:

```jsx
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="github-calendar-section">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <span className="cyan">// </span>days i code
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
```

**Step 4: Commit**

```bash
git add src/components/About/About.js src/components/About/AboutCard.js src/components/About/Github.js
git commit -m "feat: redesign About page and AboutCard with improved content and cyan calendar"
```

---

## Task 8: Techstack y Toolstack rediseñados

**Files:**
- Modify: `src/components/About/Techstack.js`
- Modify: `src/components/About/Toolstack.js`

**Step 1: Reemplazar Techstack.js** — agregar nombre debajo de cada icono:

```jsx
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiRuby,
} from "react-icons/di";
import {
  SiNextdotjs, SiTypescript, SiRedux, SiPostgresql, SiRubyonrails, SiExpress,
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
```

**Step 2: Reemplazar Toolstack.js**

```jsx
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiDocker,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <DiGithubBadge />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiSlack />, name: "Slack" },
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
```

**Step 3: Commit**

```bash
git add src/components/About/Techstack.js src/components/About/Toolstack.js
git commit -m "feat: redesign Techstack and Toolstack with badge style and labels"
```

---

## Task 9: Projects Page y ProjectCards

**Files:**
- Modify: `src/components/Projects/Projects.js`
- Rewrite: `src/components/Projects/ProjectCards.js`

**Step 1: Reemplazar ProjectCards.js**

```jsx
import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectCard({ title, description, ghLink, demoLink, lang, pattern }) {
  return (
    <div className="project-card-panel">
      <div className={`pattern-${pattern || 1}`}></div>
      <div className="pcp-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
        <span className="pcp-filename">{title.toLowerCase().replace(/\s+/g, "_")}.js</span>
        {lang && <span className="lang-badge">{lang}</span>}
      </div>
      <div className="pcp-body">
        <h3 className="pcp-title">{title}</h3>
        <p className="pcp-desc">{description}</p>
        <div className="pcp-links">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="pcp-link">
              <AiFillGithub /> source
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="pcp-link">
              <AiOutlineLink /> demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
```

**Step 2: Reemplazar Projects.js**

```jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Web Crawler",
    description: "Web crawler built with Puppeteer that extracts data from Hacker News (YCombinator). Supports filtering by comments, points, or viewing all articles.",
    ghLink: "https://github.com/Lordkaito/web-crawler",
    lang: "JS",
    pattern: 1,
  },
  {
    title: "Multichattt",
    description: "Watch multiple Twitch streams and their chats simultaneously. Built with React and TypeScript, uses the Twitch API for stream data and chat integration.",
    ghLink: "https://github.com/Lordkaito/multichattt",
    lang: "TS",
    pattern: 2,
  },
  {
    title: "Transcripthorrr",
    description: "Python Flask server that uses AI to transcribe audio to text. Exposes two endpoints — one for quick transcription and one for higher accuracy.",
    ghLink: "https://github.com/Lordkaito/transcripthorrr",
    lang: "PY",
    pattern: 3,
  },
  {
    title: "Budget",
    description: "A personal expense tracker built with Ruby. Track daily and monthly spending, add purchase notes, manage user accounts — create, edit, and delete.",
    ghLink: "https://github.com/Lordkaito/budget",
    lang: "RB",
    pattern: 1,
  },
  {
    title: "Car Rental Backend",
    description: "Ruby backend API for managing a car rental service. Full CRUD for cars, customers, and rentals. Search by brand, model, year, and price.",
    ghLink: "https://github.com/Lordkaito/final-capstone-backend",
    lang: "RB",
    pattern: 2,
  },
  {
    title: "Bwidgets",
    description: "Online platform for Twitch streamers to discover, preview, and acquire custom stream widgets. Built with React and TypeScript.",
    ghLink: "https://github.com/Lordkaito/bwidgets-frontend",
    lang: "TS",
    pattern: 3,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="project-section-header">
          <h1 className="prompt">
            &gt;_ my_projects<span className="cursor-blink">_</span>
          </h1>
          <p>// 6 projects · github.com/Lordkaito</p>
        </div>

        <Row style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          {projects.map((proj, i) => (
            <Col md={4} className="project-card-item" key={i}>
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
```

**Step 3: Verificar que los 6 proyectos se muestran en /project**

**Step 4: Commit**

```bash
git add src/components/Projects/Projects.js src/components/Projects/ProjectCards.js
git commit -m "feat: redesign Projects page — code panel cards with lang badges and dot patterns"
```

---

## Task 10: Footer rediseñado

**Files:**
- Modify: `src/components/Footer.js`

**Step 1: Reemplazar Footer.js**

```jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center justify-content-between">
        <Col md={4} className="footer-copywright">
          <h3>designed &amp; built by <span style={{ color: "var(--accent-primary)" }}>lordkaito_</span></h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>© {year} isai cespedes</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li>
              <a href="https://github.com/Lordkaito" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Lordkaito_" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/isaicespedes/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
```

**Step 2: Commit**

```bash
git add src/components/Footer.js
git commit -m "feat: redesign Footer with monospace typography and cyan accent"
```

---

## Task 11: Cursor personalizado (App.js)

**Files:**
- Modify: `src/App.js`

**Step 1: Agregar cursor personalizado en App.js**

```jsx
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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <Router>
      {/* Custom cursor */}
      <div
        className="custom-cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className="custom-cursor-ring"
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
```

**Step 2: Commit**

```bash
git add src/App.js
git commit -m "feat: add custom cyan cursor with glow effect"
```

---

## Task 12: Eliminar Particle.js (ya no se usa)

**Files:**
- Check: `src/components/Particle.js` — verificar si algo lo sigue importando

**Step 1: Buscar imports de Particle**

```bash
grep -r "Particle" src/ --include="*.js"
```

Expected: solo aparece en About.js (que no lo usa en el nuevo diseño, pero lo importa). Si hay imports, removerlos.

**Step 2: En src/components/About/About.js** — ya el nuevo About.js propuesto no importa Particle. Verificar que no hay imports sobrantes.

**Step 3: Commit**

```bash
git add src/components/About/About.js
git commit -m "chore: remove unused Particle import from About page"
```

---

## Task 13: Verificación Final

**Step 1: Build de producción para detectar errores**

```bash
npm run build
```

Expected: build exitoso, sin errores. Solo warnings menores son acceptables.

**Step 2: Revisar manualmente en browser todas las rutas**

- `/` — Hero con code block, typewriter, CTAs
- `/about` — Intro card, tech badges con glow, GitHub calendar cyan
- `/project` — 6 cards estilo código con lang badges
- `/resume` — PDF viewer funcional
- Navbar sticky al hacer scroll
- Cursor personalizado visible en desktop
- Mobile responsive (probar con DevTools en 375px)

**Step 3: Commit final**

```bash
git add -A
git commit -m "style: final design polish and cleanup — Terminal Architect complete"
```

---

## Resumen de Cambios

| Archivo | Tipo de cambio |
|---|---|
| `src/style.css` | Rewrite completo |
| `src/App.css` | Simplificado |
| `src/index.css` | Actualizado |
| `src/App.js` | Cursor personalizado añadido |
| `src/components/Pre.js` | Restyle CSS |
| `src/components/Navbar.js` | Rediseñado |
| `src/components/Footer.js` | Rediseñado |
| `src/components/Home/Home.js` | Rewrite — hero + code block |
| `src/components/Home/Home2.js` | Refactored — intro asimétrica |
| `src/components/Home/Type.js` | Strings actualizados |
| `src/components/About/About.js` | Refactored |
| `src/components/About/AboutCard.js` | Rewrite — mejor contenido |
| `src/components/About/Github.js` | Tema cyan |
| `src/components/About/Techstack.js` | Badges con labels |
| `src/components/About/Toolstack.js` | Badges con labels |
| `src/components/Projects/Projects.js` | Rewrite — layout y data |
| `src/components/Projects/ProjectCards.js` | Rewrite — code panels |
