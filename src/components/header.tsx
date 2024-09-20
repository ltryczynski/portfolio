"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/lib/hooks";

export default function Header() {
  const { activeSection } = useActiveSectionContext();
  console.log(activeSection.toString() === links[0].name);
  return (
    <motion.header
      className="w-max bg-gray-50/5 border border-gray-50/5 backdrop-blur-xl rounded-full fixed top-4 inset-x-0 mx-auto z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.5 }}>
      <nav className="w-full h-full rounded-full bg-gray-950/20">
        <ul className="flex gap-x-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="px-4 py-2 text-md first:rounded-l-full last-rounded-r-full relative">
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
      </nav>
    </motion.header>
  );
}
