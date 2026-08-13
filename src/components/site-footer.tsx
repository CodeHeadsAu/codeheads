import Link from "next/link";

import { Logo } from "@/components/logo";
import { Container } from "@/components/container";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-bold text-white">
      <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo dark />
          <p className="mt-4 text-sm text-white/70">
            <span className="font-semibold text-white">Addicted to Code.</span>{" "}
            We build websites and web apps for small businesses in Australia
            that want something built just for them.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold tracking-wider text-lime uppercase">
            Shortcuts
          </p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-xs text-white/50">
          <p>&copy; {year} CodeHeads&trade;</p>
        </Container>
      </div>
    </footer>
  );
}
