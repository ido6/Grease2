# Grease Shoes - Online Boutique

חנות בוטיק לנעלי נשים מעוצבות ותיקים

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Features

- 🛍️ Product catalog with shoes and bags
- 🔍 Advanced filtering and search
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🇮🇱 RTL (Right-to-Left) layout for Hebrew
- 🎨 Modern and elegant UI design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Grease2
```

2. Install dependencies:
```bash
npm install
```

3. Copy photos to public directory:
```bash
npm run copy-all-photos
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed!

Alternatively, use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
Grease2/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── shoes/             # Shoes catalog
│   ├── bags/              # Bags catalog
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   ├── MobileNav.tsx     # Mobile navigation
│   └── FilterSheet.tsx   # Filter panel
├── lib/                   # Utilities and data
│   └── data.ts           # Product data
├── Photos/               # Source images
├── public/               # Static assets
│   └── Photos/          # Deployed images
└── package.json         # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run copy-all-photos` - Copy photos to public directory

## License

All rights reserved © 2024 Grease Shoes

