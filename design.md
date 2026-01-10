# Nusantara Vanilla Export - Design System

## Design Philosophy

### Visual Language
**Professional B2B Aesthetic**: Clean, trustworthy, and sophisticated design that communicates reliability and quality to international buyers. The design emphasizes precision, consistency, and professional competence without unnecessary embellishments.

**Natural Premium Positioning**: Visual elements reflect the natural origins of vanilla while maintaining a premium, export-quality appearance suitable for global business communication.

### Color Palette
**Primary Colors**:
- **Primary**: #4E342E (Deep chocolate brown - represents vanilla bean richness)
- **Secondary**: #8D6E63 (Warm taupe - natural sophistication)
- **Accent/CTA**: #C9A24D (Golden vanilla - premium quality indicator)
- **Background**: #FAF7F2 (Cream white - clean, professional base)
- **Text**: #2B2B2B (Near black - maximum readability)

**Color Usage Guidelines**:
- Primary color for headers, navigation, and key branding elements
- Secondary color for supporting elements and section dividers
- Accent color exclusively for CTA buttons and important highlights
- Background color maintains consistency across all pages
- Text color ensures 4.5:1 contrast ratio for accessibility

### Typography System
**Heading Font**: Playfair Display (Serif)
- Professional elegance with international appeal
- Used for main headings, hero text, and section titles
- Weights: 400 (Regular), 600 (SemiBold), 700 (Bold)

**Body & UI Font**: Inter (Sans-serif)
- Clean, highly readable, optimized for screens
- Used for body text, navigation, forms, and UI elements
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)

**Typography Hierarchy**:
- H1: Playfair Display, 48px, Bold (Hero headlines)
- H2: Playfair Display, 36px, SemiBold (Section headers)
- H3: Playfair Display, 24px, SemiBold (Subsection titles)
- Body: Inter, 16px, Regular (Main content)
- Small: Inter, 14px, Regular (Supporting text)
- Button: Inter, 16px, Medium (CTA text)

## Visual Effects & Animation

### Core Libraries Implementation
**Anime.js**: Smooth micro-interactions for form validation feedback, button hover states, and page transition effects. Subtle fade-in animations for content sections as they scroll into view.

**Typed.js**: Dynamic typewriter effect for the hero headline "Premium Indonesian Vanilla Beans for International Buyers" to create immediate engagement and emphasize the B2B focus.

**Splide.js**: Professional image carousel for vanilla bean galleries and product showcases with smooth transitions and thumbnail navigation.

**ECharts.js**: Clean data visualization for quality specifications, export statistics, and process flow diagrams using the established color palette.

**Splitting.js**: Letter-by-letter animation effects for key headings and brand elements, adding sophisticated motion without overwhelming the professional aesthetic.

### Background Effects
**Subtle Texture Overlay**: Light vanilla bean texture pattern at 5% opacity on background sections to reinforce brand identity without compromising readability.

**Gradient Accents**: Minimal use of chocolate-to-gold gradients on decorative elements and section separators, maintaining the natural premium aesthetic.

### Interactive Elements
**Button Hover States**: 
- Background color transition from accent to darker gold
- Subtle box-shadow expansion (0 4px 12px rgba(201, 162, 77, 0.3))
- 0.3s ease transition timing

**Form Interactions**:
- Input field focus states with golden border highlight
- Real-time validation feedback using color-coded indicators
- Smooth error message animations using Anime.js

**Card Hover Effects**:
- Gentle lift with shadow expansion (transform: translateY(-4px))
- Border color transition to accent color
- Maintains professional appearance suitable for B2B context

## Layout & Structure

### Grid System
**12-Column Responsive Grid**: Ensures consistent alignment and spacing across all devices. Maximum content width of 1200px with 24px gutters.

**Vertical Rhythm**: 24px baseline grid for consistent spacing between elements, creating visual harmony and professional appearance.

### Section Design
**Hero Section**: 
- Full-width background with high-quality vanilla imagery
- Centered content with maximum 800px width for readability
- Prominent CTA buttons with proper spacing
- Typewriter animation for main headline

**Content Sections**:
- Alternating left/right layouts for visual interest
- Consistent 80px vertical padding between sections
- Clear visual hierarchy with proper heading structure

### Navigation Design
**Fixed Header**: Professional navigation bar with company logo, main menu items, and contact information. Background blur effect when scrolling.

**Mobile Navigation**: Hamburger menu with slide-out panel, maintaining full functionality on smaller screens.

## Component Design System

### Buttons
**Primary CTA**: 
- Background: #C9A24D (Accent color)
- Text: #2B2B2B (Dark for contrast)
- Padding: 16px 32px
- Border-radius: 8px
- Hover: Darker gold (#B8923F) with subtle shadow

**Secondary Button**:
- Background: Transparent
- Border: 2px solid #8D6E63
- Text: #4E342E
- Hover: Filled background with primary color

### Forms
**Input Fields**:
- Border: 1px solid #E0E0E0
- Focus: 2px solid #C9A24D
- Background: #FAF7F2
- Padding: 16px
- Border-radius: 6px

**Form Validation**:
- Success: #4CAF50 (Green) border and icon
- Error: #F44336 (Red) border and icon
- Neutral: #8D6E63 (Secondary) for informational messages

### Cards & Containers
**Product Cards**:
- Background: White with subtle border
- Shadow: 0 2px 8px rgba(0,0,0,0.1)
- Border-radius: 12px
- Padding: 24px
- Hover: Enhanced shadow and border color change

**Specification Tables**:
- Clean, minimal design with alternating row colors
- Accent color for headers and important data
- Responsive design for mobile viewing

## Responsive Design Strategy

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Mobile Optimizations
- **Typography**: Reduced font sizes maintaining hierarchy
- **Spacing**: Compressed vertical rhythm for smaller screens
- **Navigation**: Hamburger menu with full-screen overlay
- **Forms**: Single-column layout with larger touch targets

### Tablet Adaptations
- **Layout**: Two-column layouts where appropriate
- **Images**: Optimized sizing for medium screens
- **Navigation**: Horizontal menu with dropdown capabilities

## Accessibility Standards

### Color Contrast
- All text maintains minimum 4.5:1 contrast ratio
- Interactive elements have clear focus indicators
- Color is never the only means of conveying information

### Typography
- Minimum 16px font size for body text
- Sufficient line height (1.6) for readability
- Scalable text that works with browser zoom up to 200%

### Navigation
- Keyboard navigation support for all interactive elements
- Screen reader compatible with proper ARIA labels
- Logical tab order throughout the site

## Brand Consistency

### Logo Usage
- **Primary Logo**: Full "Nusantara Vanilla Export" wordmark
- **Icon Logo**: Simplified "NVE" monogram for small applications
- **Clear Space**: Minimum 24px around logo on all sides

### Imagery Style
- **Photography**: High-quality, natural lighting, professional composition
- **Product Images**: Clean, consistent backgrounds, detailed specifications
- **Hero Images**: Landscape orientation, strong visual impact, brand-aligned

### Voice & Tone
- **Professional**: Formal but approachable business communication
- **Concise**: Clear, factual information without unnecessary elaboration
- **Trustworthy**: Emphasis on quality, reliability, and export expertise
- **International**: Culturally neutral language suitable for global audience