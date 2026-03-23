# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i && npm run dev        # Install dependencies and start dev server
npm run build               # Lint then build for production
npm run lint                # Run Biome check + ESLint
npm run biome:fix           # Auto-fix Biome issues
npm run biome:fix:unsafe    # Auto-fix including unsafe transformations
npm run deploy:preview      # Deploy preview to Vercel
npm run deploy:prod         # Deploy to production on Vercel
```

## Architecture

This is a **Next.js App Router** application. All routing, layouts, and pages use the `app/` directory conventions (Server Components by default, `"use client"` only when needed for interactivity or browser APIs).

### Environment Variables

Required in `.env.local` (see `env.template`):
- `VERCEL_OIDC_TOKEN` — Used for Vercel deployments

## Code Style

Prefer a functional approach:
- Use `const` by default; avoid `let` unless mutation is truly necessary.
- Avoid mutating objects/arrays — use spread, `map`, `filter`, `reduce` instead.
- Keep functions small and single-purpose.
- Prefer pure functions with explicit inputs/outputs over side effects.
- Favour composition of small functions over large monolithic ones.

## Tooling

- **Formatter/Linter**: Biome (primary) + ESLint. Biome is configured as the default VS Code formatter and runs on save. Line width: 140, indent: 4 spaces (tabs).
- **TypeScript**: Strict mode, path alias `@/*` maps to the repo root. Do not include `.ts` or `.tsx` extensions in import paths — `allowImportingTsExtensions` is not enabled and the build will fail. Biome's `useImportExtensions` rule is disabled for this reason.
- **Tailwind CSS 4**: Via `@tailwindcss/postcss` PostCSS plugin.
