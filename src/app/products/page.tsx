import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FileText, Mail, Megaphone } from "lucide-react";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Ready-made AI-powered tools from CodeHeads — Marketing Copilot, Email Assistant, and Quote Generator — built to save small businesses hours every week.",
};

const PRODUCTS = [
  {
    icon: Megaphone,
    name: "Marketing Copilot",
    tagline: "Your marketing team, minus the headcount",
    description:
      "A single tool that handles the marketing tasks that eat up your week — so you can keep putting your business out there without hiring for it.",
    features: [
      "AI content writer for blogs, captions, and website copy",
      "SEO helper with keyword and on-page suggestions",
      "AI photo generator for marketing visuals",
    ],
  },
  {
    icon: Mail,
    name: "Email Assistant",
    tagline: "Emails that sound like you, sent without you",
    description:
      "Drafts and sends emails in your business's own voice, learning your context so routine replies stop eating into your day.",
    features: [
      "Drafts replies tailored to your business",
      "Sends on autopilot or waits for your approval",
      "Learns your tone the more it's used",
    ],
  },
  {
    icon: FileText,
    name: "Quote Generator",
    tagline: "Quotes out the door in minutes, not hours",
    description:
      "Builds professional quotes straight from your existing pricing and specifications, then sends them to the customer for you.",
    features: [
      "Uses your real pricing and packages",
      "Drafts a professional quote automatically",
      "Sends directly to the customer",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-paper py-20">
        <Container>
          <p className="font-mono text-sm font-semibold tracking-wider text-bold uppercase">
            Products
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Pre-built products, ready to go
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Not everything needs a custom build. These are ready-made tools
            designed to save small businesses hours every week — the same
            kind of AI-powered tooling we build into bespoke projects,
            packaged so you can start using it today.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map(({ icon: Icon, name, tagline, description, features }) => (
              <Card key={name} className="flex flex-col p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-bold">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-4 text-xl font-bold">{name}</h2>
                <p className="mt-1 text-sm font-medium text-bold">
                  {tagline}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{description}</p>
                <ul className="mt-5 space-y-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-ink-soft"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-bold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bold py-20 text-white">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
            Want one of these running in your business?
          </h2>
          <p className="max-w-md text-white/80">
            We&apos;ll set it up around how you actually work — no generic
            template, just the tool doing the job.
          </p>
          <Button
            size="lg"
            className="h-11 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
            nativeButton={false}
            render={
              <Link href="/contact">
                Get in touch <ArrowRight className="size-4" />
              </Link>
            }
          />
        </Container>
      </section>
    </>
  );
}
