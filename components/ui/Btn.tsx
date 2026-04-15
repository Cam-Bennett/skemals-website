"use client";

import { type ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
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
    "inline-flex items-center justify-center font-sans font-semibold rounded transition-all duration-150 whitespace-nowrap";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-[15px]",
    lg: "px-10 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gold text-white hover:bg-goldHover active:brightness-95",
    secondary:
      "bg-white/[0.08] text-textLight border border-white/[0.12] hover:bg-white/[0.14] hover:text-white",
    outline:
      "bg-transparent text-textDark border border-border hover:border-gold hover:text-gold",
  };

  const primaryShadow =
    variant === "primary"
      ? { boxShadow: "0 4px 20px rgba(200,155,60,0.30)", ...style }
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
