import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
			},
			{
				protocol: "https",
				hostname: "marketing-site.templates.contentful.com",
			},
		],
	},
};

export default nextConfig;
