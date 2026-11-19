# 🥤 Fizzi (Campa Soda) — 3D Interactive Website

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg?style=for-the-badge&logo=vercel)](https://campa-soda.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r167-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-8.17-blue?style=for-the-badge&logo=react)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)](https://greensock.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

An award-winning caliber, creative personal portfolio and landing page featuring **interactive 3D soda cans**, realistic lighting and reflections, smooth scroll-triggered animations, and headless CMS integration.

🔗 **Live Website:** [https://campa-soda.vercel.app](https://campa-soda.vercel.app)

---

## ✨ Features

- 🥫 **Interactive 3D Soda Can**: Realistic 3D soda can rendered with Three.js & React Three Fiber featuring dynamic materials, environment reflections, and floating animations.
- 🎬 **Smooth Scroll Animations**: Powered by GSAP ScrollTrigger for buttery-smooth scene transitions, can rotations, and text parallax effects.
- 🎨 **Dynamic Flavor Carousel**: Interactive flavor switcher with responsive color theme shifts.
- 📱 **Fully Responsive**: Optimized for desktops, tablets, and mobile devices using Tailwind CSS.
- ⚡ **Next.js 14 App Router**: Server-side rendering (SSR), optimized asset delivery, and instant page loads.
- 📝 **Prismic Headless CMS**: Modular slice-based content management for dynamic updates without code changes.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **3D & WebGL** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations** | [GSAP](https://greensock.com/gsap/) (ScrollTrigger, useGSAP) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Content Management** | [Prismic CMS](https://prismic.io/) & [Slice Machine](https://prismic.io/docs/slice-machine) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SomilSingh01/Campa-soda.git
   cd Campa-soda
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Prismic Slice Machine UI:** [http://localhost:9999](http://localhost:9999)

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
