import React, { useEffect, useState } from 'react';
import Circular from './Circular';

const Landing = () => {
  const [fov, setFov] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust FOV based on window width
      if (width <= 768) { // Mobile view
        setFov(30); // Increase FOV for mobile
      } else {
        setFov(25); // Default FOV for larger screens
      }
    };

    // Call handleResize on mount to set the initial value
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full min-h-screen bg-zinc-950 text-green-600 relative overflow-hidden'>
      <div className="w-full items-center justify-center flex flex-col px-[4vh] md:gap-0 gap-[2vh] pb-[2vh] ">
        <h1 className='md:text-[6vw] text-[7vh] md:font-bold md:leading-normal leading-none font-bold tracking-tighter'>Hacktober Fest PCCOE 2024</h1>
        <p className='md:text-[1.4vw] font-semibold tracking-tighter md:tracking-normal text-[1.6vh]'>
          Empowering Open-Source Innovation: Code, Collaborate, and Create. Unlock the Future with AI, Cloud, and Cutting-Edge Developer Tools.
        </p>
      </div>
      <div className="w-full md:h-screen h-[30vh] bg-zinc-950">
        <Circular fv={fov} />
      </div>
    </div>
  );
};

export default Landing;