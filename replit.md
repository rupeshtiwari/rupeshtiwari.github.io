# Rupesh Tiwari Portfolio

## Overview

This is a personal portfolio and blog website for Rupesh Tiwari, a Tech Strategy Leader at AWS and founder of FullstackMaster.net. The application showcases professional credentials, coaching services, testimonials, and technical content. It serves as both a personal brand website and a lead generation platform for coaching and training services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Fonts**: Inter (body) and Space Grotesk (display/headings)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development Server**: Vite dev server with HMR proxied through Express

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage` class) as default
- **Database Ready**: PostgreSQL configuration present in `drizzle.config.ts`, requires `DATABASE_URL` environment variable

### Build System
- **Frontend Build**: Vite bundler outputs to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.cjs`
- **Shared Code**: `shared/` directory contains code used by both client and server (schemas, types)

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (hero, about, testimonials, etc.)
    pages/        # Route pages (home, blog, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API route definitions
  storage.ts      # Data access layer interface
  static.ts       # Static file serving for production
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
```

## External Dependencies

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-styled component library built on Radix
- **Lucide React**: Icon library

### Database
- **PostgreSQL**: Primary database (requires provisioning)
- **Drizzle ORM**: Type-safe database queries
- **drizzle-zod**: Schema validation integration

### Development Tools
- **Vite**: Frontend dev server and bundler
- **esbuild**: Backend bundler for production
- **TypeScript**: Type checking across the codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)

### Session Management
- **connect-pg-simple**: PostgreSQL session store (available but not currently active)
- **express-session**: Session middleware (available in dependencies)

## Recent Changes (Dec 13, 2025)

### New Lead Generation Features
- **Lead Magnet Section**: Free PDF download ("FAANG Interview Blueprint") with email capture
- **Newsletter Signup**: Weekly interview tips email subscription
- **Client Results Section**: Before/after salary comparisons with real numbers ($145K → $420K etc.)
- **YouTube Section**: Embedded videos from FullStackMaster channel
- **Pricing Page**: Clear USD pricing with 3 tiers ($199, $699, $1299)

### API Endpoints
- `POST /api/leads` - Captures email leads (source: lead_magnet or newsletter)
- `GET /api/leads` - Retrieves all captured leads

### Database Schema
- `leads` table: id, email, source, createdAt

### Pages
- `/` - Home page with all sections
- `/pricing` - Dedicated pricing page
- `/blog` - Blog redirect
- `/privacy` - Privacy policy

### Deployment
- Deployed to GitHub Pages: www.rupeshtiwari.com
- Deployment script: `npx tsx scripts/deploy-to-github.ts`