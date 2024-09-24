import React from 'react'
import logo from '../images/ACM.png'
import hacktober from '../images/hacktober.svg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full text-white bg-[#00000077] flex items-center md:py-[1vw] md:px-[4vw] overflow-hidden justify-center md:gap-[2vw] fixed top-0 left-0 z-[999] md:rounded-bl-[1.6vw] md:rounded-br-[1.6vw]'>
      <img src={logo} alt="" className='w-[20vw] md:w-[4.2vw]' />
      <img src={hacktober} alt="" className='w-[20vw] md:w-[7vw]' />
      <nav>
        <ul className='flex md:text-[1.15vw] items-center justify-center md:gap-[3vw]'>
          <Link to="/"><li className='cursor-pointer'>Home</li></Link>
          <Link to="/about"><li className='cursor-pointer'>About</li></Link>
          <Link to="/projects"><li className='cursor-pointer'>Project</li></Link>
          <Link to="/schedule"><li className='cursor-pointer'>Schedule</li></Link>
          <Link to="/help"><li className='cursor-pointer'>Help</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar