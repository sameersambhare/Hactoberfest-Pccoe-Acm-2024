
import React from 'react'
import Footer from './Footer'
import Landing from './Landing'
import Landing2 from './Landing2'
import StarsBackground from '../components/ui/star' 
import ShootingStars from '../components/ui/shootStar'
import VideoSection from './video'       
import Certificate from './Certificate'

const Home = () => {
  return (
    <div className='w-full min-h-screen relative'>
      
      <Landing/>
      <VideoSection/>
      <Certificate/>
      <StarsBackground />
      <ShootingStars />
      

      <Footer/>
    </div>
  );
};

export default Home;
