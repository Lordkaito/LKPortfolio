# Portfolio Redesign — "Terminal Architect"
**Date**: 2026-03-08  
**Owner**: Isai Cespedes (LordKaito)

---

## 1. Resumen Ejecutivo

Rediseño completo del portafolio de Isai Cespedes. El objetivo es pasar de un template genérico con tema oscuro-morado a una identidad visual distintiva que refleje la personalidad técnica del desarrollador (dev de gaming/streaming, JS/Ruby/TypeScript) manteniendo profesionalismo para recruiters.

**Tono**: Híbrido — profesional con personalidad  
**Estética**: "Terminal Architect" — refinado, tech, con lenguaje visual de código  
**Concepto diferenciador**: Los elementos visuales hablan el idioma del developer (bloques de código decorativos, sintaxis como ornamento, tipografía monoespaciada para display)

---

## 2. Sistema de Diseño

### Paleta de Colores
```css
--bg-primary:     #050a0f   /* Negro con tinte azul */
--bg-secondary:   #0d1b2a   /* Azul noche profundo */
--bg-surface:     #0f2133   /* Superficies / tarjetas */
--accent-primary: #00d4ff   /* Cyan eléctrico (accent principal) */
--accent-glow:    #00d4ff40 /* Cyan con transparencia (efectos glow) */
--accent-dim:     #0099bb   /* Cyan oscuro (hover/estados) */
--text-primary:   #e8f4f8   /* Blanco-azulado */
--text-secondary: #6b8fa6   /* Gris-azul (texto secundario) */
--text-code:      #00d4ff   /* Cyan puro (texto estilo código) */
--border:         #1a3a4f   /* Bordes de tarjetas/secciones */
```

### Tipografía
| Uso | Familia | Peso |
|---|---|---|
| Encabezados / display | JetBrains Mono | 700 |
| Labels de sección | Space Mono | 400 |
| Body / descripciones | DM Sans | 400/500 |
| Código decorativo | JetBrains Mono | 400 |

### Animaciones
- **Page entry**: fade-in + translateY(20px → 0) con stagger por elemento
- **Typewriter**: cursor `_` parpadeante cyan, textos typewriter-effect actuales
- **Card hover**: border-color → cyan, box-shadow glow, translateY(-4px)
- **Navbar scroll**: backdrop-blur + bottom border cyan 1px
- **Cursor**: punto cyan con halo difuso (CSS custom cursor)
- **Code block hero**: líneas que aparecen una a una con animación de typing

---

## 3. Arquitectura de Páginas

### Home (`/`)

**Hero Section** (viewport completo):
- Columna izquierda (60%):
  - Label: `// full-stack developer` (Space Mono, cyan)
  - H1: `ISAI` en una línea, `CESPEDES` en la siguiente (JetBrains Mono, gigante)
  - Typewriter de roles debajo del nombre
  - 2 CTAs: `[ View Projects ]` → ruta /project | `[ Download CV ]` → PDF
- Columna derecha (40%): Bloque de código decorativo animado con sintaxis JS
- Fondo: Mesh gradient oscuro sutil + dot-grid pattern tenue

**Intro Section** (Home2 refactorizado):
- Avatar con marco geométrico cyan (border recortado, no circle)
- Texto intro mejorado (primera persona natural)
- Social icons modernos con tooltips

---

### About (`/about`)

- **Intro card**: Texto en primera persona, párrafos claros
- **Tech Stack**: Grid de badges con hover glow individual — icono + nombre
- **GitHub Calendar**: Tema personalizado alineado con paleta
- **Tools**: Sección compacta similar

---

### Projects (`/project`)

- Header: `>_ my_projects.exe` con prompt cyan animado
- **Cards estilo "panel de código"**:
  - Barra superior con 3 dots (rojo/amarillo/verde) + nombre del archivo
  - Badge de lenguaje principal
  - Descripción limpia
  - Links: `[gh]` y `[demo]` si aplica
  - Patron geométrico CSS único por tarjeta (no imágenes placeholder)

**Proyectos reales a incluir:**
1. Web Crawler — JS/Puppeteer
2. Multichattt — React/TypeScript + Twitch API
3. Transcripthorrr — Python/Flask + AI
4. Budget — Ruby
5. Car Rental Backend — Ruby
6. Bwidgets — React/TypeScript + Twitch

---

### Resume (`/resume`)

Sin cambios estructurales — solo ajuste de estilos del contenedor para alinearse con la nueva paleta.

---

## 4. Cambios de Componentes

| Componente | Acción | Descripción |
|---|---|---|
| `style.css` | Rewrite total | Nueva paleta, tipografías, variables CSS |
| `App.css` | Ajuste | Remover estilos genéricos |
| `Navbar.js` | Refactor + restyle | Logo `>_`, links con estilo terminal, animación scroll |
| `Home.js` | Rewrite layout | Nueva estructura hero 2-columnas con code block |
| `Home2.js` | Refactor | Layout asimétrico, social links modernos |
| `Type.js` | Mantener | Solo actualizar strings si necesario |
| `About.js` | Refactor | Nueva estructura sin imagen laptop genérica |
| `AboutCard.js` | Rewrite contenido | Texto más personal y específico |
| `Techstack.js` | Restyle | Badges con glow, grid custom |
| `Toolstack.js` | Restyle | Igual que Techstack |
| `Github.js` | Restyle | Tema oscuro custom |
| `Projects.js` | Rewrite layout | Cards nuevas estilo código |
| `ProjectCards.js` | Rewrite UI | Panel de código, 3 dots, badge de lenguaje |
| `Particle.js` | Eliminar o simplificar | Reemplazar por dot-grid CSS en Home |
| `Pre.js` | Restyle | Preloader con estilo terminal |
| `Footer.js` | Restyle | Minimalista, cyan accent |
| `ResumeNew.js` | Ajuste menor | Solo paleta |

---

## 5. Dependencias a Agregar

- `@fontsource/jetbrains-mono` — tipografía display
- `@fontsource/dm-sans` — tipografía body
- `@fontsource/space-mono` — tipografía labels

No se agregan librerías de animación extra — todo via CSS custom + lo que ya existe (typewriter-effect).

---

## 6. Criterios de Éxito

- El portafolio carga en < 3s
- Visualmente distinguible de templates genéricos en < 5 segundos
- Todos los links y rutas existentes funcionan
- Responsive (mobile-first Bootstrap Grid se mantiene como base)
- Los proyectos reales están listados correctamente con sus repos
