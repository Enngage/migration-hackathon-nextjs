import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { plans } from "@/lib/plans";

type Props = {
	params: Promise<{ product: string }>;
};

export const generateStaticParams = () =>
	plans.map((plan) => ({ product: plan.codename }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { product } = await params;
	const plan = plans.find((p) => p.codename === product);

	if (!plan) {
		return { title: "Product Not Found" };
	}

	return { title: plan.name };
};

export default async function ProductPage({ params }: Props) {
	const { product } = await params;
	const plan = plans.find((p) => p.codename === product);

	if (!plan) {
		notFound();
	}

	return (
		<>
			{/* Hero */}
			<section className="bg-[#1B273A] py-20 text-center">
				<div className="max-w-4xl mx-auto px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{plan.name}</h1>
					<p className="text-xl text-zinc-300 font-light">{plan.description}</p>
				</div>
			</section>

			{/* Product Detail */}
			<section className="py-20 bg-[#F4F4F4]">
				<div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-start">
					<div className="flex-shrink-0">
						<img src={plan.image} alt={plan.name} className="h-64 object-contain" />
					</div>
					<div className="flex-1">
						<p className="text-3xl font-extrabold text-[#1B273A] mb-8">{plan.price}</p>
						<ul className="space-y-3">
							{plan.features.map((feature) => (
								<li key={feature} className="flex items-start gap-2">
									<span className="mt-1 shrink-0 text-[#414D63]">✓</span>
									<span className="text-sm text-[#414D63] leading-relaxed">{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
