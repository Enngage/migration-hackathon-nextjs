export default function Home() {
	return (
		<>
			{/* Hero */}
			<section
				className="relative min-h-[calc(100vh-5rem)] flex items-center bg-cover bg-center"
				style={{ backgroundImage: "url('https://images.ctfassets.net/zaag2ctpa60k/gJArMceFvS7Jd3pjvVfdO/7c56382bb6fa0d4630df470c00dc271f/AdobeStockoriginal_507755457.jpg')" }}
			>
				<div className="max-w-6xl mx-auto px-8 py-24 w-full">
					<div className="max-w-lg">
						<h1 className="text-4xl md:text-5xl font-extrabold text-[#1B273A] leading-tight mb-6">
							We wanted banking to be simple. So we rebuilt it from the ground up.
						</h1>
						<p className="text-xl text-[#414D63] font-light leading-relaxed mb-8">
							Coin cards offer great rates, personalized services, and exclusive perks helping you manage your money with confidence.
						</p>
					</div>
				</div>
			</section>

			{/* Feature 1 - Travel */}
			<section className="bg-white py-24">
				<div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					<div className="h-80 rounded-2xl overflow-hidden order-2 md:order-1">
						<img
							src="https://marketing-site.templates.contentful.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw5be3ki3sdd%2F55W3agcarLzsYSwJq6VTZ3%2F2edc3c2952e6b966f425063aa409c4ae%2Farnel-hasanovic-Nl-SXO4FAHw-unsplash__1_.jpg%3Fw%3D600&w=1600&q=75"
							alt="Travel"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="order-1 md:order-2">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#1B273A] leading-tight mb-6">
							Discover a whole new world of travel
						</h2>
						<p className="text-lg text-[#414D63] font-light leading-relaxed">
							With free ATM withdrawals abroad and 24/7 customer service, Coin makes traveling the easiest it&apos;s ever been. Upgrade your account and join the jet-set crowd.
						</p>
					</div>
				</div>
			</section>

			{/* Feature 2 - Rewards */}
			<section className="bg-[#F4F4F4] py-24">
				<div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-semibold text-[#1B273A] leading-tight mb-6">
							Earn cash back for every purchase
						</h2>
						<p className="text-lg text-[#414D63] font-light leading-relaxed">
							Get up to 3% of your cash back whenever you use the Coin card to pay for purchases. There is no limit on rewards you can claim and no spending minimum to hit. Cash back rewards do not expire as long as your account is active.
						</p>
					</div>
					<div className="h-80 rounded-2xl overflow-hidden">
						<img
							src="https://marketing-site.templates.contentful.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw5be3ki3sdd%2F7uYHH1WkskqMXwCiWLgZof%2Fb61896fd400eaf7f8695032a92b10909%2Fartem-beliaikin-kTd2PvtqE_o-unsplash.jpg%3Fw%3D600&w=1600&q=75"
							alt="Cash back rewards"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Testimonial */}
			<section className="bg-white py-24">
				<div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					<div className="hidden md:block h-96 rounded-2xl overflow-hidden">
						<img
							src="https://images.ctfassets.net/zaag2ctpa60k/3JECogfmlqLlXY93QJ2t2F/17b5b6c9c2b7583be960b96558b4c8d8/daria-pimkina-tYaccl19A3Q-unsplash.jpg"
							alt="Megan Trejo"
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<blockquote className="text-2xl text-[#1B273A] font-light leading-relaxed mb-8">
							&ldquo;I can&apos;t recommend Coin enough. If you&apos;re tired of having to deal with unfriendly bank staff, long lines and ungodly opening hours, this is the bank for you.&rdquo;
						</blockquote>
						<p className="text-[#414D63] font-medium">— Megan Trejo, Madrid, Spain</p>
					</div>
				</div>
			</section>
		</>
	);
}
