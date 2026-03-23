import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
};

const leaders = [
	{
		name: "Poppy Terrell",
		title: "Founder & CEO",
		location: "San Francisco, CA",
		bio: "Poppy began her career managing environmental projects before moving into investment banking at Chase. She later joined Credit Suisse in customer relations, where she saw firsthand how outdated banking was for everyday people. She founded Coin in 2014 with a mission to make banking simple and personal.",
		image: "https://marketing-site.templates.contentful.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw5be3ki3sdd%2F26SAApp0DZ4xvKXLBBEbeX%2Fd579e8e395b14eebd66911dd49c9774a%2FEllipse_1.png&w=256&q=75",
	},
	{
		name: "Michael Estrada",
		title: "Chief Technology Officer",
		location: "New York, NY",
		bio: "Michael holds two patents in financial technology and plays saxophone in his spare time. He previously worked at Google and founded Trezor, a hardware security startup. He joined Coin after meeting Poppy at a Y Combinator event. He holds degrees in Computer Science from Stanford.",
		image: "https://marketing-site.templates.contentful.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw5be3ki3sdd%2F2762objjfxaE1DeUHFW1wf%2F2e0679a5767d23cd47773275823b8aab%2FEllipse_2.png&w=256&q=75",
	},
	{
		name: "Jesse Ferguson",
		title: "Chief Customer Officer",
		location: "Austin, TX",
		bio: "Jesse has over 15 years of experience at high-growth companies, specializing in scaling customer support teams. A passionate cook and Women in Tech Leader 2018 award recipient, she holds a B.A. in English Literature from Yale and believes great customer experience is the heart of any great product.",
		image: "https://marketing-site.templates.contentful.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw5be3ki3sdd%2F69Z0seKXE1wpqezBsAv6Fg%2Ff59c3df2fe5a10cd0606eaf992454848%2FEllipse_3.png&w=256&q=75",
	},
];

export default function AboutUsPage() {
	return (
		<>
			{/* Hero */}
			<section className="bg-[#1B273A] py-20 text-center">
				<div className="max-w-4xl mx-auto px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About us</h1>
					<p className="text-xl text-zinc-300 font-light">We use technology to make banking convenient, personal, and secure</p>
				</div>
			</section>

			{/* Our Company */}
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-8">
					<h2 className="text-3xl font-bold text-[#1B273A] mb-6">Our company</h2>
					<p className="text-lg text-[#414D63] leading-relaxed">
						At Coin, we believe everyone deserves access to banking that works for them. We combine cutting-edge technology with a relentless focus on the customer to deliver financial products that are simple, transparent, and built for real life. From everyday spending to saving for the future, we&apos;re here to help you manage your money with confidence.
					</p>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-20 bg-[#F4F4F4]">
				<div className="max-w-3xl mx-auto px-8">
					<h2 className="text-2xl font-bold text-[#1B273A] mb-6">Our Story</h2>
					<div className="space-y-6 text-lg text-[#414D63] leading-relaxed">
						<p>
							Coin was founded in 2014 by Poppy Terrell, who saw firsthand how broken traditional banking was for ordinary people. Armed with a vision and a small team, she set out to build a bank that actually put customers first.
						</p>
						<p>
							In 2015, Coin partnered with Marc Young, and the company was accepted into Y Combinator — a turning point that accelerated growth and brought world-class engineering talent to the team. By 2017, Coin had grown to serve hundreds of thousands of customers across the United States.
						</p>
						<p>
							In 2019, Coin was acquired by Colorful Collective, giving the company the resources to expand globally. Today, Coin operates from 6 offices around the world and continues to push the boundaries of what a modern bank can be.
						</p>
					</div>
				</div>
			</section>

			{/* Leadership */}
			<section className="py-20">
				<div className="max-w-6xl mx-auto px-8">
					<h2 className="text-2xl font-bold text-[#1B273A] mb-12">Leadership</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
						{leaders.map((leader) => (
							<div key={leader.name}>
								<img src={leader.image} alt={leader.name} className="w-20 h-20 rounded-full object-cover mb-4" />
								<h3 className="text-xl font-bold text-[#1B273A]">{leader.name}</h3>
								<p className="text-sm text-[#6E6E6E] mb-3">{leader.title} · {leader.location}</p>
								<p className="text-base text-[#414D63] leading-relaxed">{leader.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
