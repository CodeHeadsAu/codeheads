import Link from "next/link";
import type { Metadata } from "next";
import { Layers, MessageSquare, PenTool, Rocket, Server } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CodeHeads builds websites, apps, and software – from marketing sites to complex internal tools with databases, logins, and payments.",
};

const INCLUDES = [
  {
    icon: PenTool,
    title: "Design & UX",
    description:
      "A layout and look built around your brand and your visitors, not a theme picker.",
  },
  {
    icon: Layers,
    title: "Frontend build",
    description:
      "Fast, responsive, accessible pages coded by hand with modern tools – Next.js, React, Tailwind.",
  },
  {
    icon: Server,
    title: "Backend & integrations",
    description:
      "When your site needs more than pages – logins, databases, payments, or third-party APIs – we build that too.",
  },
  {
    icon: Rocket,
    title: "Deployment & launch",
    description:
      "Hosted on Vercel with your domain, SSL, and analytics set up properly from day one.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "We talk through what you're trying to achieve, who your site is for, and what \"done\" looks like.",
  },
  {
    step: "02",
    title: "Design & build",
    description:
      "We design and build in the open – you see progress as it happens, not just a reveal at the end.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Your site goes live on modern, reliable infrastructure, ready to grow with your business.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-paper py-20">
        <Container>
          <p className="font-mono text-sm font-semibold tracking-wider text-bold uppercase">
            Services
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Websites, apps &amp; software
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            One service, done properly: websites, apps, and software
            tailored to your business – whether that&apos;s a sharp
            marketing site, an internal tool, or a full-blown application
            with logins, data, and payments behind it.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">
            What&apos;s included
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {INCLUDES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-bold">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bold py-20 text-white">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {PROCESS.map(({ step, title, description }) => (
              <div key={step}>
                <p className="font-mono text-3xl font-bold text-lime">
                  {step}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <MessageSquare className="size-8 text-bold" />
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-nowrap sm:text-3xl">
            Not sure what you need yet? That&apos;s fine.
          </h2>
          <p className="max-w-md text-ink-soft">
            Tell us roughly what you&apos;re trying to build and we&apos;ll
            help you figure out the right scope – no quote required to start
            the conversation.
          </p>
          <Button
            size="lg"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<Link href="/contact">Start a Project</Link>}
          />
        </Container>
      </section>
    </>
  );
}
