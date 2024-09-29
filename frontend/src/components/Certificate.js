import React from 'react';
import TestImage from '../images/TestImage.jpeg'; // Adjust the path as necessary
import TestPrizeImg from '../images/prize.jpg'
const Certificate = () => {
  return (
    <div className="flex w-full justify-center items-center h-[40vh] md:h-[90vh] relative py-[2vw] overflow-hidden">

      <div className='flex w-full items-center justify-center flex-col gap-5 text-center'>
        {/*------------------ Headings------------------- */}
        <h1 className="text-white font-semibold text-[3vh]  md:text-[3.5vw] ">Certificate</h1>
        <p className="text-white font-semibold text-[1.4vh] md:text-[1.4vw] font-['Space_Mono']">Participate and win these exciting goodies along with participation certificate!!</p>
        {/*-------------- Certificate------------------------------------------------------------------- */}
        <div className='w-full justify-center items-center flex gap-[5vw] px-[2vh]'>
          <img src={TestImage} alt="Certificate" className='md:w-[40vw] w-[25vh]' />
          <img src={TestPrizeImg} alt="Certificate" className='md:w-[23vw] w-[15vh]' />
        </div>
      </div>

    </div >
  );
};

export default Certificate;
