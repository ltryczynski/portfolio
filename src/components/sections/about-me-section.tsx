"use client";

import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../wrapper";
import H2 from "../h2";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const ImageMotion = motion.create(Image);

// const fadeInAnimationImageVars = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.1,
//       duration: 0.3,
//     },
//   },
// };

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);

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
          className="object-cover w-[300px] h-[300px] rounded-full aspect-square relative z-20"
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
        className="space-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        viewport={{
          margin: "-200px",
          once: true,
        }}>
        <H2>About me</H2>
        <p className="text-lg max-w-[768px] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione veniam cumque.
          Voluptates at soluta voluptas quidem. Fugit suscipit aut officia illum harum, sint ratione
          quaerat veritatis corporis excepturi dolor fugiat, in vero nisi esse! Et dolorum, ratione
          aperiam optio vitae ex in alias perferendis expedita totam iusto, facere illum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <p className="text-lg max-w-[768px] text-justify">
          Itaque ullam sapiente cumque magni porro delectus, hic veniam reprehenderit quia et ab
          modi, amet expedita dolor? Corporis voluptatum magni eos nemo. Officia ea ipsa animi quis
          recusandae natus libero eum nesciunt aliquid nemo praesentium quasi sit temporibus minima
          dolores quas, cupiditate, commodi in blanditiis maiores excepturi unde autem. Laborum,
          possimus tenetur! Ratione accusantium vel veniam modi tempora rem similique hic nemo nulla
          quisquam molestias alias, omnis ut perspiciatis aspernatur nam ad, in eos repellat
          asperiores doloremque.
        </p>
      </motion.div>
    </Wrapper>
  );
}
