"use client";

import { nav } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";

export default function HomepageNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6"
      style={{
        background: "rgba(15,27,45,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(200,155,60,0.15)",
      }}
    >
      <div className="max-w-site mx-auto flex items-center justify-between h-16">
        <a
          href="/"
          className="font-serif font-bold text-xl tracking-tight text-textLight"
          style={{ textDecoration: "none" }}
        >
          {nav.logo}
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-7">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-textLightMuted hover:text-textLight transition-colors duration-150"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Btn as="a" href={nav.ctaHref} size="sm">
            {nav.cta}
          </Btn>
        </div>
      </div>
    </nav>
  );
}
