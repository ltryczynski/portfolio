"use client";
import React, { createContext, useState } from "react";
// import { links } from "@/lib/data";
import type {
  SectionName,
  ActiveSectionContextType,
  ActiveSectionProviderProps,
} from "@/lib/types";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need to keep track of last click to disable observer tempororarily when user click a link.

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
