import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeHeads about a website or web app project. No pricing surprises, just a conversation.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm font-semibold tracking-wider text-bold uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Tell us what you&apos;re trying to build. We&apos;ll reply with
            next steps and, if it&apos;s a good fit, a quote — no numbers
            published online, just a conversation tailored to your project.
          </p>

          <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-paper p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-bold">
              <Mail className="size-5" />
            </div>
            <div>
              <p className="text-sm text-ink-soft">Prefer email?</p>
              <a
                href="mailto:hello@codeheads.com.au"
                className="font-semibold text-bold hover:underline"
              >
                hello@codeheads.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
