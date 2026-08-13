export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  overview: string[];
  stack: string[];
  highlights: string[];
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "party-hero",
    name: "Party Hero",
    tagline: "Australian party & event supplier marketplace",
    summary:
      "Party Hero is a full marketplace connecting event suppliers with people planning parties – browsing, enquiries, and supplier listings, built from the ground up.",
    overview: [
      "Party Hero is a two-sided marketplace where event suppliers list what they offer and event organisers search by category, location, and event type to find them.",
      "We built the whole thing as a production web application: structured listings with category-specific details, supplier subscriptions handled through Stripe, and AI-assisted tools that help suppliers write better listing copy and SEO content.",
      "It's the kind of build that shows the range CodeHeads covers – the same team and process that ships a simple marketing site can also ship a full-stack marketplace.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Claude AI",
    ],
    highlights: [
      "Marketplace search across categories, locations, and event types",
      "Supplier listings with custom attributes per category",
      "Stripe-powered subscriptions for suppliers",
      "AI-assisted content tools for listing descriptions and SEO",
    ],
    href: "/portfolio/party-hero",
  },
];
