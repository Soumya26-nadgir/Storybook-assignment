import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import { SvgIconComponent } from "@mui/icons-material";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-950 to-blue-900 text-white shadow-lg hover:from-blue-900 hover:to-blue-800 hover:shadow-xl border border-blue-800/30 focus:ring-blue-500 active:bg-blue-900 dark:from-blue-700 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 dark:border-blue-600/30 dark:focus:ring-blue-400 dark:active:bg-blue-700",
        secondary:
          "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm hover:shadow-md hover:from-gray-300 hover:to-gray-200 border border-gray-300/40 dark:from-gray-700 dark:to-gray-600 dark:text-white dark:hover:from-gray-600 dark:hover:to-gray-500 dark:border-gray-500/30",
        disabled:
          "border-2 border-primary/20 bg-transparent text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary hover:border-primary/40 shadow-sm hover:shadow-md backdrop-blur-sm dark:border-blue-500/20 dark:text-blue-400 dark:hover:border-blue-500/40",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: SvgIconComponent;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      icon: Icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading || variant === "disabled";
    return (
      <button
        className={clsx(
          buttonVariants({ variant, size, className }),
          isDisabled && "opacity-50 cursor-not-allowed",
          "inline-flex items-center justify-center gap-2",
          {
            "flex-row-reverse": iconPosition === "right",
          }
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <CircularProgress size={16} color="inherit" className="!w-4 !h-4" />
        ) : Icon && iconPosition !== "right" ? (
          <Icon style={{ fontSize: 16 }} />
        ) : null}
        {children}
        {!isLoading && Icon && iconPosition === "right" && (
          <Icon style={{ fontSize: 16 }} />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
