import type { Metadata } from "next";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeHeads about a website or web app project. No pricing surprises, just a conversation.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper py-20">
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
            the next steps, and if it&apos;s a good fit we&apos;ll have a
            conversation tailored to your project.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
