# 🎯 CoachingCompare.in

> **Independent Coaching Institute Benchmarks & 100-Point Audits**  
> Compare Top Coaching Institutes with forensic, multi-metric precision across India.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router) with React 19 & TypeScript
- **Styling**: Tailored Modern Vanilla CSS Design System with Deep Cosmic Indigo & Mint Emerald theme
- **Assets**: 100% Lightweight Bespoke SVGs (Zero bloated raster images)
- **Rendering**: Pre-rendered Static Site Generation (SSG) across 110+ city and exam hubs
- **Deployment**: Multi-stage Docker container (`node:20-alpine` standalone ~120MB) + Nginx reverse proxy

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🐳 Docker Deployment

Run with Docker Compose:
```bash
docker compose up -d --build
```
Access at [http://localhost:3000](http://localhost:3000).

---

## 🌐 VPS Hosting & Production Setup

For detailed instructions on hosting on an Ubuntu/Debian VPS with **Nginx**, **Let's Encrypt SSL**, and **Docker**, see:

👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)**

---

## 📁 Project Structure

```
├── public/                 # Static SVG icons and favicon
├── src/
│   ├── app/                # Next.js 16 App Router pages
│   │   ├── best-[category]-in-[city]/   # Dynamic exam & city comparison hubs
│   │   ├── compare/                     # Side-by-side comparison matrix
│   │   ├── previous-year-papers/        # PYQ resources & instant downloads
│   │   ├── study-materials/             # Curated study notes & syllabus
│   │   ├── fees-calculator/             # Cost of living & coaching calculator
│   │   └── ...                          # Review submit, rankings, about
│   ├── components/         # Modular UI components (Navbar, Cards, Modals)
│   ├── data/               # Institute rankings, benchmarks, and city hubs
│   └── styles/             # Global CSS design tokens & animations
├── nginx/                  # Production Nginx reverse proxy configuration
├── Dockerfile              # Multi-stage Docker containerization
├── docker-compose.yml      # Container orchestration
├── deploy.sh               # 1-click VPS update script
└── DEPLOYMENT.md           # Full VPS deployment guide
```

---

## 📄 License & Ownership
Copyright © 2026 CoachingCompare.in. All rights reserved.
