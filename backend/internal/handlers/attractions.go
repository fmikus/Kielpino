package handlers

import (
	"net/http"

	"kielpino-backend/internal/models"
	"kielpino-backend/internal/repository"

	"github.com/gin-gonic/gin"
)

type AttractionsHandler struct {
	repo *repository.AttractionsRepository
}

func NewAttractionsHandler(repo *repository.AttractionsRepository) *AttractionsHandler {
	return &AttractionsHandler{repo: repo}
}

func (h *AttractionsHandler) GetAttractions(c *gin.Context) {
	category := c.Query("category")

	attractions, err := h.repo.GetAll(category)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := models.AttractionsResponse{
		Attractions: attractions,
		Total:       len(attractions),
	}

	c.JSON(http.StatusOK, response)
}

func (h *AttractionsHandler) GetAttractionBySlug(c *gin.Context) {
	slug := c.Param("slug")

	attraction, err := h.repo.GetBySlug(slug)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Attraction not found"})
		return
	}

	c.JSON(http.StatusOK, attraction)
}
