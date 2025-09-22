# Overview

This is a full-stack web application built with React and Express that appears to be designed for email subscription management. The application features a modern landing page with email newsletter signup functionality. It uses TypeScript throughout, implements a clean component architecture with shadcn/ui components, and provides a robust backend API for handling subscription operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using **TypeScript** and follows a modern component-based architecture:

- **Build System**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives

The frontend follows a clean directory structure with components organized in `/client/src/` and uses path aliases for clean imports (`@/` for client source, `@shared/` for shared code).

## Backend Architecture

The backend uses **Express.js** with **TypeScript** and implements a RESTful API design:

- **Framework**: Express.js with custom middleware for logging and error handling
- **Data Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Validation**: Zod schemas for request/response validation shared between client and server
- **Development**: Hot reloading with tsx, production builds with esbuild

The server implements a clean separation of concerns with routes, storage abstraction, and shared schema definitions.

## Data Storage Solutions

The application uses a **Drizzle ORM** setup configured for **PostgreSQL**:

- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definitions in `/shared/schema.ts`
- **Database**: Neon serverless PostgreSQL (configured but using in-memory storage currently)
- **Migrations**: Drizzle-kit for database migrations in `/migrations` directory

The storage layer is abstracted through an `IStorage` interface, making it easy to switch between implementations (currently using in-memory storage with plans for PostgreSQL).

## Authentication and Authorization

Currently, the application does not implement authentication. The email subscription system operates without user accounts, focusing on collecting newsletter signups with email validation.

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database service (configured via `@neondatabase/serverless`)
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL

## UI and Design System
- **shadcn/ui**: Complete UI component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography

## Development and Build Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Type safety across the entire application
- **Replit Plugins**: Development environment integration (`@replit/vite-plugin-*`)

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation shared between client and server
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **Wouter**: Minimalist routing library for React

## Utilities
- **date-fns**: Date manipulation and formatting utilities
- **clsx + tailwind-merge**: Conditional className utilities
- **nanoid**: Unique ID generation for development logging