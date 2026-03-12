import { registerTool as registerGetItemMapiTool } from "@kontent-ai/mcp-server/build/tools/get-item-mapi.js";
import { createMcpHandler } from "mcp-handler";

export const runtime = "nodejs";

const handler = createMcpHandler(
	(server) => {
		registerGetItemMapiTool(server);
	},
	{},
	{ basePath: "/api" },
);

export { handler as GET, handler as POST, handler as DELETE };
