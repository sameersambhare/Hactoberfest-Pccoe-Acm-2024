import React from 'react'
import Footer from './Footer'
import Landing from './Landing'
import Landing2 from './Landing2'

const Home = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <Landing/>
      {/* <Landing2/> */}
      <Footer/>
    </div>
  )
}

export default Home