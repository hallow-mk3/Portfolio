import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";

  const variants = {
    primary:
      "bg-text-primary text-bg-primary hover:bg-text-secondary shadow-md hover:shadow-lg",
    secondary:
      "bg-bg-tertiary text-text-primary hover:bg-bg-secondary border border-glass",
    outline:
      "border border-glass text-text-secondary hover:text-text-primary hover:bg-glass-bg",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-glass-bg",
    glass:
      "glass-card px-4 py-2 text-text-primary border border-glass hover:bg-glass-bg-hover",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(baseStyle, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
