# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern informational website for Kiełpino - the largest village in Kartuski county, Poland. The site features a news feed with infinite scroll (Facebook-style), attractions listing, resident services, and historical information.

Official reference site: https://kielpino.eu/

## Development Commands

### Frontend Setup (Next.js)
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Backend Setup (Golang)
```bash
cd backend
go mod download
go run cmd/api/main.go
# Runs on http://localhost:8080
```

### Build Commands
```bash
# Frontend
cd frontend
npm run build
npm start

# Backend
cd backend
go build -o api cmd/api/main.go
./api
```

### Linting & Type Checking
```bash
# Frontend
cd frontend
npm run lint
npm run type-check
```

## Architecture

### High-Level Structure
Next.js 15+ App Router frontend with Golang (Gin framework) backend API. Content managed via Markdown files (simple, git-based CMS). Modern, responsive design with server-side rendering for SEO optimization.

### Key Sections
- **Strona Główna (Aktualności)** - News feed with infinite scroll
- **Atrakcje** - Regional attractions with filtering and map integration
- **Sprawy Mieszkańców** - Resident services, announcements, documents
- **Historia** - Historical timeline and archival content

### Technology Stack
- **Frontend**: Next.js 15, TypeScript, React, Tailwind CSS
- **Backend**: Golang 1.21+, Gin framework
- **CMS**: Markdown files with YAML frontmatter (git-based)
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel (frontend) + Railway (backend)
- **Database**: None initially (Markdown-based content), PostgreSQL available on Railway if needed

### Data Flow
1. Content editors add/edit Markdown files in `/content` directory
2. Golang backend reads and parses Markdown files on-demand
3. Next.js frontend fetches data from Golang API endpoints
4. Infinite scroll loads additional news items via API pagination
5. Images are optimized automatically by Next.js
6. Changes to content require git commit + push to update live site

## Important Patterns and Conventions

### Code Organization
```
/frontend               # Next.js application
  /app                 # Next.js App Router pages
    /page.tsx         # Home (Aktualności)
    /atrakcje/page.tsx
    /sprawy-mieszkancow/page.tsx
    /historia/page.tsx
  /components          # Reusable React components
    /NewsCard.tsx
    /NewsFeed.tsx
    /Navigation.tsx
    /Footer.tsx
  /types              # TypeScript type definitions
    /news.ts
    /attraction.ts
  /lib                # Utilities
  /public             # Static assets

/backend              # Golang API
  /cmd
    /api/main.go     # Application entry point
  /internal
    /handlers        # HTTP request handlers
    /models          # Data models
    /repository      # Data access layer
  /pkg
    /markdown        # Markdown parsing utilities
  go.mod

/content              # Markdown-based CMS
  /news              # News articles (.md files)
  /attractions       # Attractions (.md files)
  /history           # Historical content
```

### Naming Conventions
- Components: PascalCase (e.g., `NewsCard.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types/Interfaces: PascalCase (e.g., `NewsItem`, `Attraction`)
- Route segments: kebab-case (e.g., `sprawy-mieszkancow`)

### State Management
- Server components by default for data fetching
- Client components (`'use client'`) only when needed for interactivity
- React hooks for local state
- Context API for shared state (if needed)

## Markdown Content Structure

Content is stored in `/content` directory as Markdown files with YAML frontmatter.

### News Article Format
```markdown
---
title: "Article Title"
slug: "article-slug"
excerpt: "Short description"
coverImage: "/images/news/image.jpg"
publishedAt: "2024-11-15"
category: "Category"
author: "Author Name"
---

# Article content in Markdown

Your content here...
```

### Attraction Format
```markdown
---
title: "Attraction Name"
slug: "attraction-slug"
category: "Natura/Kultura/Sport"
location: "Address"
featured: true
images:
  - "/images/attractions/img1.jpg"
  - "/images/attractions/img2.jpg"
---

# Description

Content here...
```

### Adding New Content
1. Create new `.md` file in appropriate `/content` subdirectory
2. Add frontmatter with required fields
3. Write content in Markdown
4. Commit and push to GitHub
5. Backend automatically serves new content

## Backend API Endpoints

Golang backend serves at `http://localhost:8080` (dev) or Railway URL (prod).

### News
- `GET /api/news?page=1&limit=10` - Get paginated news list
- `GET /api/news/:slug` - Get single news article by slug

### Attractions
- `GET /api/attractions?category=natura` - Get all attractions (optional category filter)
- `GET /api/attractions/:slug` - Get single attraction by slug

### Health
- `GET /health` - Health check endpoint

## Configuration

### Frontend Environment Variables (.env.local)
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
```

### Backend Environment Variables
```
PORT=8080
CONTENT_PATH=../content
```

## Deployment

### Frontend - Vercel (Free)
1. Connect GitHub repo to Vercel
2. Set Root Directory: `frontend`
3. Add env var: `NEXT_PUBLIC_BACKEND_URL` (Railway backend URL)
4. Auto-deploy on push to main

### Backend - Railway (Free $5/month credit)
1. Connect GitHub repo to Railway
2. Railway auto-detects Dockerfile in `/backend`
3. Add env vars: `PORT=8080`, `CONTENT_PATH=/app/content`
4. Auto-deploy on push to main

### Cost
- **Free tier**: $0/month (Vercel free, Railway $5 credit)
- **Only cost**: Domain name (~50-100 PLN/year, optional)

See `DEPLOYMENT.md` for detailed step-by-step guide.

## Design Principles

- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA compliance)
- Performance (Lighthouse score >90)
- SEO optimized (meta tags, Open Graph, sitemap)
- Modern aesthetic while respecting local character
