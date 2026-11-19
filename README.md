# Campa Soda (3D Website)

An interactive 3D landing page built with Next.js 14, Three.js, and GSAP. It features a 3D soda can model with realistic lighting, scroll-based animations, dynamic flavor switching, and Prismic CMS integration.

Live Demo: https://campa-soda.vercel.app

## Tech Stack

- Framework: Next.js 14 (App Router), React 18, TypeScript
- 3D / WebGL: Three.js, @react-three/fiber, @react-three/drei
- Animations: GSAP (ScrollTrigger, @gsap/react)
- Styling: Tailwind CSS
- CMS: Prismic (Slice Machine)
- State: Zustand
- Deployment: Vercel

## Features

- 3D soda can model rendered in WebGL with custom environment reflections and floating physics
- ScrollTrigger timelines synced to user scrolling
- Interactive flavor carousel with dynamic theme transitions
- Slice-based architecture using Prismic CMS for modular content blocks
- Fully responsive across desktop, tablet, and mobile

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SomilSingh01/Campa-soda.git
   cd Campa-soda
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open http://localhost:3000 in your browser to view the site.  
Prismic Slice Machine runs on http://localhost:9999.

## Production Build

To build the project for production:

```bash
npm run build
npm run start
```

## License

MIT
