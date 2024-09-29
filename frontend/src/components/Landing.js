

import React, { useEffect, useState } from "react";
import Circular from "./Circular";
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import  MatrixEffect  from "./ui/MatrixRain";

const Landing = () => {
  const [fov, setFov] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust FOV based on window width
      if (width <= 768) {
        // Mobile view
        setFov(30); // Increase FOV for mobile
      } else {
        setFov(25); // Default FOV for larger screens
      }
    };

    // Call handleResize on mount to set the initial value
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full   bg-opacity-10 bg-zinc-950 text-green-700 relative overflow-hidden">
      {/* Background Animation - Positioned absolutely to cover the full background */}
      <div className="absolute h-[300px] inset-0 z-0">
        <MatrixEffect/>
      </div>
      {/* Content - Positioned relatively to appear on top of the background */}
      <div className="relative h-[600px] z-10 w-full items-center justify-center flex flex-col px-[4vh] md:gap-0 gap-[2vh] pb-[2vh]">
        <h1 className="md:text-[6vw] text-[7vh] md:font-bold md:leading-normal leading-none font-bold tracking-tighter font-['Poppins']">
          Hacktober Fest PCCOE 2024
        </h1>
        <p className="md:text-[1.4vw] font-semibold tracking-tighter md:tracking-normal text-[1.6vh] font-['Space_Grotesk']">
          Empowering Open-Source: Code, Collaborate, and Innovate with AI,
          Cloud, and Next-Gen Developer Tools.
        </p>
      </div>
      <div className="w-full md:h-screen h-[50vh] bg-black relative z-10">
        <Circular fv={fov} />
      </div>
    </div>
  );
};

export default Landing;

