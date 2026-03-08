# Home One-Page Expansion — Design Doc

## Overview

Expand the Home page (`/`) into a complete, scroll-driven narrative that showcases Isaí Céspedes's full professional profile to HR and hiring managers without requiring them to navigate to other pages.

The existing pages (`/about`, `/project`, `/resume`) are preserved and enriched with minor polish — they remain as deep-dive destinations linked from the Home sections.

## Aesthetic System (existing — do not break)

- **Background:** `--void` (#000005), `--void-2` (#05050f), `--void-3` (#0a0a1a)
- **Accent Gold:** `--gold` (#D4AF37) — primary accent, glows, borders
- **Accent Cyan:** `--cyan` (#00FFF0) — eyebrows, highlights, secondary
- **Accent Magenta:** `--magenta` (#FF006E) — danger/emphasis only
- **Fonts:** `Bebas Neue` (display), `JetBrains Mono` (mono), `DM Sans` (body)
- **Cursor:** custom crosshair, `.cursor-none` on everything
- **Reveal system:** `.reveal` / `.reveal.visible` via IntersectionObserver already in CSS

## New Sections (all added to Home, in scroll order)

### § 1 — Hero (existing, untouched)
### § 2 — About Intro (existing Home2,+ scroll reveal)
### § 3 — Stats Counter (NEW)
### § 4 — What I Build (NEW)
### § 5 — Experience Timeline (NEW)
### § 6 — Featured Projects (NEW)
### § 7 — Testimonials (NEW)
### § 8 — Contact CTA (NEW)

## Component Architecture

```
src/components/Home/
  Home.js              ← modified: imports & renders all sections in order
  Home2.js             ← modified: add reveal class
  Stats.js             ← new
  WhatIBuild.js        ← new
  ExperienceTimeline.js ← new
  FeaturedProjects.js  ← new
  Testimonials.js      ← new
  ContactCTA.js        ← new
src/style.css          ← appended: styles for all new sections
```

## Section Specs

### Stats Counter
- 4 animating counters: `3+` yrs experience, `4000+` TS errors fixed, `6+` OSS projects, `100%` remote
- Uses IntersectionObserver to trigger count-up animation on first viewport entry
- Bebas Neue huge numbers (~6rem) with gold glow, mono labels below
- Background: `--void-3` with subtle grid overlay

### What I Build
- 3 specialty cards: Frontend Architecture, Backend & APIs, Developer Experience
- Each card: large icon (react-icons), title (Bebas Neue), description, tech tags
- Hover: scanline sweep (reuses existing `scanline-sweep` keyframe), gold border glow
- Background: `--void`

### Experience Timeline
- Vertical line drawn down the center-left, animated via `stroke-dashoffset` CSS trick
- Items: Stack Builders (2022–present), prior role placeholder
- Each entry fades in with `reveal` class, staggered delays
- Gold dot on the line, company in Bebas Neue, role + bullets in body font
- Background: `--void-2`

### Featured Projects
- 3 project cards (top 3 from existing projects array, reuse same data)
- Uses the existing `ProjectCard` component — no code duplication
- "See All Projects →" `btn-void-outline` linking to `/project`
- Background: `--void`

### Testimonials
- Auto-rotating carousel (3 placeholders), 5s interval, CSS fade transition
- Quote in JetBrains Mono, left cyan border, name/role in gold
- Dot navigation below
- Background: `--void-3`

### Contact CTA
- Full-width dark section
- Big headline: "LET'S WORK" / "TOGETHER" in Bebas Neue ~8rem, gold  
- 3 buttons: LinkedIn, GitHub, Email (all open external)
- Animated scanline sweep across background on mount
- Background: `--void` with radial gold glow at center

## Animations Used

| Section | Animation |
|---|---|
| All sections | `reveal` fade-up via IntersectionObserver |
| Stats | JS count-up on observer entry |
| WhatIBuild | `scanline-sweep` on card hover |
| Timeline | CSS `stroke-dashoffset` line draw (pseudo-element height) |
| Testimonials | CSS `opacity` fade + JS setInterval |
| ContactCTA | `scanline-sweep` on mount, `pulse-glow` on buttons |

## What Is NOT Changed

- Hero section (Home.js lines 119–239)
- All `/about` page content (AboutCard, Techstack, Toolstack, Github calendar)
- All `/project` page content
- `/resume` page
- Navbar routes
- CSS variables, keyframes, cursor, preloader
