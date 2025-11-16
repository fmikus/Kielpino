# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy backend source code
COPY backend/ .

# Download dependencies
RUN go mod download

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o api ./cmd/api/main.go

# Run stage
FROM alpine:latest

WORKDIR /app

# Copy binary from builder
COPY --from=builder /app/api .

# Copy content directory from project root
COPY content/ /app/content/

EXPOSE 8080

CMD ["./api"]
