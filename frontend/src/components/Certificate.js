import React from 'react';
import TestImage from '../images/TestImage.jpeg'; // Adjust the path as necessary

const Certificate = () => {
  return (
    <div className="flex w-full justify-center align-middle h-[90vh]">
      <div className='flex w-full h-full items-center justify-center flex-col align-middle gap-20 felx-col gap-5'>
        <div>
          <h1 className="text-white font-semibold font-bold text-[60px]">Certificate</h1>
        </div>
        <div className='w-full items-center flex justify-center h-fit'>
          <img src={TestImage} alt="Certificate" width={"800px"}/>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
