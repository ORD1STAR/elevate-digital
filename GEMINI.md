# Elevate Digital - Project Documentation

## Project Overview
Elevate Digital is a premium social media boosting platform tailored for Algerian e-commercants. It features a modern "bubbly" and "glassy" UI/UX, built with a focus on speed, attractiveness, and ease of use.

## Core Mandates
- **Theme**: Bubbly, rounded shapes with Glassmorphism effects.
- **Soap Bubble Effect**: Components use inset highlights (`top`) and shadows (`bottom`) to create a 3D depth, resembling soap bubbles.
- **Languages**: Arabic (AR), French (FR), English (EN) with RTL support.
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS 4, Framer Motion, Node.js (Express), MongoDB.

## UI/UX Principles
- **Color Palette (White Mode)**:
  - Background: `#85a3e1` (Soft Blue) -> Transitions to white/90 on scroll for Navbar.
  - Text: `#063188` (Deep Blue)
  - Text Secondary: `#2915c0` (Vibrant Purple/Blue)
- **Color Palette (Dark Mode)**:
  - Background: `#1b3069` (Dark Navy)
  - Text: `#FFFFFF` (White)
  - Text Secondary: `#f5ae54` (Warm Orange)
- **Interactions**:
  - **Navbar**: Scales up on hover; changes transparency/color on scroll.
  - **Inputs**: Bubbly shapes that scale and glow on focus.
  - **Custom Dropdowns**: Bubbly, animated selectors for language and forms.
  - **Auth**: Sliding "pull" animation between Login and Register forms.

## Custom Tailwind Utilities (Tailwind 4 @utility)
- `.glassy`: Glassmorphism with soap bubble inset effects.
- `.bubbly`: Standard rounded corners (1.5rem).
- `.bubbly-lg`: Larger rounded corners (2.5rem).
- `.input-bubbly`: Rounded inputs with interactive focus scaling and highlights.
- `.mesh-gradient`: Multi-layered radial gradient background.

## Key Components
- `Navbar.tsx`: Sticky, responsive bar with custom `LanguageSelector` and Theme toggle.
- `BubblySelect.tsx`: Reusable custom dropdown replacement for native select elements.
- `Hero.tsx`: Mesh gradient intro with glowing logo and interactive buttons.
- `AuthPage.tsx`: Specialized container with sliding form transitions.

## Commit Convention
- Use descriptive messages (e.g., `feat:`, `fix:`, `style:`) and commit after each significant piece of work.
