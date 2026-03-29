"use client";

import { nav } from "@/content/siteContent";
import Btn from "@/components/ui/Btn";

export default function HomepageNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6"
      style={{
        background: "rgba(10,10,18,0.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-site mx-auto flex items-center justify-between h-16">
        {/* Wordmark */}
        <a
          href="/"
          className="font-heading font-bold text-xl text-primary tracking-tight"
          style={{ textDecoration: "none" }}
        >
          {nav.logo}
        </a>

        {/* Single CTA — no nav links */}
        <Btn
          as="a"
          href="/#qualifier"
          size="sm"
        >
          {nav.cta}
        </Btn>
      </div>
    </nav>
  );
}
