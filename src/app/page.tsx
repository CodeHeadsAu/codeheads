import Link from "next/link";
import { ArrowRight, Rocket, Wrench, Zap } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/portfolio";

const CAPABILITIES = [
  {
    icon: Wrench,
    title: "Built, not templated",
    description:
      "Every site is custom-coded to what your business actually needs – no drag-and-drop builder ceilings, no fighting a theme.",
  },
  {
    icon: Zap,
    title: "Full-stack when you need it",
    description:
      "From marketing pages to logins, databases, and payments – we build as much app as your idea requires.",
  },
  {
    icon: Rocket,
    title: "Fast, modern, SEO-ready",
    description:
      "Next.js on Vercel means real performance out of the box, not an afterthought bolted on later.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-bold text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
        <Container className="relative grid gap-12 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="font-mono text-sm font-semibold tracking-wider text-lime uppercase">
              Web development studio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Custom websites &amp; web apps, built right.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              CodeHeads designs and builds bespoke websites and web
              applications for businesses that want more than a template –
              modern, fast, and made to grow with you.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-11 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
                nativeButton={false}
                render={<Link href="/contact">Start a project</Link>}
              />
              <Button
                variant="outline"
                size="lg"
                className="h-11 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10"
                nativeButton={false}
                render={<Link href="/portfolio">See our work</Link>}
              />
            </div>
          </div>

          <div className="hidden md:block" aria-hidden>
            <div className="rounded-xl border border-white/15 bg-black/30 p-5 font-mono text-sm shadow-2xl backdrop-blur-sm">
              <div className="mb-4 flex gap-1.5">
                <span className="size-3 rounded-full bg-white/20" />
                <span className="size-3 rounded-full bg-white/20" />
                <span className="size-3 rounded-full bg-white/20" />
              </div>
              <p className="text-white/50">{"// codeheads.com.au"}</p>
              <p className="mt-2">
                <span className="text-lime">const</span>{" "}
                <span className="text-white">site</span> ={" "}
                <span className="text-white/70">buildFor</span>(client)
              </p>
              <p className="mt-1 text-white/70">{"{"}</p>
              <p className="ml-4">
                stack: <span className="text-lime">&quot;Next.js&quot;</span>,
              </p>
              <p className="ml-4">
                design: <span className="text-lime">&quot;bespoke&quot;</span>
                ,
              </p>
              <p className="ml-4">
                launch: <span className="text-lime">&quot;fast&quot;</span>,
              </p>
              <p className="text-white/70">{"}"}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-bold">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-sm font-semibold tracking-wider text-bold uppercase">
                Featured work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Recent build
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-bold hover:underline"
            >
              View all work <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {caseStudies.map((project) => (
              <Card key={project.slug} className="p-6">
                <p className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  {project.tagline}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
                <p className="mt-3 text-sm text-ink-soft">
                  {project.summary}
                </p>
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
                <Link
                  href={project.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bold hover:underline"
                >
                  Read the case study <ArrowRight className="size-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bold py-20 text-white">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="max-w-md text-white/80">
            Tell us what you&apos;re trying to build and we&apos;ll get back
            to you with next steps – no pricing surprises, just a
            conversation.
          </p>
          <Button
            size="lg"
            className="h-11 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
            nativeButton={false}
            render={<Link href="/contact">Get in touch</Link>}
          />
        </Container>
      </section>
    </>
  );
}
