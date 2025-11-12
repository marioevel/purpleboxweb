# Purple Box - Sebastian Hawkins Sim Racing Coach Website

## Overview

A stunning, modern single-page application showcasing Purple Box, Sebastian Hawkins' elite sim racing coaching brand. Features a sophisticated black and purple color scheme with smooth animations and professional motorsport imagery.

---

## Branding & Design

### Purple Box Logos Integrated
- **White Logo**: Used in navigation and footer
- **Purple Logo**: Featured in hero section
- **Black Logo**: Available for light backgrounds (if needed)

Logo files location:
- White: `https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/jaz2pbzq_White_Transparent.png`
- Purple: `https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/a6e7mcpk_Purple_Transparent.png`
- Black: `https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/bhiep60i_Black_Transparent.png`

### Color Palette

```css
Primary Purple:    #8a64c8  /* Main brand color */
Light Purple:      #b794f6  /* Hover states */
Dark Purple:       #6b4ea8  /* Accents */

Deep Black:        #0a0a0a  /* Primary background */
Dark Gray:         #1a1a1a  /* Card backgrounds */
Medium Gray:       #2a2a2a  /* Subtle elements */

Text Light:        #e0d4f7  /* Primary text */
Text Medium:       #a89cc2  /* Secondary text */
Text Muted:        #6b5d8c  /* Tertiary text */
```

### Design Features

1. **Purple Glow Effects**: Text shadows on hero title and contact section
2. **Glowing Buttons**: Purple shadow effects with hover animations
3. **Logo Glow**: Subtle drop-shadow filter on logos
4. **Card Shadows**: Purple-tinted shadows on hover
5. **Border Accents**: Transparent purple borders (rgba)
6. **Smooth Transitions**: All interactive elements have 0.3s ease transitions

---

## Page Sections

### 1. Navigation
- Fixed top navigation with blur backdrop
- Purple Box white logo (left)
- Navigation links: About, Services, Testimonials
- Purple "Contact" button (right)
- Responsive mobile menu

### 2. Hero Section
- Full-height immersive section
- Sim racing background image with purple-tinted overlay
- Purple Box purple logo prominently displayed
- "Sebastian Hawkins" title with purple glow effect
- Two CTA buttons: "Get in Touch" (purple) and "Learn More" (outlined)

### 3. Achievements Bar
- 4 achievement highlights with purple trophy icons
- Gradient background with purple tints
- Formula One Experience
- Guild Championship Winner
- 10+ Years Experience
- Pro & Amateur Coaching

### 4. About Section
- Two-column layout (text + image)
- Detailed biography of Seb's experience
- Professional photo with purple border and glow
- Three badge tags: Formula One, Guild Champion, Esports Expert

### 5. Services Section
- Three service cards in grid layout
- Professional Coaching
- Esports Consultation  
- Setup Analysis
- Purple checkmark icons for features
- Hover effects with purple shadows
- Purple headings

### 6. Testimonials Section
- Three testimonial cards
- Client quotes with names and roles
- Hover effects with elevation
- Purple border accents

### 7. Contact Section
- Centered call-to-action
- Large purple glowing title
- Email button: seb@sebhawkins.com
- Mail icon + text
- Purple button with glow effect

### 8. Footer
- Purple Box white logo
- Copyright notice
- Purple border top accent

---

## Technical Implementation

### Color System Variables

All colors are defined in `/app/frontend/src/App.css` as CSS custom properties for easy maintenance:

```css
:root {
  --bg-page: #0a0a0a;
  --bg-card: #1a1a1a;
  --bg-light: #2a2a2a;
  
  --text-primary: #e0d4f7;
  --text-secondary: #a89cc2;
  --text-muted: #6b5d8c;
  --text-inverse: #0a0a0a;
  
  --border-light: rgba(138, 100, 200, 0.2);
  --border-medium: rgba(138, 100, 200, 0.4);
  --border-strong: #8a64c8;
  
  --brand-primary: #8a64c8;
  --brand-secondary: #b794f6;
  --brand-dark: #6b4ea8;
  --brand-hover: #9f75e0;
  --brand-active: #7a52b8;
}
```

### Animation Effects

```css
/* Purple Glow */
.purple-glow {
  text-shadow: 
    0 0 20px rgba(138, 100, 200, 0.6),
    0 0 40px rgba(138, 100, 200, 0.4),
    0 0 60px rgba(138, 100, 200, 0.2);
}

/* Button Hover */
.btn-primary:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 30px rgba(138, 100, 200, 0.6);
}

/* Logo Glow */
.logo-image {
  filter: drop-shadow(0 0 10px rgba(138, 100, 200, 0.5));
}
```

### Component Structure

```
Home.jsx
├── Navigation (Purple Box logo, links)
├── Hero Section (Purple logo, title with glow)
├── Achievements Bar (Purple icons)
├── About Section (Seb's photo with purple border)
├── Services Section (3 cards with purple accents)
├── Testimonials Section (3 cards)
├── Contact Section (Email button with glow)
└── Footer (Purple Box logo)
```

---

## Key Features

### Visual Design
- ✅ Professional black and purple color scheme
- ✅ Purple Box branding throughout
- ✅ Glowing purple effects on key elements
- ✅ Smooth hover animations
- ✅ High contrast for readability
- ✅ Motorsport-focused imagery

### User Experience
- ✅ Smooth scroll navigation
- ✅ Fixed navigation bar
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Interactive hover states
- ✅ Fast loading times
- ✅ Clear call-to-actions

### Technical
- ✅ React 19 with functional components
- ✅ Tailwind CSS + Custom CSS
- ✅ Shadcn/UI components
- ✅ Optimized images
- ✅ SEO-friendly structure
- ✅ Production-ready build

---

## Customization Guide

### Update Email Address
In `/app/frontend/src/pages/Home.jsx`, line ~232:
```jsx
<a href="mailto:seb@sebhawkins.com">
```

### Change Purple Shade
In `/app/frontend/src/App.css`, update:
```css
--brand-primary: #8a64c8;  /* Adjust hex value */
```

### Update Logos
Replace logo URLs in Home.jsx:
- Line ~68: Navigation logo (white)
- Line ~84: Hero logo (purple)
- Line ~244: Footer logo (white)

### Modify Content
All text content in `/app/frontend/src/pages/Home.jsx`:
- Services array (line ~9)
- Testimonials array (line ~24)
- About section text (line ~133)
- Achievements (line ~47)

---

## Performance Metrics

### Target Lighthouse Scores
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Optimizations Applied
- Lazy loading for images
- Optimized PNG logos with transparency
- Minified CSS and JS in production
- Compressed images
- Efficient React rendering
- CSS custom properties for theming

---

## Browser Compatibility

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Browsers
- iOS Safari 14+
- Chrome Mobile (Android 8+)
- Samsung Internet 13+

---

## Deployment Checklist

### Pre-Deployment
- [ ] Test all navigation links
- [ ] Verify email link works
- [ ] Check responsive design on all devices
- [ ] Test button hover effects
- [ ] Validate all images load correctly
- [ ] Review text content for accuracy

### Production Build
```bash
cd /app/frontend
yarn build
```

### Deploy to Server
See `DEPLOYMENT_GUIDE.md` for complete Ubuntu 22.04 instructions.

---

## File Structure

```
/app/frontend/
├── src/
│   ├── pages/
│   │   └── Home.jsx          # Main page component
│   ├── components/
│   │   └── ui/               # Shadcn components
│   ├── App.js                # Root component
│   ├── App.css               # Purple Box theme styles
│   └── index.css             # Tailwind imports
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
├── QUICK_START.md
└── README.md
```

---

## Support & Maintenance

### Regular Updates
- Keep dependencies updated monthly
- Monitor for security vulnerabilities
- Test on latest browser versions
- Backup website files regularly

### Content Updates
All content can be updated by editing `/app/frontend/src/pages/Home.jsx`. No database required.

### Color Scheme Updates
All colors centralized in `/app/frontend/src/App.css` under `:root` for easy theme changes.

---

## Contact Information

**Email**: seb@sebhawkins.com  
**Company**: Purple Box  
**Website**: [Your deployed URL]

---

## Credits

- **Branding**: Purple Box
- **Development**: React + Tailwind CSS
- **Design Theme**: Modern black & purple motorsport aesthetic
- **Icons**: Lucide React
- **Components**: Shadcn/UI

---

**Built with passion for sim racing excellence.** 🏁
