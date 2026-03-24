import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";
import { getMenu } from "@/lib/menu";
import { resolveHomeUrl } from "@/lib/utils/url-resolutions";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
	variable: "--font-red-hat-display",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Kontent.ai migration hackathon",
	description: "",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const menu = await getMenu();

	return (
		<html lang="en">
			<body className={`${redHatDisplay.variable} antialiased`}>
				<header className="sticky top-0 z-10 bg-white shadow-sm">
					<div className="max-w-6xl mx-auto flex items-center px-8 h-20">
						<Link href={resolveHomeUrl()} className="text-xl font-bold text-[#1B273A]">
							Coin
						</Link>
						<nav className="ml-auto flex items-center gap-8">
							{menu.mainItems.map((item) =>
								item.children ? (
									<div key={item.label} className="relative group">
										{item.href ? (
											<Link
												href={item.href}
												className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors"
											>
												{item.label}
											</Link>
										) : (
											<span className="text-sm font-medium text-[#414D63] group-hover:text-[#1B273A] transition-colors cursor-default select-none">
												{item.label}
											</span>
										)}
										<div className="absolute top-full left-0 pt-2 hidden group-hover:block z-20">
											<div className="bg-white shadow-lg rounded-lg py-1 min-w-36">
												{item.children.map((child) => (
													<Link
														key={child.href}
														href={child.href}
														className="block px-4 py-2 text-sm text-[#414D63] hover:text-[#1B273A] hover:bg-zinc-50 transition-colors"
													>
														{child.label}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									<Link
										key={item.label}
										href={item.href ?? "/"}
										className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors"
									>
										{item.label}
									</Link>
								),
							)}
						</nav>
					</div>
				</header>
				<main>{children}</main>
				<footer className="bg-[#212121] text-white">
					<div className="max-w-6xl mx-auto px-8 pt-10 pb-16">
						<div className="grid grid-cols-3 gap-8 mb-10">
							{menu.footerSections.map((section) => (
								<div key={section.title}>
									<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">{section.title}</h3>
									<ul className="space-y-2">
										{section.items.map((item) => (
											<li key={item.href}>
												<Link href={item.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className="border-t border-zinc-700 pt-6 text-sm text-zinc-500">
							&copy; Copyright {new Date().getFullYear()}
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
