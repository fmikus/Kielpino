package models

type Attraction struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Slug        string   `json:"slug"`
	Description string   `json:"description"`
	Images      []string `json:"images,omitempty"`
	Category    string   `json:"category,omitempty"`
	Location    string   `json:"location,omitempty"`
	Featured    bool     `json:"featured"`
}

type AttractionsResponse struct {
	Attractions []Attraction `json:"attractions"`
	Total       int          `json:"total"`
}
