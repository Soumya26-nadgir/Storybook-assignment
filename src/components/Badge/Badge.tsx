import React from "react";
import { clsx } from "clsx";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "sale" | "success" | "warning" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "default", size = "md", icon, children, ...props },
    ref
  ) => {
    const variants: Record<string, string> = {
      default:
        "bg-gradient-to-r from-black to-neutral-800 text-white shadow-lg hover:from-neutral-900 hover:to-neutral-700 hover:shadow-xl border border-white/10 focus:ring-neutral-600 active:bg-neutral-900 text-primary-foreground shadow-md",
      sale: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25",
      success:
        "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25",
      warning:
        "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25",
      outline:
        "border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 text-primary backdrop-blur-sm",
    };
    const sizes: Record<string, string> = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-1.5 text-sm",
      lg: "px-5 py-2 text-md",
    };
    return (
      <span
        ref={ref}
        className={clsx(
          "inline-flex items-center rounded-full font-bold transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "hover:scale-105 transform-gpu",
          "relative overflow-hidden",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant !== "outline" && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
        )}
        {icon && <span className="mr-1.5 relative z-10">{icon}</span>}
        <span className="relative z-10">{children}</span>
      </span>
    );
  }
);
Badge.displayName = "Badge";
