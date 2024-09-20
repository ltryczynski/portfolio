"use client";

import React from "react";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks";

export default function SkillsSection() {
  const { ref } = useActiveSection("Skills");

  return (
    <Wrapper
      className="container py-20 border-t border-gray-50/5 flex items-center flex-col gap-y-10"
      id="skills"
      ref={ref}>
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
          type: "spring",
        }}
        initial="initial"
        viewport={{
          margin: "-200px",
          once: true,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 120 }}
        className="text-2xl lg:text-5xl font-medium">
        Skills
      </motion.h2>
      <ul className="max-w-[768px] flex justify-center gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.1, delay: 0.05 * index },
              type: "spring",
            }}
            viewport={{
              once: true,
              margin: "-200px",
            }}
            className="px-5 py-3 border border-gray-50/20 text-gray-50/90 rounded-full">
            {skill}
          </motion.li>
        ))}
      </ul>
    </Wrapper>
  );
}
