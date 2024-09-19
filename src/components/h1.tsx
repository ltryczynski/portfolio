import { cn } from "@/lib/utils";
import React from "react";

type H1Props = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({ children, className, ...props }: H1Props) {
  return (
    <h1 className={cn("text-3xl lg:text-6xl font-semibold", className)} {...props}>
      {children}
    </h1>
  );
}
