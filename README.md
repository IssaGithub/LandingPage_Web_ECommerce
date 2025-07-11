# Issa Zaytoun – Web & E-Commerce Landing Page

A simple, DSGVO-compliant landing page built with Astro.js and Tailwind CSS.

## Features
- Hero section with company info
- Topic dropdown (Website, Online-shop, Individual programming, App)
- Calendly appointment button (DSGVO-compliant)
- Call button
- Responsive, modern design
- Multi-language support (English/German)
- Detailed service pages with CTAs
- Automatic GitHub Pages deployment

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## GitHub Pages Deployment

### Automatic Deployment
This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Instructions:
1. **Enable GitHub Pages** in your repository:
   - Go to Repository Settings → Pages
   - Set Source to "GitHub Actions"
   - The workflow will automatically deploy on push to `main`

2. **First deployment**:
   ```sh
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access your site** at:
   - **English**: `https://issagithub.github.io/LandingPage_Web_ECommerce/`
   - **German**: `https://issagithub.github.io/LandingPage_Web_ECommerce/de`

### Manual Deployment
You can also trigger deployment manually from the GitHub Actions tab.

### Troubleshooting
If you get 404 errors:
1. Check that GitHub Pages is enabled in repository settings
2. Ensure the source is set to "GitHub Actions"
3. Wait a few minutes for deployment to complete
4. Check the Actions tab for any deployment errors

---

## Contact Information
- Calendly link: https://calendly.com/issa-zaytoun/erstgesprach-mit-issa-zaytoun-web-e-commerce
- Phone: +49 176 81441063

## DSGVO
Calendly is only loaded when the user clicks the button. No cookies or trackers are used by default. 