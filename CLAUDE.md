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

This is a **Next.js App Router** application.

### Environment Variables

Required in `.env.local` (see `env.template`):
- `VERCEL_OIDC_TOKEN` — Used for Vercel deployments

## Tooling

- **Formatter/Linter**: Biome (primary) + ESLint. Biome is configured as the default VS Code formatter and runs on save. Line width: 140, indent: 4 spaces (tabs).
- **TypeScript**: Strict mode, path alias `@/*` maps to the repo root.
- **Tailwind CSS 4**: Via `@tailwindcss/postcss` PostCSS plugin.
- **Kontent.ai type declarations**: `kontent-mcp.d.ts` declares TypeScript types for all MCP tool modules from `@kontent-ai/mcp-server/build/tools/`.
