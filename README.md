# 🌌 Skandan D Gowda — Immersive 3D Developer Portfolio

A futuristic, cinematic personal portfolio designed and engineered for **Skandan D Gowda**, Third-Year Engineering Student (Information Science & Engineering) at **Atria Institute of Technology**, Bengaluru.

Inspired by Awwwards websites, modern creative developer portfolios, and high-performance interactive 3D WebGL experiences.

---

## 🚀 Key Highlights & 3D Interactive Features

1. **Main 3D Galaxy Environment (`Three.js` & `@react-three/fiber`)**:
   - Over 6,000 procedural cosmic particles mapped into 4 logarithmic spiral galactic arms.
   - Cinematic three-point studio lighting with electric blue (`#2563EB`), cyan (`#22D3EE`), and neon purple (`#8B5CF6`).
   - Deep background starfield of 2,200 twinkling stars and volumetric nebula dust.
   - Real-time mouse parallax, camera perspective tracking, and depth fields.

2. **Stylized 3D Animated Developer Character (`Avatar3D.jsx`)**:
   - Modern futuristic tech-wear blazer with glowing cyan/purple trim and collar accents.
   - Natural sinusoidal idle breathing and posture sway.
   - Head and gaze tracking responding smoothly to pointer coordinates.
   - Dual holographic orbiting rings with real-time rotational physics.
   - Seamless interactive toggle with Skandan's verified authentic photograph in a biometric HUD card.

3. **Interactive 3D Hardware Showcase (`LaptopShowcase.jsx`)**:
   - Precision 3D laptop chassis rendered with Three.js aluminum shaders, glowing keyboard deck, trackpad, and chamfered LEDs.
   - Screen displays authentic high-resolution screenshots of the primary featured project: **MoodFlix (Mood-Based Movie Recommendation System)**.
   - Dynamic 5-screenshot texture switcher allowing live inspection of the landing page, dashboard NLP workspace, system architecture, catalog, and overview.

4. **3D Tilted Glassmorphism Certificate Gallery (`Certifications.jsx`)**:
   - Floating 3D certificate cards that dynamically tilt on the X/Y axes according to cursor position.
   - Full modal viewer with PDF embed and high-res image previews for all 5 verified credentials:
     - *What Is Generative AI?* — LinkedIn Learning (27 August 2026)
     - *Cybersecurity Analyst Job Simulation* — Tata / Forage (17 August 2026)
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
│   │   ├── profile.png                     # Authentic formal profile photograph
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
│   │   ├── Galaxy.jsx                      # Procedural spiral particle galaxy system
│   │   ├── Avatar3D.jsx                    # Stylized 3D character with pointer tracking
│   │   ├── HeroScene.jsx                   # Fullscreen R3F canvas wrapper
│   │   ├── LaptopShowcase.jsx              # Realistic 3D laptop with dynamic screen texture
│   │   └── FloatingObjects.jsx             # Orbiting wireframe polyhedra
│   ├── data/
│   │   └── portfolioData.js                # Single source of truth for portfolio data
│   ├── hooks/
│   │   └── useSmoothScroll.js              # Lenis smooth scroll hook
│   ├── App.jsx                             # Main layout & modal controller
│   ├── main.jsx                            # React 18 DOM root
│   └── index.css                           # Tailwind directives & futuristic design styles
├── index.html                              # Root HTML with Google Fonts & metadata
├── tailwind.config.js                      # Custom futuristic colors, fonts & shadows
├── vite.config.js                          # Vite build pipeline with chunk splitting
├── vercel.json                             # Vercel deployment configuration
└── package.json                            # Project dependencies & scripts
```

---

## 💻 Local Development & Build

```bash
# Navigate to the project directory
cd skandan-portfolio-3d

# Start the development server
npm run dev

# Compile optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment on Vercel

The project is preconfigured with `vercel.json` for seamless deployment on Vercel:

1. Push the code to a GitHub repository (`skandan-portfolio-3d`).
2. Import the repository into the **Vercel Dashboard**.
3. Framework preset: **Vite** (auto-detected).
4. Output directory: `dist`.
5. Click **Deploy**.
