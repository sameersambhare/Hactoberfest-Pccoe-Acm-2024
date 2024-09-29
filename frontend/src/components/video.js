import React, { useEffect, useState } from "react";
import "./video.css";

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("video-section");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="video-section"
      className={`bg-zinc-950 py-16 md:py-20 lg:py-28 transform transition-opacity duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="w-full h-[40vh]  md:h-full relative justify-center items-center flex flex-col md:py-[2vw] overflow-hidden">
        {/*----------------------- Heading------------------------ */}
        <div className="header-text items-center justify-center flex flex-col gap-[2vw] md:px-0 text-center px-[2vh]">
          <h2 className="md:text-5xl text-[3.8vh] font-bold text-white">
            Our Journey in Action
          </h2>
          <p className="md:text-lg text-gray-300 text-[1.8vh] font-['Space_Mono']">
            Watch how our community is building, learning, and innovating!
          </p>
        </div>
        {/*------------------------------- Video-------------------------------------------------*/}
        <div className="w-full justify-center items-center md:mt-[2vw] flex md:px-0 mt-[4vh] px-[2vh]">
          <div className="video-wrapper md:w-[900px] relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <video
              className="w-full h-full md:h-[500px] rounded-lg"
              src="/HacktoberFestVideo.mp4" typeof="video/mp4" // Correct path reference to the video file
              controls
              muted
              loop
              autoPlay
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
