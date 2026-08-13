export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  overview: string[];
  stack?: string[];
  highlights: string[];
  href: string;
  externalUrl?: string;
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
    externalUrl: "https://partyhero.com.au",
  },
  {
    slug: "get-loose",
    name: "Get Loose",
    tagline: "Internal booking & quote system for an event planning company",
    summary:
      "A custom internal tool that runs behind the scenes for Get Loose's team – managing bookings and generating quotes across all their event categories, not something the public ever sees.",
    overview: [
      "Get Loose runs events across multiple categories, not just boats – with a wide range of packages, suppliers, and pricing to keep track of across it all. We built them an internal booking and quote system tailored to how their team actually works.",
      "It's not the public website – Get Loose handles hosting for that separately. This is the tool their staff use directly to put bookings and quotes together quickly and consistently, whatever the event type.",
    ],
    highlights: [
      "Custom quote builder across all their event categories and packages",
      "Internal booking management for the team, not the public",
      "Built specifically around Get Loose's existing pricing and packages",
    ],
    href: "/portfolio/get-loose",
    externalUrl: "https://www.getloose.com.au/",
  },
  {
    slug: "easy-boat-hire",
    name: "Easy Boat Hire",
    tagline: "Internal booking & quote system for a boat hire company",
    summary:
      "Another internal booking and quote tool, built for Easy Boat Hire's team to manage bookings across multiple cities without the manual back-and-forth.",
    overview: [
      "Easy Boat Hire needed a faster way for their team to put together quotes and manage bookings for their boat hire business across multiple cities, without relying on manual spreadsheets and back-and-forth.",
      "Like the Get Loose build, this is an internal tool for staff use – Easy Boat Hire handles hosting for their public website separately.",
    ],
    highlights: [
      "Custom quote builder for their boat hire packages",
      "Internal booking management for the team, not the public",
      "Built specifically around Easy Boat Hire's existing pricing and packages",
    ],
    href: "/portfolio/easy-boat-hire",
    externalUrl: "https://www.easyboathire.com.au/",
  },
];
