"use client";

import React, { useRef } from "react";
import Wrapper from "../wrapper";
import { motion, useScroll } from "framer-motion";
import { skills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationListVars = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      delay: 0.05 * index,
    },
  }),
};

const fadeInAnimationHeadingVars = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    // type: "spring",

    transition: {
      delay: 0.05,
    },
  },
};

export default function SkillsSection() {
  const { ref } = useSectionInView("Skills");

  return (
    <Wrapper
      ref={ref}
      className="py-20 border-y border-gray-50/5 flex items-center flex-col gap-y-10"
      id="skills">
      <motion.h2
        whileInView="animate"
        initial="initial"
        variants={fadeInAnimationHeadingVars}
        viewport={{
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
            variants={fadeInAnimationListVars}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="px-5 py-3 border border-gray-50/20 text-gray-50/90 rounded-full">
            {skill}
          </motion.li>
        ))}
      </ul>
    </Wrapper>
  );
}
