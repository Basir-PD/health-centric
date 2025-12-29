import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-gray-400 h-11 w-full min-w-0 rounded-lg border-0 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:bg-white focus:ring-2 focus:ring-gray-200",
        className
      )}
      {...props}
    />
  )
}

export { Input }
