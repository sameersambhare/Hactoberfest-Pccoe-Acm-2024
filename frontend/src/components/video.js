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
      className={`bg-dark py-16 md:py-20 lg:py-28 transform transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-[40vh] md:h-[70vh] container justify-center items-center flex flex-col text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our Journey in Action
        </h2>
        <p className="text-lg text-gray-300 mb-8 font-['Space_Mono']">
          Watch how our community is building, learning, and innovating!
        </p>

        <div className="w-full relative flex items-center justify-center mb-12 max-w-[800px]">
          <div className="video-wrapper  w-[900px] relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <video
              className="w-full h-full md:h-[500px] rounded-lg"
              src="/HacktoberFestVideo.mp4" // Correct path reference to the video file
              controls
              autoPlay
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
