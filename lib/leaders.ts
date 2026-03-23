export type Leader = {
	readonly name: string;
	readonly title: string;
	readonly location: string;
	readonly bio: string;
	readonly image: string;
};

const leaders: readonly Leader[] = [
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
] as const;

export const getLeaders = (): Promise<readonly Leader[]> => Promise.resolve(leaders);
