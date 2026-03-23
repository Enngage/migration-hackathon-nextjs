import type { Metadata } from "next";
import { ShieldCheck, Smartphone, Headphones, BarChart2, PieChart, SlidersHorizontal, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
	title: "Pricing",
};

type Plan = {
	readonly name: string;
	readonly price: string;
	readonly description: string;
	readonly features: readonly string[];
	readonly image: string;
	readonly highlighted?: boolean;
};

const plans: readonly Plan[] = [
	{
		name: "Coin Classic",
		price: "€7.99/Month",
		description: "Stay on top of your finances and get personalized tips based on your spending patterns.",
		image: "https://images.ctfassets.net/vw5be3ki3sdd/3tfemZitZGCb42qEfO1ipW/f1bc2b759940184c9553fa5a53719033/classic.png?q=60&w=768",
		features: [
			"Free IBAN account with a €100,000 deposit insurance guarantee",
			"Free, instant money transfers within the Coin network",
			"Currency conversion at the interbank exchange rate",
			"Receive personalized offers and discounts from Coin partners",
			"Contactless credit card, choose from five colorful designs",
			"Up to €500/month free ATM withdrawals in the EU and N.America",
		],
	},
	{
		name: "Coin Black",
		price: "€14.99/Month",
		description: "Enjoy free miles, partner discounts, comprehensive insurance and unique travel perks.",
		highlighted: true,
		image: "https://images.ctfassets.net/vw5be3ki3sdd/4s8qZjpP5qBvxgMwSlqPLr/165217ed623672c1438797b6109515fc/black.png?q=60&w=768",
		features: [
			"Free IBAN account with a €100,000 deposit insurance guarantee",
			"Free, instant money transfers within the Coin network",
			"Currency conversion at the interbank exchange rate",
			"Receive personalized offers and discounts from Coin partners",
			"Contactless credit card in premium, black finish",
			"Up to €2,000/month free ATM withdrawals in the EU and N.America",
			"Free airport lounge passes within the EU and select international destinations",
			"Disposable virtual cards for online shopping",
			"Medical, flight, and luggage delay insurance coverage",
			"2% cashback on all purchases in the home country",
		],
	},
	{
		name: "Coin Corporate",
		price: "€27.99/Month",
		description: "Set spending limits, enjoy generous cashbacks, comprehensive insurance, and dedicated 24/7 support.",
		image: "https://images.ctfassets.net/vw5be3ki3sdd/1fxfVEQ1lvTsLb0NE0QnHm/2a3f62cb2b5e601cda5357a00d27bd83/corporate.png?q=60&w=768",
		features: [
			"Free IBAN account with a €100,000 deposit insurance guarantee",
			"Free, instant money transfers within the Coin network",
			"Currency conversion at the interbank exchange rate",
			"Receive personalized offers and discounts from Coin partners",
			"Contactless credit card, choose from five metallic designs",
			"Unlimited free ATM withdrawals in the EU and worldwide",
			"Free airport lounge passes within the EU and select international destinations",
			"Disposable virtual cards for online shopping",
			"Medical, flight, and luggage delay insurance coverage",
			"2% cashback on all purchases worldwide",
			"Car rental insurance coverage while traveling on business",
			"Business mobile phone theft and damage cover",
			"24/7 phone assistance with payments, insurance claims, and travel bookings",
		],
	},
] as const;

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

export default function PricingPage() {
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
									<img src={plan.image} alt={plan.name} className="h-32 object-contain mb-6" />
									<h2 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-[#1B273A]"}`}>{plan.name}</h2>
									<p className={`text-3xl font-extrabold mb-4 ${plan.highlighted ? "text-white" : "text-[#1B273A]"}`}>{plan.price}</p>
									<p className={`text-sm leading-relaxed ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}>{plan.description}</p>
								</div>
								<ul className="space-y-3 mb-8 flex-1">
									{plan.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2">
											<span className={`mt-1 shrink-0 text-sm ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}>✓</span>
											<span className={`text-sm leading-relaxed ${plan.highlighted ? "text-zinc-300" : "text-[#414D63]"}`}>{feature}</span>
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
