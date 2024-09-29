import React, { useEffect, useState } from 'react';
import './video.css';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('video-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="video-section"
      className={`bg-dark py-16 md:py-20 lg:py-28 transform transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our Journey in Action
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Watch how our community is building, learning, and innovating!
        </p>

        <div className="relative mx-auto mb-12 max-w-[800px]">
          <div className="video-wrapper  w-[900px] relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <video
              className="w-full h-full md:h-[500px] rounded-lg"
              src="/HacktoberFestVideo.mp4" // Correct path reference to the video file
              controls
              autoPlay
              
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-blue-600 opacity-0 transition-opacity duration-500 hover:opacity-30 pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
