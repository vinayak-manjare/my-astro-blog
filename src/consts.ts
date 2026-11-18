// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Vinayak's Blog";
export const SITE_DESCRIPTION = 'Personal blog by Vinayak on backend architecture, cloud systems, and generative AI.';

export const BLOG_TOPICS: {
	id: string;
	title: string;
	description: string;
	postIds: readonly string[];
}[] = [
	{
		id: 'enterprise-platforms',
		title: 'Enterprise platforms',
		description: 'Procurement, sourcing, integrations, and the realities of modernizing business systems.',
		postIds: [
			'01-the-deep-burning',
			'02-the-one-to-many-avalanche',
			'03-the-eol-race',
			'04-the-bankruptcy-ghost',
			'05-the-mpn-hall-of-mirrors',
			'06-the-parent-child-identity-crisis',
			'07-the-rfp-fresh-set-trap',
			'08-flood-and-force-majeure',
			'09-geopolitical-whiplash',
			'10-the-vendor-lock-in-prison',
			'11-the-shadow-procurement-leak',
			'12-the-currency-rounding-bleed',
			'13-the-zombie-workflow',
			'architecture-friction-legacy-s2p-p2p-intake',
		],
	},
	{
		id: 'backend-cloud',
		title: 'Backend & cloud',
		description: 'Architecture, delivery, observability, and operating resilient services at scale.',
		postIds: [
			'automating-deployment-github-actions',
			'building-ai-gateway-for-production',
			'llms-are-not-just-an-inference-layer',
			'local-llm-observability-stack',
			's3-vectors-iam-whack-a-mole',
			'stop-hardcoding-heap-limits-jvm-kubernetes',
			'system-design-adding-llm-layer',
		],
	},
	{
		id: 'applied-ai',
		title: 'Applied AI',
		description: 'Practical patterns for RAG, LLM platforms, and intelligent automation.',
		postIds: [
			'14-the-pivot-why-ai',
			'15-the-agentic-manifesto',
			'from-rag-to-context-engineering-pdf-tables',
			'open-web-is-dying-quietly',
			'silent-cpu-killer-local-ai-agents',
		],
	},
];
