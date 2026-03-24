import { getPlans } from "./plans";
import { resolveAboutUsUrl, resolveHomeUrl, resolvePricingUrl, resolveProductsUrl, resolveProductUrl } from "./utils/url-resolutions";

export type MenuItem = {
	readonly label: string;
	readonly href: string;
};

export type NavItem = {
	readonly label: string;
	readonly href?: string;
	readonly children?: readonly MenuItem[];
};

export type FooterSection = {
	readonly title: string;
	readonly items: readonly MenuItem[];
};

export type Menu = {
	readonly mainItems: readonly NavItem[];
	readonly footerSections: readonly FooterSection[];
};

export const getMenu = async (): Promise<Menu> => {
	const plans = await getPlans();
	const productItems = plans.map((p) => ({ label: p.name, href: resolveProductUrl(p.codename) }));

	return {
		mainItems: [
			{ label: "Products", href: resolveProductsUrl(), children: productItems },
			{ label: "Pricing", href: resolvePricingUrl() },
			{ label: "About Us", href: resolveAboutUsUrl() },
		],
		footerSections: [
			{ title: "Products", items: [{ label: "All Products", href: resolveProductsUrl() }, ...productItems] },
			{
				title: "Customers",
				items: [
					{ label: "Pricing", href: resolvePricingUrl() },
					{ label: "About Us", href: resolveAboutUsUrl() },
				],
			},
			{
				title: "Company",
				items: [{ label: "Home", href: resolveHomeUrl() }],
			},
		],
	};
};
