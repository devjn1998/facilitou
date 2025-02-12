import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "danger";
}

export const Button: React.FC<ButtonProps> = ({ asChild, variant = "default", children, className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg text-sm font-medium transition-all";

  const variantStyles = {
    default: "bg-blue-800 text-white hover:bg-sky-600",
    outline: "border border-sky-300 text-blue-800 hover:bg-sky-50",
    danger: "bg-blue-700 text-white hover:bg-sky-700",
  };

  if (asChild) {
    return (
      <span className={cn(baseStyles, variantStyles[variant], className)}>
        {React.cloneElement(children as React.ReactElement, {
          ...props,
        })}
      </span>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
