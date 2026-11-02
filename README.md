# Ramnandan Kumar -- Software Engineer & Full Stack Developer Portfolio

A personal developer portfolio landing page for **Ramnandan Kumar** built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. It faithfully replicates the visual language and motion design of the 3D Creator reference:
- Dark theme (`#0C0C0C` background)
- Kanit font (Google Fonts, weights 300–900)
- Oversized gradient typography (`.hero-heading`)
- Rounded image compositions (`rounded-[40px]` to `rounded-[60px]`)
- Sticky stacking project cards with scroll-driven scale transforms
- Character-by-character scroll reveal text animation
- Mouse-following magnetic effect on the hero portrait

---

## 🚀 Running the Project

Inside the `ramnandankumar` directory:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
ramnandankumar/
├── public/
│   └── images/
│       ├── ramnandan-portrait.png
│       └── projects/
│           ├── smartdesk/
│           │   ├── customer-portal.png
│           │   ├── admin-dashboard.png
│           │   └── ai-assistant.png
│           ├── github-profile-analyzer/
│           │   ├── overview.png
│           │   ├── details.png
│           │   └── recommendations.png
│           └── happy-coder/
│               ├── video-thumbnail-1.png
│               ├── video-thumbnail-2.png
│               └── editing-workspace.png
├── src/
│   ├── components/
│   │   ├── AnimatedText.tsx         # Scroll-driven character-by-character reveal
│   │   ├── ContactButton.tsx        # Pill button with inset glow & white outline
│   │   ├── FadeIn.tsx               # Framer Motion whileInView wrapper
│   │   ├── ImageWithFallback.tsx   # Graceful image loader & fallback
│   │   ├── LiveProjectButton.tsx    # Ghost outline pill button
│   │   └── Magnet.tsx               # Magnetic cursor-following physics
│   ├── sections/
│   │   ├── HeroSection.tsx          # Full-height hero with Magnet portrait & navbar
│   │   ├── MarqueeSection.tsx       # 2-row horizontal scroll gallery (21 GIFs)
│   │   ├── AboutSection.tsx         # Bio with 4 3D corner assets & social links
│   │   ├── ServicesSection.tsx      # White contrast section with 5 focus areas
│   │   └── ProjectsSection.tsx      # 3 sticky-stacking interactive project cards
│   ├── App.tsx                      # Main container with overflow-x: clip
│   ├── index.css                    # Kanit font & gradient styles
│   └── main.tsx                     # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🎨 Sections Overview

1. **Hero Section**
   - Navbar with links to `About`, `What I Do`, `Projects`, and `mailto:ramnandankumaryadav7765@gmail.com`.
   - Massive heading `Hi, i'm Ramnandan` with `.hero-heading` gradient text.
   - Magnetic hero portrait at `public/images/ramnandan-portrait.png`.
   - Bottom bar with aspiring software engineer statement & gradient `Contact Me` pill button.

2. **Marquee Section**
   - 21 original motionsites.ai preview GIFs across 2 scroll-driven horizontal rows.
   - Row 1 moves right; Row 2 moves left based on scroll offset.

3. **About Section**
   - Four decorative 3D assets positioned in the corners with staggered fade-in animations.
   - Gradient heading `About me`.
   - Scroll-driven character opacity reveal for educational background and career focus.
   - Lucide React social links: GitHub, LinkedIn, LeetCode, and Instagram.

4. **What I Do (Services Section)**
   - High-contrast crisp white background with large rounded top corners.
   - 5 focus areas: DSA & Problem Solving, Frontend Development, Backend & Full Stack, AI-Powered Applications, and Content Creation.

5. **Project Section**
   - 3 sticky-stacking interactive cards that scale down dynamically (`targetScale = 1 - (totalCards - 1 - index) * 0.03`).
   - Featured projects:
     1. **SmartDesk AI Customer Support** (Featured Full Stack + Gemini AI platform)
     2. **GitHub Profile Analyzer** (AI + Developer Tools exploration)
     3. **Happy Coder** (DSA & LeetCode Hinglish content initiative)
