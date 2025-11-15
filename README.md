# Kielpino - Oficjalna Strona Informacyjna

Nowoczesna strona internetowa dla największej wioski w powiecie kartuskim.

## 🏗️ Technologie

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Golang (Gin framework)
- **Content**: Markdown-based CMS
- **Deployment**: Vercel (frontend) + Railway (backend)

## 📁 Struktura Projektu

```
/frontend       # Next.js application
/backend        # Golang API
/content        # Markdown content files
  /news         # News articles
  /attractions  # Local attractions
  /history      # Historical content
```

## 🚀 Lokalne Uruchomienie

### Backend

```bash
cd backend
go mod download
go run cmd/api/main.go
# Server: http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# App: http://localhost:3000
```

## 📝 Dodawanie Treści

Treści dodaje się poprzez pliki Markdown w katalogu `/content`.

### Przykład - News

Stwórz plik `/content/news/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Tytuł newsa"
slug: "slug-url"
excerpt: "Krótki opis"
coverImage: "/images/news/obraz.jpg"
publishedAt: "2024-11-15"
category: "Kategoria"
author: "Autor"
---

# Treść artykułu

Twoja treść w Markdown...
```

### Przykład - Atrakcja

Stwórz plik `/content/attractions/nazwa-atrakcji.md`:

```markdown
---
title: "Nazwa atrakcji"
slug: "slug-url"
category: "Natura/Kultura/Sport"
location: "Adres"
featured: true
images:
  - "/images/attractions/obraz1.jpg"
---

# Opis atrakcji

Twoja treść...
```

## 🌍 Deployment

### Frontend (Vercel)

1. Push kod do GitHub
2. Połącz repo z Vercel
3. Dodaj zmienną środowiskową: `NEXT_PUBLIC_BACKEND_URL`
4. Deploy automatyczny!

### Backend (Railway)

1. Push kod do GitHub
2. Utwórz projekt w Railway
3. Połącz repo
4. Railway automatycznie wykryje Dockerfile
5. Dodaj zmienną: `CONTENT_PATH=/app/content`

## 📊 API Endpoints

- `GET /api/news` - Lista newsów (pagination)
- `GET /api/news/:slug` - Pojedynczy news
- `GET /api/attractions` - Lista atrakcji
- `GET /api/attractions/:slug` - Pojedyncza atrakcja

## 🎨 Sekcje Strony

- **Aktualności** - Feed newsów z infinite scroll
- **Atrakcje** - Katalog lokalnych atrakcji
- **Sprawy Mieszkańców** - Informacje dla mieszkańców
- **Historia** - Timeline i artykuły historyczne

## 📄 Licencja

© 2024 Kiełpino. Wszelkie prawa zastrzeżone.
