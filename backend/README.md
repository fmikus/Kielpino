# Kielpino Backend

Golang backend for Kielpino website using Gin framework and Markdown-based content.

## Setup

```bash
# Install dependencies
go mod download

# Run the server
go run cmd/api/main.go
```

Server runs on `http://localhost:8080`

## API Endpoints

- `GET /api/news` - Get all news (with pagination)
- `GET /api/news/:slug` - Get news by slug
- `GET /api/attractions` - Get all attractions
- `GET /api/attractions/:slug` - Get attraction by slug

## Environment Variables

- `PORT` - Server port (default: 8080)
- `CONTENT_PATH` - Path to content directory (default: ../../content)
