<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:6d28d9,100:0ea5e9&height=200&section=header&text=Elevate%20Digital&fontSize=48&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=Trilingual%20social%20boosting%20storefront%20with%20a%20glass%20theme&descAlignY=58" alt="Elevate Digital banner" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&center=true&vCenter=true&width=700&lines=Arabic%2C+French+and+English+with+real+RTL;Three+themes%3A+White%2C+Dark+and+Glass+%22soap+bubble%22;Next.js+16+front+end%2C+Express+5+%2B+MongoDB+API;Localized+content+served+from+MongoDB" alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/status-front--end%20first%20MVP-orange?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <img src="docs/screenshots/hero.jpg" alt="Elevate Digital landing page in the Glass theme" width="860" />
</p>

> Screenshots and GIFs are captured from the real app running locally (Next.js dev server + Express API + a MongoDB instance seeded with `backend/seed.js`).

## Table of contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo and screenshots](#-demo-and-screenshots)
- [Architecture](#-architecture)
- [Tech stack](#-tech-stack)
- [Requirements](#-requirements)
- [Installation and configuration](#-installation-and-configuration)
- [Usage](#-usage)
- [Project structure](#-project-structure)
- [Testing](#-testing)
- [Troubleshooting and FAQ](#-troubleshooting-and-faq)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 🧭 Overview

**Problem.** Storefronts for social media boosting aimed at Algerian e-commerce sellers are rarely localized well: Arabic right-to-left support tends to be an afterthought.

**Solution.** Elevate Digital is a storefront with English, French and Arabic routes (real RTL, server-rendered), three switchable themes, and services and customer feedback loaded from a MongoDB-backed Express API. The signature Glass theme uses translucent, blurred surfaces with inset highlight/shadow pairs so cards read like soap bubbles.

## ✨ Features

- **Three languages, real RTL.** English, French and Arabic via `next-intl` with locale-prefixed routes (`/en`, `/fr`, `/ar`). Arabic flips the document to `dir="rtl"`, mirrors layout and icons, and works server-side (no flash).
- **Three themes.** White, Dark and Glass, switched from a custom dropdown and persisted in `localStorage`. Glass is the signature mode: translucent cards, backdrop blur and inset highlight/shadow pairs that make surfaces read like soap bubbles. Implemented as custom Tailwind 4 `@utility` classes (`.glassy`, `.input-bubbly`, `.mesh-gradient`).
- **Localized data from MongoDB.** Services and customer feedback are stored with per-language `name` / `description` fields and the UI picks the active locale.
- **Auth.** Register and login (email or username) against the Express API, passwords hashed with bcrypt, JWT issued on success, with an animated sliding Login / Register card.
- **Customer dashboard.** Glass sidebar layout with a greeting, balance / orders / active-boosts stat bubbles, recent orders and a quick-boost call to action.
- **Polished UI details.** Scroll-reveal sections and scroll-aware navbar (Framer Motion), custom `BubblySelect` dropdown replacing native selects, interactive focus scaling on inputs, responsive layout.

## 🎬 Demo and screenshots

### Themes

![Switching between White, Dark and Glass themes](docs/screenshots/themes.gif)

| White | Dark | Glass |
| --- | --- | --- |
| ![White theme](docs/screenshots/theme-light.jpg) | ![Dark theme](docs/screenshots/theme-dark.jpg) | ![Glass theme](docs/screenshots/theme-glass.jpg) |

### Languages and RTL

![Switching between English, French and Arabic](docs/screenshots/languages.gif)

| English | Français | العربية (RTL) |
| --- | --- | --- |
| ![English](docs/screenshots/lang-en.jpg) | ![French](docs/screenshots/lang-fr.jpg) | ![Arabic](docs/screenshots/lang-ar.jpg) |

### Landing page, auth and dashboard

| Full landing page (Glass) | Full landing page (White) |
| --- | --- |
| ![Full landing page, glass theme](docs/screenshots/landing-full-glass.jpg) | ![Full landing page, white theme](docs/screenshots/landing-full-light.jpg) |

| Auth (Glass) | Auth (White) |
| --- | --- |
| ![Login card, glass theme](docs/screenshots/auth-glass.jpg) | ![Login card, white theme](docs/screenshots/auth-light.jpg) |

![Customer dashboard in the Glass theme](docs/screenshots/dashboard-glass.jpg)

## 🏗 Architecture

```mermaid
flowchart LR
    subgraph Browser
        MW["next-intl middleware<br/>/en /fr /ar"]
        PAGES["App Router pages<br/>landing, auth, dashboard"]
        CTX["ThemeContext + AuthContext<br/>(localStorage)"]
        MSG[["messages/en|fr|ar.json"]]
        MW --> PAGES
        MSG --> PAGES
        CTX --> PAGES
    end

    subgraph Express["backend (Express 5)"]
        R1["GET /api/services"]
        R2["GET /api/feedbacks"]
        R3["POST /api/auth/login"]
        R4["POST /api/auth/register"]
        JWT[jsonwebtoken + bcryptjs]
        R3 --> JWT
        R4 --> JWT
    end

    DB[("MongoDB<br/>Service, Feedback, User")]

    PAGES -- "fetch (NEXT_PUBLIC_API_URL)" --> R1 & R2 & R3 & R4
    R1 & R2 & R3 & R4 --> DB
```

Localized content flows two ways: static UI strings live in `frontend/messages/*.json`, while services and feedbacks carry `{ en, fr, ar }` objects in MongoDB and are resolved client-side against the current locale.

## 🧰 Tech stack

| Layer | Tools |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, lucide-react, next-intl |
| Backend | Node.js, Express 5, Mongoose 9 (MongoDB), jsonwebtoken, bcryptjs, cors, dotenv |
| Fonts / design | Plus Jakarta Sans, custom Tailwind 4 utilities for the glass / soap-bubble look |

## 📋 Requirements

| Item | Requirement |
| --- | --- |
| OS | Windows, macOS or Linux |
| Node.js | 20.9 or newer (required by Next.js 16), with npm |
| Database | MongoDB: a local instance (`mongodb://127.0.0.1:27017`) or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster |
| Ports | `5000` (API, override with `PORT`), `3000` (web) |
| Hardware | No GPU or special hardware |
| Accounts / API keys | None, apart from a MongoDB Atlas account if you do not run MongoDB locally. You choose your own `JWT_SECRET` |

## ⚙ Installation and configuration

```bash
git clone https://github.com/ORD1STAR/elevate-digital.git
cd elevate-digital

# 1. API
cd backend
npm install
cp .env.example .env          # set MONGODB_URI and a long random JWT_SECRET
node seed.js                  # seeds services, feedbacks and a demo user
npm start                     # http://localhost:5000  (npm run dev for nodemon)

# 2. Web (new terminal, from the repo root)
cd frontend
npm install
cp .env.example .env.local    # NEXT_PUBLIC_API_URL=http://localhost:5000/api
npm run dev                   # http://localhost:3000  (redirects to /en)
```

### Environment variables

| File | Name | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `backend/.env` | `MONGODB_URI` | yes | MongoDB connection string (local or Atlas) | `mongodb://127.0.0.1:27017/elevate-digital` |
| `backend/.env` | `JWT_SECRET` | yes | Secret used to sign login tokens (1 day expiry). Use a long random string | `YOUR_LONG_RANDOM_SECRET` |
| `backend/.env` | `PORT` | no | API port (default `5000`) | `5000` |
| `frontend/.env.local` | `NEXT_PUBLIC_API_URL` | no | API base URL (falls back to `http://localhost:5000/api`) | `http://localhost:5000/api` |

> Warning: `node seed.js` deletes all existing services, feedbacks and users before inserting the demo data. Do not run it against a database you care about.

## 🚀 Usage

1. Open `http://localhost:3000` (redirects to `/en`), or go to `/fr` or `/ar` for the other locales.
2. Log in on the auth page with the seeded demo customer (`ahmed` / `password123`, local development only) to see the dashboard, or register a new account.
3. Use the theme dropdown to switch between White, Dark and Glass.

API surface:

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/services` | Active services (localized names and descriptions) |
| GET | `/api/feedbacks` | Active customer feedback |
| POST | `/api/auth/register` | Create a customer account, returns JWT |
| POST | `/api/auth/login` | Login with email or username, returns JWT |

## 🗂 Project structure

<details>
<summary><b>Show tree</b></summary>

```
backend/
  index.js            Express app and routes
  models/             Service, Feedback, User (bcrypt hook) Mongoose models
  seed.js             Localized demo data
frontend/
  messages/           en.json, fr.json, ar.json
  src/
    middleware.ts     next-intl locale routing
    app/[locale]/     landing page, /auth, /dashboard
    components/       layout (Navbar, Hero, Services, Feedbacks, ContactUs...), dashboard, ui (BubblySelect)
    context/          ThemeContext, AuthContext
GEMINI.md             Design notes and UI principles used while building
```

</details>

## 🧪 Testing

There is no automated test suite yet (`backend` only has the default placeholder `test` script). Static checks available for the front end:

```bash
cd frontend
npm run lint
npm run build
```

## 🩺 Troubleshooting and FAQ

<details>
<summary><b>The page loads but services and feedback are empty</b></summary>

Make sure the API is running, `node seed.js` has been run, and `NEXT_PUBLIC_API_URL` in `frontend/.env.local` points to the API (restart `npm run dev` after changing it).

</details>

<details>
<summary><b>MongoDB connection error on API start</b></summary>

Check that `MONGODB_URI` in `backend/.env` is set and that MongoDB is reachable. For Atlas, allow your IP address in the cluster's network access list.

</details>

<details>
<summary><b>I cannot log in</b></summary>

Run `node seed.js` to create the demo user, or register a new account. Note that the seed script resets the users collection.

</details>

<details>
<summary><b>The API log says "Connected to MongoDB Atlas" while I use a local database</b></summary>

That is a static log message in `backend/index.js`; it prints for any successful connection.

</details>

## 🗺 Roadmap

- [x] Landing page with services and feedback from the API
- [x] i18n with real RTL (EN / FR / AR)
- [x] Three themes (White, Dark, Glass)
- [x] Register / login with JWT, dashboard overview
- [ ] Remaining dashboard pages (Buy Services, My Orders, Add Funds, Settings)
- [ ] Order placement and payments
- [ ] Admin role UI and API-side authorization middleware for protected routes
- [ ] Wire the contact form to a backend
- [ ] Tighten the glass navbar around 1440 px in English
- [ ] Automated tests

The repo keeps its real commit history (21 commits). Environment files that were committed during early development were scrubbed from the history before publishing; use your own `.env` values.

## 🤝 Contributing

Issues and pull requests are welcome. Please run `npm run lint` in `frontend/` before opening a PR.

## 📄 License

Released under the [MIT License](LICENSE).

## 👤 Author

<table>
  <tr>
    <td><b>Hannoun Amine Amar</b><br/>AI Engineer / Fullstack Developer, Algeria</td>
    <td>
      <a href="https://www.linkedin.com/in/hannoun-amine/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      <a href="mailto:hannoun.amine25@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
      <a href="https://github.com/ORD1STAR"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    </td>
  </tr>
</table>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:6d28d9,100:0ea5e9&height=120&section=footer" alt="footer" />
</p>
