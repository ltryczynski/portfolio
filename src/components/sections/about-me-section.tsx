"use client";

import React from "react";
import Wrapper from "../wrapper";
import H2 from "../h2";
import Image from "next/image";
import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/hooks";

const ImageMotion = motion.create(Image);

export default function AboutMe() {
  const { ref } = useActiveSection("About");

  return (
    <Wrapper
      ref={ref}
      id="about"
      className="container border-t border-gray-50/5  flex flex-col items-center gap-10 py-20 text-center">
      <div className="relative w-max h-max before:w-1/2 before:h-1/2 before:rounded-full before:bg-Caccent before:absolute before:-top-2 before:-left-2 before:m-auto before:z-10 before:blur-[10rem] before:opacity-50 after:opacity-50 after:blur-[10rem] after:w-1/2 after:h-1/2 after:rounded-full after:bg-Cprimary after:absolute after:-bottom-2 after:-right-2 after:m-auto after:z-10">
        <ImageMotion
          src="/12088.jpg"
          width={400}
          height={400}
          alt="Łukasz Tryczyński"
          className="object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full aspect-square relative z-20"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.3 },
            type: "spring",
          }}
          viewport={{
            margin: "-200px",
            once: true,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
          }}
        />
      </div>
      <motion.div
        className="space-y-10 mx-5 sm:mx-10 md:mx-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{
          margin: "-200px",
          once: true,
        }}>
        <H2>About me</H2>
        <p className="text-lg max-w-[768px]">
          {`Specializing in building modern web applications with Next.js and React, I focus on creating fast, responsive interfaces. Leveraging Tailwind CSS, I design aesthetic and cohesive applications that perform smoothly across various devices.`}
        </p>
        <p className="text-lg max-w-[768px]">
          {`With 4 years of experience in WordPress, ACF, and WooCommerce, I've developed a solid foundation in e-commerce solutions and custom website development.`}
        </p>
        <p className="text-lg max-w-[768px]">
          {`Proficient in JavaScript and TypeScript, I also work extensively with libraries such as GSAP, Framer Motion, React Query, shadcn-ui, and Zustand to build dynamic, interactive, and efficient web applications.`}
        </p>
      </motion.div>
    </Wrapper>
  );
}
