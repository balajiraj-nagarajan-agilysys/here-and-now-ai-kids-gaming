# Kids Gaming Site

A fun and educational gaming website designed for kids ages 10-15. This project demonstrates modern web development practices while creating an engaging, accessible, and interactive experience.

## Project Structure

```
kids-gaming-site/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with CSS variables and responsive design
├── scripts.js          # JavaScript for dynamic content and interactivity
├── data/
│   ├── branding.json   # Site branding information
│   ├── theme.json      # Color scheme and design tokens
│   └── games.json      # Games data and content
├── assets/
│   ├── images/         # Image files
│   └── icons/          # Icon files
└── README.md          # This file
```

## Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation
- **Dynamic Content**: JSON-driven content loading
- **Interactive Elements**: Game cards, countdown timer, and hover effects
- **Modern CSS**: CSS custom properties (variables) for easy theming

## Data-Driven Architecture

This site uses three JSON files to separate content from code:

### `data/branding.json`
Controls site identity including:
- Site name and logo
- Contact information
- Social media links
- Slogan and description

### `data/theme.json`
Manages visual design including:
- Color palette
- Typography settings
- Spacing and layout values
- Border radius and shadows

### `data/games.json`
Contains all game content including:
- Game details (name, description, difficulty)
- Categories and filtering data
- Countdown timer target
- Site tagline

## Getting Started

1. **Setup**: Open the project folder in VS Code
2. **Development**: Use Live Server extension for local development
3. **Customization**: Modify JSON files to change content and styling

## Learning Objectives

This project includes several "TODO: student exercise" markers for hands-on learning:

### HTML Enhancements
- [ ] Add navigation menu in header
- [ ] Include social media links in footer
- [ ] Add more ARIA attributes for accessibility

### CSS Improvements
- [ ] Customize color scheme in CSS variables
- [ ] Add animations and transitions
- [ ] Create additional responsive breakpoints

### JavaScript Features
- [ ] Implement game search functionality
- [ ] Add game filtering by category/difficulty
- [ ] Create user favorites system
- [ ] Build actual countdown timer functionality
- [ ] Add game rating system

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, and responsive design
- **Vanilla JavaScript**: Modern ES6+ features and async/await
- **JSON**: Data storage and content management

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Contributing

This is an educational project. Feel free to:
1. Complete the TODO exercises
2. Add new features
3. Improve accessibility
4. Enhance the design

## License

This project is for educational purposes. Feel free to use and modify as needed.

---

**Happy Coding!** 🎮✨
