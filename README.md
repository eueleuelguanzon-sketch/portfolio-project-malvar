# My Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Smooth Navigation**: Sticky header with smooth scroll to sections
- **Interactive Components**: Contact form with validation, mobile hamburger menu
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist (Sans & Mono)

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Main page integrating all sections
│   └── globals.css     # Global styles
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # Sticky header with mobile menu
│   │   │   ├── Footer.tsx    # Footer with social links
│   │   │   └── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Landing section
│   │   │   ├── About.tsx     # About me with skills
│   │   │   ├── Projects.tsx # Projects grid
│   │   │   └── Contact.tsx   # Contact form
│   │   └── ui/
│   │       ├── Button.tsx    # Reusable button component
│   │       └── Card.tsx      # Project card component
│   └── lib/
│       └── types.ts         # TypeScript interfaces
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Click "Deploy"

## Component Architecture

### UI Components

- **Button**: Reusable button with variants (primary, secondary, outline), uses `'use client'` for interactivity
- **Card**: Project display card showing image, title, description, technologies, and action buttons

### Layout Components

- **Header**: Fixed/sticky navigation with responsive mobile hamburger menu, scroll detection
- **Footer**: Social links, navigation, contact email

### Section Components

- **Hero**: Full-height landing with name, title, tagline, and CTAs
- **About**: Personal intro, skills grid, experience timeline, education
- **Projects**: Grid of project cards using the Card component
- **Contact**: Form with validation, success state, contact info

## Customization

### Update Personal Information

Edit the following files to customize:

- **Name/Title**: `src/components/sections/Hero.tsx`
- **About Content**: `src/components/sections/About.tsx`
- **Projects**: `src/components/sections/Projects.tsx`
- **Contact Info**: `src/components/sections/Contact.tsx`

### Add New Projects

Add project objects to the `projects` array in `Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 4,
    title: 'New Project',
    description: 'Description here',
    technologies: ['React', 'Node.js'],
    imageUrl: '/path/to/image.jpg',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
```

## License

MIT
