# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with SvelteKit 2.27, TypeScript 5.9, and Tailwind CSS 4.1. The site uses file-based routing and follows SvelteKit conventions.

## Essential Commands

```bash
# Development
pnpm dev        # Start development server at localhost:5173

# Build & Preview
pnpm build      # Build for production
pnpm preview    # Preview production build locally

# Code Quality
pnpm check      # Run svelte-check for type checking
pnpm format     # Format code with Prettier
pnpm lint       # Run Prettier check

# Testing
pnpm test       # Run Vitest tests
```

## Architecture

**Tech Stack:**

- SvelteKit 2.27.1 with TypeScript 5.9.2
- Svelte 5.37.3 (latest v5)
- Tailwind CSS 4.1.11 for styling
- Vite 7.0.6 as build tool
- Vitest 3.2.4 for testing

**Project Structure:**

- `src/routes/` - File-based routing pages
- `src/lib/` - Reusable components and utilities
- `src/app.html` - HTML template
- `src/app.css` - Global styles with Tailwind imports
- `static/` - Static assets served directly

**Key Conventions:**

- Routes are defined by file structure in `src/routes/`
- `+page.svelte` files define page components
- `+layout.svelte` files define layouts
- TypeScript is used throughout
- Tailwind utility classes for styling

## Development Workflow

1. **Making UI Changes:** Edit `.svelte` files in `src/routes/` or create components in `src/lib/`
2. **Styling:** Use Tailwind CSS utilities directly in components
3. **Type Safety:** TypeScript checks run automatically via `pnpm check`
4. **Code Style:** Run `pnpm format` before committing (uses tabs, single quotes, 100 char width)

## Important Configuration

- **Prettier:** Configured with Svelte and Tailwind plugins, uses tabs and single quotes
- **TypeScript:** Strict mode enabled, extends SvelteKit defaults
- **Tailwind:** Custom Inter font family configured
- **Package Manager:** Uses pnpm (not npm or yarn)
