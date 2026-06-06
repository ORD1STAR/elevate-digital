# Elevate Digital - Project Documentation

## Project Overview
Elevate Digital is a premium social media boosting platform tailored for Algerian e-commercants. It features a modern "bubbly" and "glassy" UI/UX, built with a focus on speed, attractiveness, and ease of use.

## Core Mandates
- **Theme**: Bubbly, rounded shapes with Glassmorphism effects.
- **Soap Bubble Effect**: Components use inset highlights (`top`) and shadows (`bottom`) to create a 3D depth, resembling soap bubbles.
- **Languages**: Arabic (AR), French (FR), English (EN) with RTL support.
- **Data**: Services and Feedbacks are fetched from MongoDB with full multi-language support (localized strings for names/descriptions).
- **Tech Stack**: Next.js 16 (App Router), Tailwind CSS 4, Framer Motion, Node.js (Express), MongoDB.

## UI/UX Principles
- **Theme System**:
  - **White Mode**: Standard light theme with solid backgrounds and high contrast blue text.
  - **Dark Mode**: Standard dark theme with deep navy solid backgrounds and white text.
  - **Glass Mode**: The signature "Soap Bubble" theme. Uses dark background with 3D glassmorphism and inset highlights.
- **Color Palette (White Mode)**:
  - Background: `#85a3e1` (Soft Blue) -> Transitions to opaque white (`bg-white/90`) on scroll for Navbar.
  - Text: `#063188` (Deep Blue)
- **Color Palette (Dark & Glass Mode)**:
  - Background: `#1b3069` (Dark Navy)
  - Text: `#FFFFFF` (White)
- **Glassmorphism (Glass Mode Only)**:
  - Signature `glassy` utility uses `30%` background opacity with `12px` blur and soap bubble inset highlights.
- **Interactions**:
  - **Navbar**: Scales up on hover; switches background/text based on the active theme.
  - **Theme Select**: Premium dropdown to switch between White, Dark, and Glass modes.

## Custom Tailwind Utilities (Tailwind 4 @utility)
- `.glassy`: Frosted glass with soap bubble inset highlights (`inset 0 4px 12px rgba(255,255,255,0.6)`).
- `.input-bubbly`: High-contrast rounded inputs with solid placeholders and scaling focus states.
- `.mesh-gradient`: Dynamic multi-layered radial gradient background.

## Key Components
- `Navbar.tsx`: Sticky, responsive bar with custom `LanguageSelector` and Theme toggle.
- `BubblySelect.tsx`: Reusable custom dropdown replacement for native select elements.
- `Hero.tsx`: Mesh gradient intro with glowing logo and interactive buttons.
- `AuthPage.tsx`: Specialized container with sliding form transitions.

## Commit Convention
- Use descriptive messages (e.g., `feat:`, `fix:`, `style:`) and commit after each significant piece of work.
