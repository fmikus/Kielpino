package models

import "time"

type News struct {
	ID          string    `json:"id"`
	Title       string    `json:"title"`
	Slug        string    `json:"slug"`
	Excerpt     string    `json:"excerpt"`
	Content     string    `json:"content"`
	CoverImage  string    `json:"coverImage,omitempty"`
	PublishedAt time.Time `json:"publishedAt"`
	Category    string    `json:"category,omitempty"`
	Author      string    `json:"author,omitempty"`
}

type NewsResponse struct {
	News    []News `json:"news"`
	Total   int    `json:"total"`
	Page    int    `json:"page"`
	HasMore bool   `json:"hasMore"`
}
