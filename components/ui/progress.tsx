import * as React from "react"
import { cn } from "@/lib/utils"
import * as ProgressPrimitive from "@radix-ui/react-progress"

export const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  let indicatorColorClass = "bg-green-500";

  if (value != null) {
    if (value >= 70 && value < 100) {
      indicatorColorClass = "bg-orange-500";
    } else if (value >= 90) {
      indicatorColorClass = "bg-red-500";
    }
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-100", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 transition-all", indicatorColorClass)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
})

Progress.displayName = ProgressPrimitive.Root.displayName