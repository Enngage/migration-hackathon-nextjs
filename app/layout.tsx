import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Link from "next/link";
import { getPlans } from "@/lib/plans";
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
	const plans = await getPlans();

	return (
		<html lang="en">
			<body className={`${redHatDisplay.variable} font-[family-name:var(--font-red-hat-display)] antialiased`}>
				<header className="sticky top-0 z-10 bg-white shadow-sm">
					<div className="max-w-6xl mx-auto flex items-center px-8 h-20">
						<Link href="/" className="text-xl font-bold text-[#1B273A]">
							Coin
						</Link>
						<nav className="ml-auto flex items-center gap-8">
							<div className="relative group">
								<span className="text-sm font-medium text-[#414D63] group-hover:text-[#1B273A] transition-colors cursor-default select-none">
									Products
								</span>
								<div className="absolute top-full left-0 pt-2 hidden group-hover:block z-20">
									<div className="bg-white shadow-lg rounded-lg py-1 min-w-36">
										<Link
											href="/products/classic"
											className="block px-4 py-2 text-sm text-[#414D63] hover:text-[#1B273A] hover:bg-zinc-50 transition-colors"
										>
											Classic
										</Link>
										<Link
											href="/products/black"
											className="block px-4 py-2 text-sm text-[#414D63] hover:text-[#1B273A] hover:bg-zinc-50 transition-colors"
										>
											Black
										</Link>
										<Link
											href="/products/corporate"
											className="block px-4 py-2 text-sm text-[#414D63] hover:text-[#1B273A] hover:bg-zinc-50 transition-colors"
										>
											Corporate
										</Link>
									</div>
								</div>
							</div>
							<Link href="/pricing" className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors">
								Pricing
							</Link>
							<Link href="/about-us" className="text-sm font-medium text-[#414D63] hover:text-[#1B273A] transition-colors">
								About Us
							</Link>
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
									{plans.map((plan) => (
										<li key={plan.codename}>
											<Link
												href={`/products/${plan.codename}`}
												className="text-sm text-zinc-300 hover:text-white transition-colors"
											>
												{plan.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">Customers</h3>
								<ul className="space-y-2">
									<li>
										<Link href="/pricing" className="text-sm text-zinc-300 hover:text-white transition-colors">
											Pricing
										</Link>
									</li>
									<li>
										<Link href="/about-us" className="text-sm text-zinc-300 hover:text-white transition-colors">
											About us
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-xs font-semibold mb-4 text-zinc-400 uppercase tracking-wider">Company</h3>
								<ul className="space-y-2">
									<li>
										<Link href="/" className="text-sm text-zinc-300 hover:text-white transition-colors">
											Home
										</Link>
									</li>
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
