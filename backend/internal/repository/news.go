package repository

import (
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"kielpino-backend/internal/models"
	"kielpino-backend/pkg/markdown"
)

type NewsRepository struct {
	contentPath string
}

func NewNewsRepository(contentPath string) *NewsRepository {
	return &NewsRepository{contentPath: contentPath}
}

func (r *NewsRepository) GetAll(page, limit int) ([]models.News, int, error) {
	files, err := os.ReadDir(r.contentPath)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to read content directory: %w", err)
	}

	var allNews []models.News

	for _, file := range files {
		if file.IsDir() || !strings.HasSuffix(file.Name(), ".md") {
			continue
		}

		filePath := filepath.Join(r.contentPath, file.Name())
		news, err := markdown.ParseNewsFile(filePath)
		if err != nil {
			continue // Skip invalid files
		}

		allNews = append(allNews, *news)
	}

	// Sort by published date (newest first)
	sort.Slice(allNews, func(i, j int) bool {
		return allNews[i].PublishedAt.After(allNews[j].PublishedAt)
	})

	total := len(allNews)

	// Pagination
	start := (page - 1) * limit
	end := start + limit

	if start >= total {
		return []models.News{}, total, nil
	}

	if end > total {
		end = total
	}

	return allNews[start:end], total, nil
}

func (r *NewsRepository) GetBySlug(slug string) (*models.News, error) {
	files, err := os.ReadDir(r.contentPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read content directory: %w", err)
	}

	for _, file := range files {
		if file.IsDir() || !strings.HasSuffix(file.Name(), ".md") {
			continue
		}

		filePath := filepath.Join(r.contentPath, file.Name())
		news, err := markdown.ParseNewsFile(filePath)
		if err != nil {
			continue
		}

		if news.Slug == slug {
			return news, nil
		}
	}

	return nil, fmt.Errorf("news not found")
}
