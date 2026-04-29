# Component Architecture Documentation

## Overview

This portfolio is built using Next.js 14 with the App Router, TypeScript, and Tailwind CSS. The architecture follows a modular, component-based approach for maintainability and reusability.

## Architecture Decisions

### 1. Directory Structure

```
src/
├── components/
│   ├── layout/     # Layout components (Header, Footer, Navigation)
│   ├── sections/   # Page sections (Hero, About, Projects, Contact)
│   └── ui/        # Reusable UI components (Button, Card)
└── lib/
    └── types.ts   # TypeScript type definitions
```

**Rationale**: 
- Separates concerns by grouping components by their role
- Makes it easy to find and modify specific component types
- Follows industry best practices for Next.js projects

### 2. Client vs Server Components

**Client Components** (use `'use client'`):
- `Button.tsx` - Has event handlers (onClick)
- `Card.tsx` - Uses Button which has interactivity
- `Header.tsx` - Has state (isOpen, isScrolled) and scroll listener
- `Hero.tsx` - Has onClick handlers for navigation
- `Contact.tsx` - Has form state and validation logic
- `Navigation.tsx` - Navigation items component

**Server Components**:
- `Footer.tsx` - Static content, no interactivity needed
- `About.tsx` - Static content with data arrays
- `Projects.tsx` - Static data rendering

**Rationale**:
- Next.js App Router defaults to Server Components for better performance
- Only add `'use client'` when necessary (event handlers, hooks, browser APIs)
- This optimizes initial page load and SEO

### 3. TypeScript Interfaces

Located in `src/lib/types.ts`:

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

**Rationale**:
- Centralized type definitions ensure consistency
- Optional properties (?, e.g., `githubUrl?`) allow flexibility
- Easy to extend when adding new features

### 4. Component Patterns

#### Button Component
- Accepts `variant` prop for styling variants (primary, secondary, outline)
- Uses TypeScript interface for type safety
- Applies Tailwind classes conditionally based on variant
- Includes disabled state handling

#### Card Component
- Takes `Project` type as prop
- Renders project image (or placeholder)
- Displays technology badges using map
- Includes conditional rendering for GitHub/Live Demo buttons

#### Header Component
- Fixed position with scroll detection
- Mobile hamburger menu with state toggle
- Responsive design (hidden nav on mobile, visible on desktop)
- Smooth scroll to sections via anchor links

#### Contact Form
- Controlled components with useState
- Real-time validation with error messages
- Success state after submission
- Accessible form labels and ARIA attributes

### 5. Data Flow

```
app/page.tsx (Server Component)
    ↓ imports
├── Hero.tsx (Client)
├── About.tsx (Server)
├── Projects.tsx (Server) → Card.tsx (Client) → Button.tsx (Client)
└── Contact.tsx (Client) → Button.tsx (Client)
```

**Rationale**:
- Page is a Server Component for SEO
- Sections can be client components when needed
- Data flows top-down through props
- Shared components (Button, Card) are reused across sections

### 6. Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first with breakpoints (md:, lg:)
- **Consistent spacing**: Using container, mx-auto, px-4
- **Color scheme**: Blue primary, gray secondary

**Rationale**:
- Tailwind enables rapid development
- Utility classes reduce CSS file size
- Mobile-first approach ensures responsiveness

### 7. Navigation Strategy

- Sticky header with smooth scroll
- Anchor links (#about, #projects, etc.)
- Mobile menu collapses into hamburger
- Clicking links closes mobile menu

**Rationale**:
- Single-page application feel
- Smooth user experience
- Proper scroll behavior with offset for fixed header

## Performance Considerations

1. **Static Generation**: All pages are statically generated
2. **Client Components**: Minimized to only necessary components
3. **Image Optimization**: Next.js Image component ready (when images added)
4. **Font Optimization**: Google Fonts loaded via next/font

## Future Enhancements

- Add actual project images
- Implement form submission to backend/API
- Add loading states
- Add animations with Framer Motion
- Add dark mode toggle
- Add blog section