import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPlans } from "@/lib/plans";
import { resolveProductUrl } from "@/lib/utils/url-resolutions";

export const metadata: Metadata = {
	title: "Products",
};

export default async function ProductsPage() {
	const plans = await getPlans();

	return (
		<>
			{/* Hero */}
			<section className="bg-[#1B273A] py-20 text-center">
				<div className="max-w-4xl mx-auto px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
					<p className="text-xl text-zinc-300 font-light">Choose the card that fits your lifestyle</p>
				</div>
			</section>

			{/* Product Listing */}
			<section className="py-20 bg-[#F4F4F4]">
				<div className="max-w-6xl mx-auto px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{plans.map((plan) => (
							<div key={plan.codename} className="bg-white rounded-2xl overflow-hidden flex flex-col">
								<div className="bg-zinc-50 flex items-center justify-center p-10">
									<Image
										src={plan.image}
										alt={plan.name}
										width={300}
										height={180}
										className="h-44 w-auto object-contain"
									/>
								</div>
								<div className="p-8 flex flex-col flex-1">
									<h2 className="text-xl font-bold text-[#1B273A] mb-1">{plan.name}</h2>
									<p className="text-2xl font-extrabold text-[#1B273A] mb-4">{plan.price}</p>
									<p className="text-sm text-[#414D63] leading-relaxed mb-8 flex-1">{plan.description}</p>
									<Link
										href={resolveProductUrl(plan.codename)}
										className="block text-center py-3 px-6 rounded bg-[#1B273A] text-white text-sm font-medium hover:bg-[#414D63] transition-colors"
									>
										Learn more
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
