import React from 'react'
import Footer from './Footer'
import Landing from './Landing'
import Landing2 from './Landing2'
import StarsBackground from '../components/ui/star' 
import ShootingStars from '../components/ui/shootStar'
const Home = () => {
  return (
    <div className='w-full min-h-screen relative'>
      
      <Landing/>
      <StarsBackground />
      <ShootingStars />
      {/* <Landing2/> */}
      <Footer/>
    </div>
  );
};

export default Home;
