import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Adjust the path based on your project structure

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-6xl lg:text-7xl"
      >
        Welcome <br /> Hacktober Projects
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full min-h-[400px] items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 sm:h-48 md:h-56 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-zinc-950 h-24 sm:h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-24 sm:w-32 md:w-40 h-full left-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 sm:h-48 md:h-56 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-24 sm:w-32 md:w-40 h-full right-0 bg-zinc-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-zinc-950 h-24 sm:h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-24 sm:h-36 md:h-48 w-full translate-y-12 scale-x-150 bg-zinc-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-24 sm:h-36 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 sm:h-28 md:h-36 w-[20rem] sm:w-[24rem] md:w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 sm:h-28 md:h-36 w-48 sm:w-56 md:w-64 -translate-y-[4rem] sm:-translate-y-[5rem] md:-translate-y-[6rem] rounded-full bg-green-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] sm:w-[25rem] md:w-[30rem] -translate-y-[5rem] sm:-translate-y-[6rem] md:-translate-y-[7rem] bg-green-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-24 sm:h-36 md:h-44 w-full -translate-y-[8rem] sm:-translate-y-[10rem] md:-translate-y-[12.5rem] bg-zinc-950"></div>
      </div>

      <div className="relative z-50 flex -translate-y-48 sm:-translate-y-60 md:-translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
