# 🕌 مسجد حي 40 هكتار — جيجل | Hai 40 Hectares Mosque — Jijel

A modern, bilingual (Arabic/English) static website for the Hai 40 Hectares Mosque in Jijel, Algeria.

## ✨ Features

- **🌙 Live Prayer Times** — Real-time prayer times via Aladhan API with countdown to next prayer
- **🌐 Bilingual** — Full Arabic (RTL) and English (LTR) support with persistent language preference
- **📱 Responsive** — Mobile-first design that works on all devices
- **🎨 Modern Design** — Dark theme with Islamic aesthetics, glassmorphism, and smooth animations
- **📅 Hijri Calendar** — Automatic Hijri date display alongside Gregorian dates
- **⚡ Fast** — Pure HTML/CSS/JS with no framework dependencies
- **♿ Accessible** — WCAG 2.1 compliant with semantic HTML5

## 🏗️ Project Structure

```
mosque/
├── index.html              # Main single-page website
├── assets/
│   ├── css/
│   │   └── main.css        # Complete design system
│   ├── js/
│   │   └── app.js          # Application logic (prayer times, i18n, etc.)
│   └── images/
│       ├── mosque.png       # Real mosque photo
│       ├── mosque-2.png     # Additional photo
│       └── pattern-bg.png   # Islamic geometric pattern
└── README.md
```

## 🚀 Deployment to GitHub Pages

1. Create a new GitHub repository
2. Push this code to the `main` branch
3. Go to **Settings → Pages**
4. Select source: **Deploy from a branch** → **main** → **/ (root)**
5. Your site will be live at `https://username.github.io/repository-name`

## 🛠️ Local Development

```bash
# Serve locally with Python
python3 -m http.server 8080

# Or with Node.js
npx serve .
```

Then visit `http://localhost:8080`

## 📍 Location

**حي 40 هكتار، جيجل، الجزائر 18000**
Hai 40 Hectares, Jijel, Algeria 18000

## 🔧 Customization

### Update Content
All bilingual content is defined in `assets/js/app.js` in the `CONTENT` object. Edit the Arabic (`ar`) and English (`en`) sections to update any text.

### Change Prayer Times Location
Update the coordinates in `CONFIG` at the top of `assets/js/app.js`:
```javascript
const CONFIG = {
  latitude: 36.821,    // Your latitude
  longitude: 5.7635,   // Your longitude
  method: 19,          // 19 = Algeria calculation method
};
```

### Colors & Theme
Edit CSS custom properties in `assets/css/main.css`:
```css
:root {
  --color-primary: #1db954;      /* Islamic green */
  --color-accent: #d4a843;       /* Gold accent */
  --color-bg-primary: #0a0f1a;   /* Dark background */
}
```

## 📄 License

This project is open source and available for mosque communities.

---

**بارك الله فيكم** 🤲
