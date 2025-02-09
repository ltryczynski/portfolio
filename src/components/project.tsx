"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  inProgress?: boolean;
  external?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  inProgress = false,
  external = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      viewport={{
        margin: "-100px",
        once: true,
      }}
      className="group relative overflow-hidden">
      <a
        href={inProgress ? "#" : projectUrl}
        target={inProgress ? "" : "_blank"}
        rel={external ? "nofollow noopener noreferrer" : ""}
        onClick={inProgress ? (e) => e.preventDefault() : undefined}
        className={`block w-full`}>
        {inProgress && (
          <div className="w-full h-full absolute bg-gray-950 z-10 opacity-80 flex flex-col justify-center items-center gap-2 text-xl font-medium">
            <p className="text-2xl font-bold">{title}</p>
            Project in progress
          </div>
        )}
        <article
          className={clsx(
            `bg-gray-50/5 w-full border border-gray-50/10 self-center overflow-hidden sm:pr-8 relative sm:h-[24rem] transition`,
            {
              "blur-sm": inProgress,
            }
          )}>
          <div className="pt-5 pl-5 pb-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[70%] sm:max-w-[70%] lg:max-w-[75%]   xl:max-w-[60%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-50/70 xl:mt-0">{description}</p>
            <ul className="flex flex-wrap gap-1 lg:gap-2 mt-4 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-gray-950/50 px-4 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            quality={90}
            className="absolute h-4/5 object-cover bottom-0 -right-[17rem] md:-right-72 w-[28.25rem] rounded-tl-2xl shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-3 group-hover:-rotate-2 "
          />
        </article>
      </a>
    </motion.div>
  );
}
