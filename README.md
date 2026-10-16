# Thokozani "Thoko" Phanga — Health Communications Portfolio

A bespoke, production-ready editorial portfolio website built for **Thokozani Phanga**, health communications specialist and founder of **Zisamale Health** in Lilongwe, Malawi.

---

## 1. Quick Start & Deployment

The site is built with vanilla HTML5, CSS3, and JavaScript with zero external frameworks or build steps required.

### Local Preview
Open `index.html` directly in any web browser, or launch a quick local server:
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node / npx
npx serve .
```
Then navigate to `http://localhost:8000`.

### Production Deployment
Upload this directory directly to **Cloudflare Pages**, **GitHub Pages**, **Vercel**, **Netlify**, or standard Apache/Nginx web hosting. No compilation or dependencies are required.

---

## 2. Directory Structure

```
Thokoforlio/
├── .gemini/
│   └── skills/
│       └── antigravity-design-expert/
│           └── SKILL.md         # Installed Antigravity UI & Motion Design skill specification
├── index.html                   # Semantic, accessible HTML5 site with 3D cards, ambient canvas & schema
├── assets/
│   ├── css/
│   │   └── style.css            # Complete design system, 3D perspective, glassmorphism, fluid type
│   ├── js/
│   │   ├── main.js              # 3D tilt engine, magnetic buttons, GSAP triggers, translation studio
│   │   └── vendor/              # Bundled local vendor scripts for offline resilience
│   │       ├── gsap.min.js          # GSAP 3.15 animation core
│   │       └── ScrollTrigger.min.js # GSAP ScrollTrigger plugin
│   └── images/
│       ├── thoko-portrait.webp  # Ultra-fast 30KB WebP portrait (from Oxford portrait shoot)
│       ├── thoko-portrait.jpg   # High-resolution JPEG fallback
│       ├── case-fashion-futures.svg     # Bespoke editorial artwork for Fashion Futures: Namibia
│       ├── case-cure-cleft.svg          # Bespoke editorial artwork for Beit CURE Cleft Service Line
│       ├── case-cure-annual-report.svg  # Bespoke editorial artwork for 2025 CURE Annual Report
│       ├── favicon.svg          # Custom monogram "TP" vector favicon
│       ├── og-image.svg         # 1200x630 Open Graph & Twitter social preview banner
│       └── logos/               # Vector SVG logos for institutional partners
│           ├── cure-logo.svg                    # CURE International Children's Hospitals
│           ├── british-council-logo.svg         # British Council
│           ├── oxford-logo.svg                  # University of Oxford
│           ├── mastercard-foundation-logo.svg   # Mastercard Foundation
│           └── welthungerhilfe-logo.svg         # Welthungerhilfe (WHH)
└── README.md                    # Documentation, how-to-edit guide, and design rationale
```

---

## 3. How to Edit the Site

### A. Updating Copy, Social Links, and Phone Numbers
All core content, case studies, and contact details are centralized in `assets/js/main.js` under the `PORTFOLIO_CONFIG` object:
```javascript
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Thokozani Phanga",
    preferredName: "Thoko",
    email: "Thokospoon@gmail.com",
    phone: "+265991302332",
    phoneDisplay: "+265 991 302 332",
    linkedIn: "https://www.linkedin.com/in/thokozanispoonphanga/",
    // ...
  }
};
```
Text changes in `index.html` can also be edited directly within semantic tags.

### B. Adjusting Palette & Branding (Zisamale Health Brand Tokens)
The palette is declared as CSS variables at the top of `assets/css/style.css` (lines 10–55):
```css
:root {
  --color-ink: #0F2742;        /* Oxford navy: primary text & dark surfaces */
  --color-paper: #F7F2E9;      /* Warm off-white paper background */
  --color-lake-teal: #1E7A7A;  /* Lake Malawi & health accent */
  --color-marigold: #E8A33D;   /* Highlight accent, buttons, underlines */
  --color-clay: #C4553A;       /* Earthy terracotta for small badges */
  --color-mist: #DCE6E4;       /* Secondary surfaces, cards, borders */
}
```
If Zisamale Health develops a new primary brand color, update `--color-lake-teal` and `--color-marigold` in that single block.

### C. Swapping Images
- **Headshot**: Replace `assets/images/thoko-portrait.webp` and `assets/images/thoko-portrait.jpg` with a new square or portrait photograph.
- **Case Studies**: Replace `assets/images/case-*.svg` with high-resolution photography, publication spreads, or campaign graphics.

---

## 4. Placeholders to Fill (Next Steps for Thoko)

1. **Zisamale Health Standalone Logo / Icon**: Currently styled as an editorial pill badge (`Zisamale Health`) and custom SVG geometric mark. If a formal registered logo is finalized, replace the badge in `#zisamale`.
2. **Institutional & Funder Logos**: A dedicated partner strip (e.g. University of Oxford, Mastercard Foundation, CURE International, British Council, Welthungerhilfe) is populated in the affiliations section.
3. **Formal Testimonials**: Slots prepared for quotes from hospital executive directors, senior research fellows, or NGO programme directors.
4. **Downloadable PDF CV / One-Pager**: A button link can be added to the hero or nav pointing to `Thokozani_Phanga_CV.pdf`.
