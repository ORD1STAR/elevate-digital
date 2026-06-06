# Elevate Digital - Project Documentation

## Project Overview
Elevate Digital is a premium social media boosting platform tailored for Algerian e-commercants. It features a modern "bubbly" and "glassy" UI/UX, built with a focus on speed, attractiveness, and ease of use.

## Core Mandates
- **Theme**: Bubbly, rounded shapes with Glassmorphism effects.
- **Languages**: Arabic (AR), French (FR), English (EN) with RTL support.
- **Tech Stack**: Next.js 15 (App Router), Tailwind CSS 4, Framer Motion, Node.js (Express), MongoDB.

## UI/UX Principles
- **Color Palette (White Mode)**:
  - Background: `#85a3e1` (Soft Blue)
  - Text: `#063188` (Deep Blue)
  - Text Secondary: `#2915c0` (Vibrant Purple/Blue)
- **Color Palette (Dark Mode)**:
  - Background: `#1b3069` (Dark Navy)
  - Text: `#FFFFFF` (White)
  - Text Secondary: `#f5ae54` (Warm Orange)
- **Components**:
  - Detached, bubbly navigation bar.
  - Mesh gradient backgrounds.
  - Glassy, highly-rounded cards ("bubbly" utilities).

## Architecture
- `frontend/`: Next.js application.
  - `src/components/layout/`: Landing page sections (Hero, Services, Feedbacks, etc.).
  - `src/components/dashboard/`: Customer dashboard components.
  - `src/app/auth/`: Animated login/register system.
- `backend/`: Express API.
  - `models/`: Mongoose schemas for Users and Services.
  - `seed.js`: Database initialization script.

## Custom Tailwind Utilities
- `.glassy`: Glassmorphism effect (blur + semi-transparent bg).
- `.bubbly`: Standard rounded corners (1.5rem).
- `.bubbly-lg`: Larger rounded corners (2.5rem).
- `.mesh-gradient`: Custom radial gradient background.

## Commit Convention
- Use descriptive messages (e.g., `feat:`, `fix:`, `style:`) and commit after each significant piece of work.
