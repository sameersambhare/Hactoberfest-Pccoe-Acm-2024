import React from 'react';
import TestImage from '../images/TestImage.jpeg'; // Adjust the path as necessary

const Certificate = () => {
  return (
    <div className="flex w-full justify-center  h-[40vh]">
      <div className='flex h-[300px] content-center flex-wrap justify-between felx-col gap-5'>
        <div>
          <h1 className="text-white text-[60px]">CERTIFICATE</h1>
        </div>
        <div>
          <img src={TestImage} alt="Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
