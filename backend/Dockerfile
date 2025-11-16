# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /build

# Copy backend directory
COPY backend ./backend

WORKDIR /build/backend

# Download dependencies
RUN go mod download

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /build/api ./cmd/api/main.go

# Run stage
FROM alpine:latest

WORKDIR /app

# Copy binary from builder
COPY --from=builder /build/api .

# Copy content directory from project root
COPY content/ /app/content/

EXPOSE 8080

CMD ["./api"]
