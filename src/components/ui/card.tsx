import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 border shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "rounded-xl py-6",
        feminine: "rounded-[20px] py-6 shadow-[0_4px_14px_0_rgba(240,66,153,0.1)] hover:shadow-[0_10px_25px_-3px_rgba(240,66,153,0.15)] border-[#fce7f3] bg-gradient-to-br from-white to-[#fdf2f8]",
        soft: "rounded-[24px] py-8 shadow-[0_4px_20px_0_rgba(240,66,153,0.08)] hover:shadow-[0_8px_30px_0_rgba(240,66,153,0.12)] border-[#f9a8d4]/30 bg-[#faf7f7]",
        elegant: "rounded-[16px] py-6 shadow-[0_2px_10px_0_rgba(190,24,93,0.1)] hover:shadow-[0_4px_20px_0_rgba(190,24,93,0.15)] border-[#e7e5e4] bg-white",
        product: "rounded-[20px] py-0 shadow-[0_4px_14px_0_rgba(240,66,153,0.1)] hover:shadow-[0_10px_35px_-5px_rgba(240,66,153,0.2)] hover:scale-[1.02] border-[#fce7f3]/50 bg-white overflow-hidden",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Card({ 
  className, 
  variant,
  ...props 
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
