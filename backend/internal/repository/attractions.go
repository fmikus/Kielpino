package repository

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"kielpino-backend/internal/models"
	"kielpino-backend/pkg/markdown"
)

type AttractionsRepository struct {
	contentPath string
}

func NewAttractionsRepository(contentPath string) *AttractionsRepository {
	return &AttractionsRepository{contentPath: contentPath}
}

func (r *AttractionsRepository) GetAll(category string) ([]models.Attraction, error) {
	files, err := os.ReadDir(r.contentPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read content directory: %w", err)
	}

	var attractions []models.Attraction

	for _, file := range files {
		if file.IsDir() || !strings.HasSuffix(file.Name(), ".md") {
			continue
		}

		filePath := filepath.Join(r.contentPath, file.Name())
		attraction, err := markdown.ParseAttractionFile(filePath)
		if err != nil {
			continue
		}

		// Filter by category if specified
		if category != "" && attraction.Category != category {
			continue
		}

		attractions = append(attractions, *attraction)
	}

	return attractions, nil
}

func (r *AttractionsRepository) GetBySlug(slug string) (*models.Attraction, error) {
	files, err := os.ReadDir(r.contentPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read content directory: %w", err)
	}

	for _, file := range files {
		if file.IsDir() || !strings.HasSuffix(file.Name(), ".md") {
			continue
		}

		filePath := filepath.Join(r.contentPath, file.Name())
		attraction, err := markdown.ParseAttractionFile(filePath)
		if err != nil {
			continue
		}

		if attraction.Slug == slug {
			return attraction, nil
		}
	}

	return nil, fmt.Errorf("attraction not found")
}
