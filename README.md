## Getting Started

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Run 

```bash
npm run deploy:preview
npm run deploy:prod
```

# Hosted MCP server

This repository also hosts `@kontent-ai/mcp-server"` under 

localhost: ```http://localhost:3000/api/mcp```
deployed: ```https://migration-hackaton-nextjs.vercel.app/api/mcp```

# Running MCP inspector

```bash
npx @modelcontextprotocol/inspector@latest http://localhost:3000 undefined
```