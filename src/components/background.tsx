import { cn } from "@/lib/utils";
import React from "react";

type BackgroundProps = {
  type: "before" | "after" | "both";
  className?: string;
};

export default function Background({ type, className }: BackgroundProps) {
  return (
    <div className="w-full h-full absolute inset-0 m-auto overflow-hidden">
      <div
        className={cn(
          {
            "before:bg-Cprimary before:w-[10rem] before:rounded-full before:blur-[14rem] before:h-[10rem] before:top-36 before:bottom-0 before:-left-80 before:right-0 before:m-auto before:absolute before:z-0":
              type === "before",
            "after:bg-Caccent after:w-[10rem] after:rounded-full after:blur-[14rem] after:h-[10rem] after:top-36 after:bottom-0 after:-left-80 after:right-0 after:m-auto after:absolute after:z-0":
              type === "after",
            "before:bg-Cprimary before:w-[10rem] before:rounded-full  before:h-[10rem] before:bottom-0 before:-top-[35rem] before:-right-[25rem] before:blur-[18rem] before:left-0 before:m-auto before:absolute before:z-0 after:bg-Caccent after:w-[10rem] after:rounded-full after:blur-[14rem] after:h-[10rem] after:top-36 after:bottom-0 after:-left-80 after:right-0 after:m-auto after:absolute after:z-0":
              type === "both",
          },
          className
        )}
      />
    </div>
  );
}
