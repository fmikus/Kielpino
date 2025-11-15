package handlers

import (
	"net/http"
	"strconv"

	"kielpino-backend/internal/models"
	"kielpino-backend/internal/repository"

	"github.com/gin-gonic/gin"
)

type NewsHandler struct {
	repo *repository.NewsRepository
}

func NewNewsHandler(repo *repository.NewsRepository) *NewsHandler {
	return &NewsHandler{repo: repo}
}

func (h *NewsHandler) GetNews(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))

	if page < 1 {
		page = 1
	}
	if limit < 1 || limit > 50 {
		limit = 10
	}

	news, total, err := h.repo.GetAll(page, limit)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	hasMore := (page * limit) < total

	response := models.NewsResponse{
		News:    news,
		Total:   total,
		Page:    page,
		HasMore: hasMore,
	}

	c.JSON(http.StatusOK, response)
}

func (h *NewsHandler) GetNewsBySlug(c *gin.Context) {
	slug := c.Param("slug")

	news, err := h.repo.GetBySlug(slug)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "News not found"})
		return
	}

	c.JSON(http.StatusOK, news)
}
