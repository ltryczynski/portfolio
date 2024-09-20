"use client";
import { createContext, useState } from "react";

type ActiveSectionContextType = {
  activeSection: SectionProps;
  handleChangeActiveSection: (section: SectionProps) => void;
};

export type SectionProps = "Home" | "Skills" | "About" | "Projects" | "Contact";

export const activeSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionProps>("Home");
  const handleChangeActiveSection = (section: SectionProps) => {
    setActiveSection(section);
  };

  return (
    <activeSectionContext.Provider value={{ activeSection, handleChangeActiveSection }}>
      {children}
    </activeSectionContext.Provider>
  );
}
