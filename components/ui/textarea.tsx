import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-gray-400 min-h-[120px] w-full rounded-lg border-0 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-all outline-none resize-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:bg-white focus:ring-2 focus:ring-gray-200",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
