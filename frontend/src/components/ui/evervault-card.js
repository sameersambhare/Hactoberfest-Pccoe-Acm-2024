import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { FaCodePullRequest, FaCodeMerge, FaCodeFork } from "react-icons/fa6";

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Function to generate random binary string
const characters = "000110110001101100011011";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const EvervaultCard = ({
  text,
  forks,
  pullRequests,
  mergedPRs,
  className,
  repoDescription,
  githubLink,
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "bg-transparent w-[350px] flex items-center p-2 justify-center h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl relative overflow-hidden bg-transparent mx-4 flex flex-col items-center justify-center w-full h-full neon-shadow transition-all duration-300"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-10 px-4 gap-4 flex flex-col items-center justify-center py-4 w-full text-center">
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-2 px-2">
            {text}
          </h2>
          <p className="text-white mb-4 text-sm sm:text-base">
            {`This is a brief description of the project. It explains what the
            project does.` || repoDescription}
          </p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition mb-4"
          >
            View on GitHub
          </a>

          {/* Icons Section */}
          <div className="flex space-x-4 mt-4">
            <IconWrapper
              icon={<FaCodePullRequest className="h-6 w-6 text-white" />}
              count={pullRequests}
            />
            <IconWrapper
              icon={<FaCodeMerge className="h-6 w-6 text-white" />}
              count={mergedPRs}
            />
            <IconWrapper
              icon={<FaCodeFork className="h-6 w-6 text-white" />}
              count={forks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const IconWrapper = ({ icon, count }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="text-white">{count}</span>
  </div>
);

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}
