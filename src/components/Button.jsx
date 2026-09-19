import { forwardRef } from "react"
import { cn } from "@/src/lib/utils"

export const Button = forwardRef(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rf-orange disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-rf-orange text-white hover:bg-orange-600": variant === "primary",
            "bg-white text-rf-navy hover:bg-gray-100": variant === "secondary",
            "border border-rf-navy bg-transparent text-rf-navy hover:bg-rf-navy hover:text-white": variant === "outline",
            "hover:bg-gray-100 text-gray-700": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
