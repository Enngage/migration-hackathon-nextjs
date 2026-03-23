import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${redHatDisplay.variable} font-[family-name:var(--font-red-hat-display)] antialiased`}>
				<header className="sticky top-0 z-10 bg-white shadow-sm">
					<div className="max-w-6xl mx-auto flex items-center px-8 h-20">
						<Link href="/" className="text-xl font-bold text-[#1B273A]">Coin</Link>
						<nav className="ml-auto flex items-center gap-8">
							<Link href="/products" className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors">Products</Link>
							<Link href="/pricing" className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors">Pricing</Link>
							<Link href="/about-us" className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors">About Us</Link>
						</nav>
					</div>
				</header>
				<main>{children}</main>
				<footer className="bg-[#212121] text-white">
					<div className="max-w-6xl mx-auto px-8 pt-10 pb-16">
						<div className="grid grid-cols-3 gap-8 mb-10">
							<div>
								<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">Products</h3>
								<ul className="space-y-2">
									<li><Link href="/products" className="text-sm text-zinc-300 hover:text-white transition-colors">Classic</Link></li>
									<li><Link href="/products" className="text-sm text-zinc-300 hover:text-white transition-colors">Black</Link></li>
									<li><Link href="/products" className="text-sm text-zinc-300 hover:text-white transition-colors">Corporate</Link></li>
									<li><Link href="/pricing" className="text-sm text-zinc-300 hover:text-white transition-colors">Pricing</Link></li>
								</ul>
							</div>
							<div>
								<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">Customers</h3>
								<ul className="space-y-2">
									<li><Link href="/about-us" className="text-sm text-zinc-300 hover:text-white transition-colors">About us</Link></li>
								</ul>
							</div>
							<div>
								<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">Company</h3>
								<ul className="space-y-2">
									<li><Link href="/about-us" className="text-sm text-zinc-300 hover:text-white transition-colors">About us</Link></li>
								</ul>
							</div>
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
