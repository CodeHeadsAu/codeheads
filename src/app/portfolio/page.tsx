import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies of websites and web apps CodeHeads has built, including Party Hero, Get Loose, and Easy Boat Hire.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-paper py-20">
        <Container>
          <p className="font-mono text-sm font-semibold tracking-wider text-bold uppercase">
            Portfolio
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Work we&apos;ve built
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            A look at what we&apos;ve shipped – real, production builds, not
            mockups.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <Card key={project.slug} className="p-6">
                <p className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  {project.tagline}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{project.name}</h2>
                <p className="mt-3 text-sm text-ink-soft">
                  {project.summary}
                </p>
                {project.stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-bold hover:underline"
                  >
                    Read the case study <ArrowRight className="size-4" />
                  </Link>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-foreground hover:underline"
                    >
                      Visit site <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
