# Content Directory

This directory contains all content for the Kielpino website in Markdown format.

## Structure

- `/news` - News articles
- `/attractions` - Local attractions
- `/history` - Historical articles
- `/residents` - Information for residents

## Markdown Format

### News Articles

```markdown
---
title: "Article Title"
slug: "article-slug"
excerpt: "Short description"
coverImage: "/images/news/image.jpg"
publishedAt: "2024-11-15"
category: "Category Name"
author: "Author Name"
---

# Article content here

Your markdown content...
```

### Attractions

```markdown
---
title: "Attraction Name"
slug: "attraction-slug"
category: "Natura/Kultura/Sport"
location: "Address"
featured: true
images:
  - "/images/attractions/image1.jpg"
  - "/images/attractions/image2.jpg"
---

# Attraction description

Your markdown content...
```

## Adding New Content

1. Create a new `.md` file in the appropriate directory
2. Add front matter (metadata) at the top between `---` markers
3. Write your content in Markdown below the front matter
4. Save the file
5. The backend will automatically pick it up on next request

## Images

Place images in `/frontend/public/images/` directory and reference them in the content using `/images/...` path.
