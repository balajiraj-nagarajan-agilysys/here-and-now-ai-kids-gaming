# Kids Gaming Site - HERE AND NOW AI

A fun and educational gaming website designed for kids ages 10-15, branded with HERE AND NOW AI identity. This project demonstrates modern web development practices while creating an engaging, accessible, and interactive experience.

## 🚀 Live Demo

This site is designed to be deployed on GitHub Pages. After following the deployment steps below, your site will be available at:
`https://[your-username].github.io/kids-gaming-site`

## 📁 Project Structure

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

## 🎨 HERE AND NOW AI Branding

This site is branded with HERE AND NOW AI identity:
- **Organization**: HERE AND NOW AI
- **Website**: [hereandnowai.com](https://hereandnowai.com)
- **Slogan**: "designed with passion for innovation"
- **Colors**: Primary (#FFDF00), Secondary (#004040)
- **Contact**: info@hereandnowai.com, +91 996 296 1000

The branding integrates seamlessly through the `data/branding.json` file and includes:
- Logo and favicon from HERE AND NOW AI assets
- Social media links (Blog, LinkedIn, Instagram, GitHub, Twitter, YouTube)
- Contact information and organizational details
- Custom color scheme matching brand identity

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

## 🌐 Deployment Instructions

### Option 1: Using GitHub CLI (Recommended)
If you have GitHub CLI installed:
```bash
gh repo create kids-gaming-site --public --source=. --push
gh repo edit kids-gaming-site --homepage "https://[your-username].github.io/kids-gaming-site"
```

### Option 2: Manual GitHub Setup
1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `kids-gaming-site`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   git remote add origin https://github.com/[your-username]/kids-gaming-site.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` / `(root)`
   - Click "Save"

4. **Wait for deployment** (2-5 minutes):
   - Check the "Actions" tab for deployment status
   - Your site will be live at: `https://[your-username].github.io/kids-gaming-site`

### Automatic Deployment
The repository includes a GitHub Actions workflow (`.github/workflows/gh-pages.yml`) that automatically:
- Builds and deploys the site when you push to main branch
- Uses the latest GitHub Pages deployment action
- Includes a `.nojekyll` file for proper static file serving

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

## 📞 Support

For questions about this educational project:
- **Email**: info@hereandnowai.com
- **Website**: [hereandnowai.com](https://hereandnowai.com)
- **GitHub**: [github.com/hereandnowai](https://github.com/hereandnowai)

---

**Happy Coding!** 🎮✨  
*Designed with passion for innovation by HERE AND NOW AI*
