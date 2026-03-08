# VOID.EXE — Rediseño Completo del Portafolio

> **Para Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans para implementar este plan tarea por tarea.

**Goal:** Rediseño total del portafolio de Isaí Céspedes con estética VOID.EXE — Hacker-Luxury + Cyberpunk Surrealista.

**Architecture:** CSS puro + React sin librerías adicionales. Canvas nativo para partículas. Todos los archivos de componentes se reescriben desde cero con el nuevo sistema de diseño. Datos (nombre, bio, proyectos, skills) se preservan.

**Tech Stack:** React 17, JetBrains Mono + Bebas Neue (Google Fonts), react-tsparticles (ya instalado), typewriter-effect (ya instalado), react-icons (ya instalado), CSS custom con variables.

---

### Tarea 1: Fuentes + index.html

**Archivos:**
- Modificar: `public/index.html`

Reemplazar el `<head>` para añadir Google Fonts: Bebas Neue (400), JetBrains Mono (400, 700), DM Sans (400, 500).

---

### Tarea 2: Design System completo — style.css

**Archivos:**
- Reemplazar: `src/style.css`

Variables CSS completas (paleta gold/cyan/void-black), base styles, utility classes, animaciones (glitch, scanline, fade-up, noise), cursor crosshair, 3D grid perspective background class, card hover states.

---

### Tarea 3: Preloader — Pre.js

**Archivos:**
- Reemplazar: `src/components/Pre.js`

Bootloader estilo: "VOID.EXE INITIALIZING..." en mono verde terminal. Barra de progreso dorada animada CSS. 1.8s duración.

---

### Tarea 4: Navbar

**Archivos:**
- Reemplazar: `src/components/Navbar.js`

Logo `[ LC ]` en dorado. Links con subrayado gold de izquierda a derecha en hover. Backdrop blur. Línea dorada 1px bottom al scroll.

---

### Tarea 5: Hero — Home.js + Type.js

**Archivos:**
- Reemplazar: `src/components/Home/Home.js`
- Reemplazar: `src/components/Home/Type.js`

Canvas nativo para partículas que orbitan al cursor. Nombre ISAI gigante en Bebas Neue dorado + CÉSPEDES en outline. Efecto glitch en hover. Bloque de código a la derecha. Botones CTA gold.

---

### Tarea 6: About inline — Home2.js

**Archivos:**
- Reemplazar: `src/components/Home/Home2.js`

Avatar con borde gold + glow. Bio con highlights. Links sociales estilizados.

---

### Tarea 7: About page + cards

**Archivos:**
- Reemplazar: `src/components/About/About.js`
- Reemplazar: `src/components/About/AboutCard.js`
- Reemplazar: `src/components/About/Techstack.js`
- Reemplazar: `src/components/About/Toolstack.js`

Timeline de carrera. Skills con glow individual al hover.

---

### Tarea 8: Projects

**Archivos:**
- Reemplazar: `src/components/Projects/Projects.js`
- Reemplazar: `src/components/Projects/ProjectCards.js`

Cards con scanline sweep en hover. Badge de lenguaje cyan. Border gold on hover.

---

### Tarea 9: Footer + App.js

**Archivos:**
- Reemplazar: `src/components/Footer.js`
- Modificar: `src/App.js`

Footer minimalista. Cursor crosshair gold + punto cyan en App.js.
