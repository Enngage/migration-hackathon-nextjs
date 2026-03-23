import { BarChart2, Headphones, type LucideIcon, PieChart, ShieldCheck, SlidersHorizontal, Smartphone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPlans } from "@/lib/plans";
import { resolveProductUrl } from "@/lib/utils/url-resolutions";

export const metadata: Metadata = {
	title: "Pricing",
};

type IncludedFeature = {
	readonly title: string;
	readonly description: string;
	readonly icon: LucideIcon;
};

const includedFeatures: readonly IncludedFeature[] = [
	{
		title: "Secure Login",
		description: "Single-device use, biometric login and optional two-factor authentication (2FA) prevents unauthorized access.",
		icon: ShieldCheck,
	},
	{
		title: "Mobile wallet",
		description: "Compatible with ApplePay and GooglePay.",
		icon: Smartphone,
	},
	{
		title: "24/7 support",
		description: "In-app support available in five languages.",
		icon: Headphones,
	},
	{
		title: "Real-time balance",
		description: "Up-to-date account visibility with notifications.",
		icon: BarChart2,
	},
	{
		title: "Built-in budgeting",
		description: "Expense categorization and savings goal assistance.",
		icon: PieChart,
	},
	{
		title: "Full control",
		description: "PIN changes, card locks, and spending limit management.",
		icon: SlidersHorizontal,
	},
];

export default async function PricingPage() {
	const plans = await getPlans();

	return (
		<>
			{/* Hero */}
			<section className="bg-[#1B273A] py-20 text-center">
				<div className="max-w-4xl mx-auto px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Credit Card Just Got Upgraded</h1>
					<p className="text-xl text-zinc-300 font-light">Open a free account and apply for a card online.</p>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="py-20 bg-[#F4F4F4]">
				<div className="max-w-6xl mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
						{plans.map((plan) => (
							<div
								key={plan.name}
								className={`rounded-2xl p-8 flex flex-col h-full ${plan.highlighted ? "bg-[#1B273A] text-white shadow-xl" : "bg-white text-[#1B273A]"}`}
							>
								<div className="mb-6">
									<Image
										src={plan.image}
										alt={plan.name}
										width={300}
										height={128}
										className="h-32 w-auto object-contain mb-6"
									/>
									<h2 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-[#1B273A]"}`}>
										{plan.name}
									</h2>
									<p className={`text-3xl font-extrabold mb-4 ${plan.highlighted ? "text-white" : "text-[#1B273A]"}`}>
										{plan.price}
									</p>
									<p className={`text-sm leading-relaxed ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}>
										{plan.description}
									</p>
								</div>
								<Link
									href={resolveProductUrl(plan.codename)}
									className={`block text-center py-3 px-6 rounded font-medium text-sm transition-colors mb-6 ${plan.highlighted ? "bg-white text-[#1B273A] hover:bg-zinc-100" : "bg-[#1B273A] text-white hover:bg-[#414D63]"}`}
								>
									Learn more
								</Link>
								<ul className="space-y-3 mb-8 flex-1">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2">
											<span
												className={`mt-1 shrink-0 text-sm ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}
											>
												✓
											</span>
											<span
												className={`text-sm leading-relaxed ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}
											>
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Included in All Plans */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-8">
					<h2 className="text-3xl font-bold text-[#1B273A] mb-12 text-center">Included in All Plans</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{includedFeatures.map((feature) => (
							<div key={feature.title}>
								<feature.icon className="w-8 h-8 text-[#1B273A] mb-3" />
								<h3 className="text-lg font-semibold text-[#1B273A] mb-2">{feature.title}</h3>
								<p className="text-sm text-[#414D63] leading-relaxed">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
