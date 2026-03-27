"use client";

import { type ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

export default function Btn({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  href,
  children,
  className = "",
  style,
  ...props
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all duration-150 whitespace-nowrap";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-9 py-4 text-[15px]",
    lg: "px-10 py-5 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-white hover:brightness-110 active:brightness-95",
    secondary:
      "bg-white/[0.04] text-muted border border-white/[0.06] hover:bg-white/[0.08] hover:text-text-soft",
    ghost:
      "text-muted hover:text-text-soft transition-colors",
  };

  const primaryShadow =
    variant === "primary"
      ? { boxShadow: "0 4px 24px rgba(220,38,38,0.15)", ...style }
      : style;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (Tag === "a") {
    return (
      <a href={href} className={classes} style={primaryShadow}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={primaryShadow} {...props}>
      {children}
    </button>
  );
}
