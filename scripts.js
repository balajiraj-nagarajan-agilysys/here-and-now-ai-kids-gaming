// Main JavaScript file for Kids Gaming Site
// TODO: student exercise - add more interactive features

document.addEventListener('DOMContentLoaded', function() {
    console.log('Kids Gaming Site loaded!');
    
    // Load data from JSON files
    loadSiteData();
    
    // Initialize countdown timer
    initCountdown();
    
    // TODO: student exercise - add game search and filter functionality
});

// Function to load data from JSON files
async function loadSiteData() {
    try {
        // Load branding data
        const brandingResponse = await fetch('data/branding.json');
        const branding = await brandingResponse.json();
        
        // Load theme data
        const themeResponse = await fetch('data/theme.json');
        const theme = await themeResponse.json();
        
        // Load games data
        const gamesResponse = await fetch('data/games.json');
        const games = await gamesResponse.json();
        
        // Apply data to the page
        applyBranding(branding);
        applyTheme(theme);
        populateGames(games);
        
    } catch (error) {
        console.error('Error loading site data:', error);
        // Fallback content
        displayFallbackContent();
    }
}

// Apply branding data to the page
function applyBranding(branding) {
    const siteTitle = document.getElementById('site-title');
    const siteLogo = document.getElementById('site-logo');
    const favicon = document.getElementById('favicon');
    const footerSlogan = document.getElementById('footer-slogan');
    const footerOrg = document.getElementById('footer-org');
    const contactEmail = document.getElementById('contact-email');
    const contactPhone = document.getElementById('contact-phone');
    const contactAddress = document.getElementById('contact-address');
    const socialLinks = document.getElementById('social-links');
    
    if (branding.siteName) {
        siteTitle.textContent = branding.siteName;
        document.title = branding.siteName;
        footerOrg.textContent = `© 2024 ${branding.siteName}`;
    }
    
    if (branding.logo && branding.logo.url) {
        siteLogo.src = branding.logo.url;
        siteLogo.alt = branding.logo.alt || branding.siteName;
        siteLogo.style.display = 'block';
    }
    
    if (branding.logo && branding.logo.favicon) {
        favicon.href = branding.logo.favicon;
    }
    
    if (branding.slogan) {
        footerSlogan.textContent = branding.slogan;
    }
    
    if (branding.contact) {
        if (branding.contact.email) {
            contactEmail.textContent = `Email: ${branding.contact.email}`;
        }
        if (branding.contact.phone) {
            contactPhone.textContent = `Phone: ${branding.contact.phone}`;
        }
        if (branding.contact.address) {
            contactAddress.textContent = `Address: ${branding.contact.address}`;
        }
    }
    
    // Add social media links
    if (branding.socialMedia) {
        socialLinks.innerHTML = '';
        Object.entries(branding.socialMedia).forEach(([platform, url]) => {
            if (url) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
                link.setAttribute('aria-label', `Follow us on ${platform}`);
                socialLinks.appendChild(link);
            }
        });
    }
    
    // TODO: student exercise - add logo and more branding elements
}

// Apply theme data to CSS variables
function applyTheme(theme) {
    if (theme.colors) {
        const root = document.documentElement;
        root.style.setProperty('--primary', theme.colors.primary);
        root.style.setProperty('--accent', theme.colors.accent);
        root.style.setProperty('--bg', theme.colors.background);
        root.style.setProperty('--text', theme.colors.text);
    }
    
    if (theme.font) {
        document.documentElement.style.setProperty('--font-family', theme.font.family);
    }
}

// Populate games on the page
function populateGames(gamesData) {
    const gamesContainer = document.getElementById('games-container');
    const siteTagline = document.getElementById('site-tagline');
    
    // Update tagline
    if (gamesData.tagline) {
        siteTagline.textContent = gamesData.tagline;
    }
    
    // Clear existing content
    gamesContainer.innerHTML = '';
    
    // Add each game
    if (gamesData.games && gamesData.games.length > 0) {
        gamesData.games.forEach(game => {
            const gameCard = createGameCard(game);
            gamesContainer.appendChild(gameCard);
        });
    } else {
        gamesContainer.innerHTML = '<p>No games available at the moment.</p>';
    }
}

// Create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play ${game.name}`);
    
    // Create rating stars
    const ratingStars = '★'.repeat(Math.floor(game.rating || 0)) + '☆'.repeat(5 - Math.floor(game.rating || 0));
    
    card.innerHTML = `
        <h4>${game.name}</h4>
        <p>${game.description}</p>
        <div class="game-meta">
            <span class="difficulty">Difficulty: ${game.difficulty}</span>
            <span class="category">Category: ${game.category || 'General'}</span>
            <span class="age-group">Ages: ${game.ageGroup || '8+'}</span>
        </div>
        <div class="game-stats">
            <span class="rating" title="Rating: ${game.rating || 0}/5">
                ${ratingStars} (${game.rating || 0})
            </span>
            <span class="play-count">${game.playCount || 0} plays</span>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => {
        if (game.url && game.url !== '#') {
            window.open(game.url, '_blank');
        } else {
            alert(`${game.name} will be available soon!`);
        }
    });
    
    // Add keyboard handler
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
    
    return card;
}

// Initialize countdown timer
function initCountdown() {
    const countdownElement = document.getElementById('countdown-timer');
    
    // Load countdown target from games.json when available
    fetch('data/games.json')
        .then(response => response.json())
        .then(data => {
            if (data.countdownTarget) {
                startCountdown(data.countdownTarget, data.countdownMessage || 'Special Release');
            } else {
                countdownElement.textContent = 'Coming Soon!';
            }
        })
        .catch(() => {
            countdownElement.textContent = 'Coming Soon!';
        });
    
    function startCountdown(targetDate, message) {
        const target = new Date(targetDate).getTime();
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = target - now;
            
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                countdownElement.innerHTML = `
                    <div>${message}</div>
                    <div style="font-size: 1.2em; margin-top: 0.5rem;">
                        ${days}d ${hours}h ${minutes}m ${seconds}s
                    </div>
                `;
            } else {
                countdownElement.innerHTML = `<div>${message} Available Now!</div>`;
            }
        };
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    
    // TODO: student exercise - add more countdown features like notifications
}

// Fallback content for when JSON files can't be loaded
function displayFallbackContent() {
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = `
        <div class="game-card">
            <h4>Sample Game 1</h4>
            <p>A fun puzzle game for all ages!</p>
            <span class="difficulty">Difficulty: Easy</span>
        </div>
        <div class="game-card">
            <h4>Sample Game 2</h4>
            <p>An exciting adventure awaits!</p>
            <span class="difficulty">Difficulty: Medium</span>
        </div>
    `;
}

// TODO: student exercise - add more functions:
// - Game search functionality
// - Game filtering by difficulty
// - User favorites system
// - Game rating system
// - More interactive animations
