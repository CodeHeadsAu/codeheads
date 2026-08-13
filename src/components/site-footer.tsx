import Link from "next/link";

import { Logo } from "@/components/logo";
import { Container } from "@/components/container";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/codeheadsau/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/codeheadsau/",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/codeheads",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-bold text-white">
      <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo dark />
          <p className="mt-4 text-sm text-white/70">
            <span className="font-mono text-lime">Addicted to Code &gt;</span>{" "}
            We build websites, apps, and software for small businesses in
            Australia that want something built just for them.
          </p>
          <div className="mt-5 flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/70 transition-colors hover:text-lime"
              >
                <span className="size-5 [&_svg]:size-5">{social.icon}</span>
              </a>
            ))}
          </div>
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
