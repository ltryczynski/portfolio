import { cn } from "@/lib/utils";
import React from "react";

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className }: H2Props) {
  return <h2 className={cn(`text-2xl lg:text-5xl font-medium`, className)}>{children}</h2>;
}
