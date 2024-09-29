import React from 'react';
import Footer from './Footer';
import Landing from './Landing';
// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background Component */}
      {/* <div className="absolute inset-0 z-[-99]">
        <BackgroundBeamsWithCollision />
      </div> */}

      {/* Foreground Component */}
        <Landing />
      {/* <div className="relative z-10">
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
