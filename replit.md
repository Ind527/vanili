# Nusantara Vanilla Export Website

## Overview
A static website for Nusantara Vanilla Export, an Indonesian vanilla bean export company. The site showcases premium vanilla products and export services for international buyers.

## Project Structure
```
.
├── index.html              # Homepage with hero, company overview, products preview
├── about.html              # About the company page
├── products.html           # Product catalog with filtering
├── contact.html            # Contact form with multi-step inquiry
├── why-choose-us.html      # Company benefits and quality assurance
├── export-logistics.html   # Export documentation and logistics info
├── main.js                 # Main JavaScript file with all interactions
├── resources/              # Images and assets
│   ├── product-samples/    # Product images
│   └── *.jpg              # Various page images
└── *.md                    # Documentation files
```

## Tech Stack
- **HTML5** - Static pages
- **Tailwind CSS** - Via CDN for styling
- **JavaScript** - Vanilla JS for interactions
- **Libraries (CDN)**:
  - anime.js - Animations
  - typed.js - Typing effect
  - Splide - Carousel
  - ECharts - Charts (on export-logistics page)

## Development
The site runs on Python's built-in HTTP server:
```bash
python3 -m http.server 5000 --bind 0.0.0.0
```

## Features
- Responsive design with mobile navigation
- Product filtering system
- Multi-step contact/inquiry form
- Export documentation checker
- Scroll reveal animations
- Interactive charts for export logistics

## Deployment
This is a static site that can be deployed directly. All assets are included in the repository.
