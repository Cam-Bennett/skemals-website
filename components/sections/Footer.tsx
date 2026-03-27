import { footer } from "@/content/siteContent";
import GrainOverlay from "@/components/ui/GrainOverlay";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-6 py-6"
      style={{
        background: "#0A0A12",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <GrainOverlay />
      <div className="relative z-10 max-w-site mx-auto flex flex-wrap items-center justify-between gap-4">
        <span className="font-heading font-bold text-primary" style={{ fontSize: "16px" }}>
          {footer.logo}
        </span>

        <div className="flex flex-wrap items-center gap-6">
          {footer.links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="font-body text-muted hover:text-text-soft transition-colors duration-150"
              style={{ fontSize: "12px", textDecoration: "none" }}
            >
              {link}
            </a>
          ))}
        </div>

        <span
          className="font-body text-muted"
          style={{ fontSize: "12px", opacity: 0.5 }}
        >
          {footer.location}
        </span>
      </div>
    </footer>
  );
}
