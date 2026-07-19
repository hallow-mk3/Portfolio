import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { cn } from "@/utils/cn"; // we can define a small utility helper in utils/cn.ts or inline it. Let's define cn utility in utils/cn.ts if needed, or simply write it here or write a utils/cn.ts. Let's do it inline to keep it simple, or create a small utils file. Let's do inline since it's simple.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF2E63] focus:ring-offset-2 focus:ring-offset-[#09090B] disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#FF2E63] text-white hover:bg-[#e02453] shadow-lg shadow-[#FF2E63]/10",
    secondary: "bg-[#18181B] text-zinc-100 hover:bg-[#27272A] border border-zinc-800",
    outline: "border border-zinc-800 text-zinc-300 hover:text-white hover:bg-[#18181B] hover:border-zinc-700",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-900/50",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = clsx(baseStyle, variants[variant], sizes[size], className);

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
