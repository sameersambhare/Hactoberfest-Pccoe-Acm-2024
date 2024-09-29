import React, { useState, useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

export const EvervaultCard = ({ text, className }) => {
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
        "p-0.5 bg-transparent flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl relative overflow-hidden bg-transparent flex flex-col items-center justify-center w-full h-full neon-shadow transition-all duration-300" // Added transition for smooth effect
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        
        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">{text}</h2>
          <p className="text-white mb-4 text-sm sm:text-base">This is a brief description of the project. It explains what the project does.</p>
          <a 
            href="https://github.com/your-repo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition mb-4"
          >
            View on GitHub
          </a>

          {/* Icons Section */}
          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col items-center">
              <Icon className="h-6 w-6 text-white" />
              <span className="text-white">10</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon className="h-6 w-6 text-white" />
              <span className="text-white">5</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon className="h-6 w-6 text-white" />
              <span className="text-white">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const characters = "000110110001101100011011";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      {/* Replace this with the appropriate SVG paths for fork, branch, and pull icons */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
