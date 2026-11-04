# 🌌 Skandan D Gowda — Immersive 3D Developer Portfolio

A futuristic, cinematic personal portfolio designed and engineered for **Skandan D Gowda**, Third-Year Engineering Student (Information Science & Engineering) at **Atria Institute of Technology**, Bengaluru.

Inspired by Awwwards websites, modern creative developer portfolios, and high-performance interactive 3D WebGL experiences.

---

## 🚀 Key Highlights & 3D Interactive Features

1. **Main 3D Galaxy Environment (`Three.js` & `@react-three/fiber`)**:
   - Over 3,800 procedural cosmic particles mapped into dual-spiral galactic arms.
   - Cinematic three-point studio lighting with electric blue (`#2563EB`), cyan (`#22D3EE`), and neon purple (`#8B5CF6`).
   - Real-time mouse parallax, camera perspective tracking, and depth fields.

2. **Stylized 3D Animated Developer Character (`Avatar3D.jsx`)**:
   - Modern futuristic tech-wear blazer with glowing cyan/purple trim.
   - Natural sinusoidal idle breathing and posture sway.
   - Head and gaze tracking responding smoothly to pointer coordinates.
   - Dual holographic orbiting rings with real-time rotational physics.
   - Side-by-side integration with Skandan's verified authentic photograph in a biometric HUD card.

3. **Interactive 3D Hardware Showcase (`LaptopShowcase.jsx`)**:
   - Precision 3D laptop chassis rendered with Three.js aluminum shaders, glowing keyboard deck, trackpad, and chamfered LEDs.
   - Screen displays authentic high-resolution screenshots of the primary featured project: **MoodFlix (Mood-Based Movie Recommendation System)**.
   - Dynamic 5-screenshot texture switcher allowing live inspection of the landing page, dashboard NLP workspace, system architecture, and catalog.

4. **3D Tilted Glassmorphism Certificate Gallery (`TiltCertificateCard.jsx`)**:
   - Floating 3D certificate cards that dynamically tilt on the X/Y axes according to cursor position.
   - Full modal viewer with PDF embed and high-res image previews for all 5 verified credentials:
     - *What Is Generative AI?* — LinkedIn Learning
     - *Cybersecurity Analyst Job Simulation* — Tata / Forage
     - *Web Development Internship Certificate* — SkillCraft Technology
     - *Web Development Internship Certificate* — InAmigos Foundation
     - *Letter of Recommendation* — SkillCraft Technology (Pranav Bansal, Tech Lead)

5. **Smooth Performance & Ergonomics**:
   - Lenis smooth momentum scrolling.
   - Responsive navbar with active section detection and glowing status indicator: `Available for Opportunities`.
   - Accessible WebGL fallbacks and `prefers-reduced-motion` compliance.
   - Zero fabricated qualifications: 100% authentic data, CGPA (8.45), institutional credentials, and links.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | React 18, Vite 5, JavaScript (ESNext) |
| **Styling & UI** | Tailwind CSS 3, Glassmorphism, CSS Grid / Flexbox |
| **3D Graphics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Motion & Scrolling** | GSAP 3, Framer Motion, Lenis Smooth Scroll |
| **Iconography** | Lucide React |
| **Deployment** | Vercel (Configured with `vercel.json`) |

---

## 📁 Project Architecture

```
skandan-portfolio-3d/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── skandan_profile.jpg             # Authentic formal profile photograph
│   │   └── skandan_lifestyle.jpg           # Authentic lifestyle portrait
│   ├── certificates/
│   │   ├── skillcraft_internship_cert.png  # SkillCraft Certificate of Completion
│   │   ├── skillcraft_recommendation_letter.png
│   │   ├── skillcraft_recommendation_letter.pdf
│   │   ├── inamigos_internship_cert.jpeg   # InAmigos Certificate of Internship
│   │   ├── linkedin_generative_ai_cert.pdf # LinkedIn Learning Generative AI
│   │   └── forage_cybersecurity_cert.pdf   # Tata / Forage Cybersecurity Analyst
│   ├── projects/
│   │   ├── moodflix_hero.png               # MoodFlix Landing Interface
│   │   ├── moodflix_dashboard.png          # MoodFlix Dashboard & NLP Workspace
│   │   ├── moodflix_architecture.png       # Three-tier system architecture
│   │   ├── moodflix_catalog.png            # Movie recommendation catalog & trailers
│   │   └── moodflix_overview.png           # Platform overview
│   └── models/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Sticky glass navigation with status pill
│   │   ├── Hero.jsx                        # Cinematic 3D hero with dual avatar/portrait
│   │   ├── About.jsx                       # Biography, academic pillars, and verified CGPA
│   │   ├── Skills.jsx                      # Technical arsenal (Java, Python, React, SQL)
│   │   ├── Experience.jsx                  # Vertical animated timeline for internships
│   │   ├── Projects.jsx                    # Featured MoodFlix showcase with 3D laptop
│   │   ├── Certifications.jsx              # 3D interactive tilt cards gallery
│   │   ├── Education.jsx                   # Academic journey (Atria, Excellent PU, Kuvempu)
│   │   ├── Contact.jsx                     # Futuristic validated contact interface
│   │   ├── Footer.jsx                      # Brand summary, navigation, and tech stack
│   │   ├── CertificateModal.jsx            # Document preview and download modal
│   │   └── ProjectDetailModal.jsx          # Comprehensive MoodFlix architecture modal
│   ├── three/
│   │   ├── GalaxyBackground.jsx            # Procedural particle galaxy system
│   │   ├── Avatar3D.jsx                    # Stylized 3D character with pointer tracking
│   │   ├── HeroScene.jsx                   # Fullscreen R3F canvas wrapper
│   │   ├── LaptopShowcase.jsx              # Realistic 3D laptop with dynamic screen texture
│   │   └── FloatingObjects.jsx             # Orbiting wireframe polyhedra
│   ├── data/
│   │   └── portfolioData.js                # Centralized verified candidate dataset
│   ├── hooks/
│   │   └── useSmoothScroll.js              # Lenis smooth scrolling hook
│   ├── App.jsx                             # Main layout & modal controller
│   ├── index.css                           # Tailwind directives & futuristic design tokens
│   └── main.jsx                            # React 18 DOM mount point
├── vercel.json                             # Production routing & build configuration
├── vite.config.js                          # Vite bundler configuration & code splitting
└── tailwind.config.js                      # Custom color themes & keyframes
```

---

## 💻 Local Development & Build

### Prerequisites
Node.js 18+ and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory with vendor chunking (`three-vendor`, `anim-vendor`, `react-vendor`).

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Vercel Deployment Guide

1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete immersive 3D developer portfolio"
   git remote add origin https://github.com/Skandan45/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset: **Vite** (automatically detected via `vercel.json`).
5. Click **Deploy**. Your portfolio will be live worldwide on Vercel's Edge Network!

---

## 👤 Developer Profile

- **Name**: Skandan D Gowda
- **Degree**: Bachelor of Engineering (B.E.), Information Science & Engineering
- **Institution**: Atria Institute of Technology, Bengaluru
- **GitHub**: [github.com/Skandan45](https://github.com/Skandan45)
- **LinkedIn**: [linkedin.com/in/skandan-d-gowda-208b52401](https://linkedin.com/in/skandan-d-gowda-208b52401)
- **Email**: [skandangowda48@gmail.com](mailto:skandangowda48@gmail.com)
