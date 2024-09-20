"use client";

import { links, MOBILE_BREAKPOINT } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext, UseOnClickOutside } from "@/lib/hooks";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

const variants = {
  hidden: { display: "none", opacity: 0, scaleY: 0, scaleX: 0, originY: 0, originX: "50%" },
  visible: { display: "block", opacity: 1, scaleY: 1, scaleX: 1 },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const { activeSection } = useActiveSectionContext();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > MOBILE_BREAKPOINT) {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen]);

  UseOnClickOutside([headerRef], () => setIsMenuOpen(false));

  return (
    <motion.header
      className="w-max fixed top-10 left-4 md:left-0 md:right-0  mx-auto z-50"
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.5 }}>
      <div
        className="p-4 bg-gray-50/10 w-max h-max md:hidden backdrop-blur-xl rounded-full border border-gray-50/5 translate-x-[50%] mb-2"
        onClick={handleMenuToggle}>
        <HamburgerMenuIcon />
      </div>

      <motion.nav
        className="w-full h-full border backdrop-blur-xl border-gray-50/5 rounded-3xl md:rounded-full bg-gray-50/5 "
        variants={variants}
        animate={isMenuOpen ? "visible" : "hidden"}>
        <ul className="flex justify-center items-center flex-col sm:flex-row sm:w-full gap-x-5 flex-wrap">
          {links.map((link) => (
            <li
              key={link.hash}
              className="px-4 py-2 w-full md:w-max text-center text-base first:rounded-l-full last-rounded-r-full relative">
              <Link href={link.hash}>{link.name}</Link>

              {activeSection.toString() === link.name ? (
                <motion.div
                  layoutId="header-nav"
                  className="w-full h-full bg-gray-50/10 absolute inset-0 m-auto rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}></motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
}
