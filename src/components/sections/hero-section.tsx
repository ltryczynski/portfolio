"use client";

import Wrapper from "../wrapper";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import Background from "../background";
import H1 from "../h1";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useActiveSection } from "@/lib/hooks";

// const MotionImage = motion.create(Image);

export default function HeroWrapper() {
  const { ref } = useActiveSection("Home");

  const lottieRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let instance: AnimationItem | null = null;
    if (lottieRef.current) {
      instance = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/anim2.json",
      });
    }
    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <Wrapper
      ref={ref}
      className="relative  mb-10 flex flex-col justify-center items-center w-full min-h-screen z-0 ">
      <Background type="both" />
      <div className="flex flex-col relative w-max h-max z-10 mb-20">
        <H1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
          <motion.span
            initial={{ opacity: 0, rotate: 20, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: -10, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute left-0 top-5 -rotate-2 z-50">
            Front-End
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, rotate: -20, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, rotate: 5, scale: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-5 right-0 z-50">
            Developer
          </motion.span>
        </H1>
        <div className="">
          <div
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
            ref={lottieRef}></div>
        </div>
      </div>
      <div className="space-y-5 mb-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
          className="text-2xl text-center lg:text-4xl tracking-wide z-10 font-bold">
          Łukasz Tryczyński
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.6, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3, type: "spring" }}
          className="text-base lg:text-xl text-center">
          React / Next.js | Wordpress | TailwindCSS
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.3, type: "spring" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-5 z-10 flex-wrap">
        <div className="space-x-5">
          <Button asChild size="lg" variant="outline">
            <Link href="/">CV</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#projects">Projects</Link>
          </Button>
        </div>
        <div className="space-x-5">
          <Button asChild size="icon-lg" variant="outline">
            <Link
              href="https://github.com/ltryczynski"
              target="_blank"
              rel="nofollow noopener noreferrer">
              <GitHubLogoIcon />
            </Link>
          </Button>
          <Button asChild size="icon-lg" variant="outline">
            <Link
              href="https://www.linkedin.com/in/%C5%82ukasz-tryczy%C5%84ski-6289b727a/"
              target="_blank"
              rel="nofollow noopener noreferrer">
              <LinkedInLogoIcon />
            </Link>
          </Button>
        </div>
      </motion.div>
    </Wrapper>
  );
}
