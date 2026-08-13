import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/portfolio";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-bold py-20 text-white">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
          <p className="mt-6 font-mono text-sm font-semibold tracking-wider text-lime uppercase">
            {project.tagline}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          {project.stack && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-lime hover:bg-white/20"
            >
              Visit site <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              {project.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              What we built
            </h2>
            <ul className="mt-6 space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-bold" />
                  <span className="text-ink-soft">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-bold py-20 text-white">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
            Want something like this?
          </h2>
          <p className="max-w-md text-white/80">
            Whether it&apos;s a simple site or a full marketplace, we&apos;ll
            help you figure out the right scope.
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
