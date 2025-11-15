package markdown

import (
	"bytes"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"kielpino-backend/internal/models"

	"gopkg.in/yaml.v3"
)

type FrontMatter struct {
	Title       string   `yaml:"title"`
	Slug        string   `yaml:"slug"`
	Excerpt     string   `yaml:"excerpt"`
	CoverImage  string   `yaml:"coverImage"`
	PublishedAt string   `yaml:"publishedAt"`
	Category    string   `yaml:"category"`
	Author      string   `yaml:"author"`
	Images      []string `yaml:"images"`
	Location    string   `yaml:"location"`
	Featured    bool     `yaml:"featured"`
}

func ParseNewsFile(filePath string) (*models.News, error) {
	frontMatter, content, err := parseMarkdownFile(filePath)
	if err != nil {
		return nil, err
	}

	publishedAt, err := time.Parse("2006-01-02", frontMatter.PublishedAt)
	if err != nil {
		publishedAt = time.Now()
	}

	// Generate ID from filename
	id := strings.TrimSuffix(filepath.Base(filePath), ".md")

	return &models.News{
		ID:          id,
		Title:       frontMatter.Title,
		Slug:        frontMatter.Slug,
		Excerpt:     frontMatter.Excerpt,
		Content:     content,
		CoverImage:  frontMatter.CoverImage,
		PublishedAt: publishedAt,
		Category:    frontMatter.Category,
		Author:      frontMatter.Author,
	}, nil
}

func ParseAttractionFile(filePath string) (*models.Attraction, error) {
	frontMatter, content, err := parseMarkdownFile(filePath)
	if err != nil {
		return nil, err
	}

	id := strings.TrimSuffix(filepath.Base(filePath), ".md")

	return &models.Attraction{
		ID:          id,
		Name:        frontMatter.Title,
		Slug:        frontMatter.Slug,
		Description: content,
		Images:      frontMatter.Images,
		Category:    frontMatter.Category,
		Location:    frontMatter.Location,
		Featured:    frontMatter.Featured,
	}, nil
}

func parseMarkdownFile(filePath string) (*FrontMatter, string, error) {
	data, err := os.ReadFile(filePath)
	if err != nil {
		return nil, "", fmt.Errorf("failed to read file: %w", err)
	}

	// Split front matter and content
	parts := bytes.SplitN(data, []byte("---"), 3)
	if len(parts) < 3 {
		return nil, "", fmt.Errorf("invalid markdown format: no front matter found")
	}

	// Parse front matter
	var frontMatter FrontMatter
	if err := yaml.Unmarshal(parts[1], &frontMatter); err != nil {
		return nil, "", fmt.Errorf("failed to parse front matter: %w", err)
	}

	// Get content
	content := strings.TrimSpace(string(parts[2]))

	return &frontMatter, content, nil
}
