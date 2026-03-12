/** @type {import('next').NextConfig} */
const nextConfig = {
	// Let Node.js load these libraries instead of Turbopack trying to bundle them,
	// which avoids the `<dynamic>` resolution error coming from mysql.pub.js.
	serverExternalPackages: ["applicationinsights", "diagnostic-channel-publishers"],
	turbo: {
		resolveAlias: {
			applicationinsights: false,
			"diagnostic-channel-publishers": false,
		},
	},
};

export default nextConfig;
