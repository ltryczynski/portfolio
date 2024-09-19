import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { ActiveSectionContextType, SectionName } from './types';
import { ActiveSectionContext } from "@/context/active-section-context";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    return { ref, inView };
}



export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
    }
    return context;
}
