import React from 'react';
import Footer from './Footer';
import Landing from './Landing';
import Certificate from './Certificate';
// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Landing />
      <Certificate/>
      <Footer />
    </div>
  );
};

export default Home;
