export type Plan = {
	readonly codename: string;
	readonly name: string;
	readonly price: string;
	readonly description: string;
	readonly features: readonly string[];
	readonly image: string;
	readonly highlighted?: boolean;
};

const plans: readonly Plan[] = [
	{
		codename: "classic",
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
		codename: "black",
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
		codename: "corporate",
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

export const getPlans = (): Promise<readonly Plan[]> => Promise.resolve(plans);

export const getPlanByCodename = async (codename: string): Promise<Plan | undefined> => {
	const allPlans = await getPlans();
	return allPlans.find((p) => p.codename.toLowerCase() === codename.toLowerCase());
};
