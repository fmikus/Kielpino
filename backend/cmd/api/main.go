package main

import (
	"log"
	"os"

	"kielpino-backend/internal/handlers"
	"kielpino-backend/internal/repository"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize repository
	contentPath := os.Getenv("CONTENT_PATH")
	if contentPath == "" {
		contentPath = "../../content"
	}

	newsRepo := repository.NewNewsRepository(contentPath + "/news")
	attractionsRepo := repository.NewAttractionsRepository(contentPath + "/attractions")

	// Initialize handlers
	newsHandler := handlers.NewNewsHandler(newsRepo)
	attractionsHandler := handlers.NewAttractionsHandler(attractionsRepo)

	// Setup Gin router
	r := gin.Default()

	// CORS configuration
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000", "https://*.vercel.app"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept"}
	r.Use(cors.New(config))

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	// API routes
	api := r.Group("/api")
	{
		// News routes
		api.GET("/news", newsHandler.GetNews)
		api.GET("/news/:slug", newsHandler.GetNewsBySlug)

		// Attractions routes
		api.GET("/attractions", attractionsHandler.GetAttractions)
		api.GET("/attractions/:slug", attractionsHandler.GetAttractionBySlug)
	}

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
