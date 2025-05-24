import React from 'react';
import Advertisement from './Advertisement';

const Header = () => {
  return (
    <div className="w-full h-[100%] min-h-[60vh] py-5 flex flex-col lg:flex-row justify-center">
      
      {/* Left Section */}
      <div className="w-full lg:w-3/4 bg-white flex items-center justify-center mb-4 lg:mb-0">
        <div className="bg-[#f7463d] w-[70%] h-full py-7 flex items-center justify-center flex-col rounded-b-full">
          <h1 className="text-4xl sm:text-5xl lg:text-[5.8rem] font-bold text-center text-white px-4 sm:px-[5rem] leading-tight lg:leading-[7.3rem]">
            जनहित मिशन <br /> डॉट कॉम
          </h1>
          <div className="flex items-center justify-end flex-col mt-4 sm:p-[2rem]">
            <h3 className="text-xl sm:text-3xl lg:text-5xl text-[#671c98] font-bold text-center">
              समाचार विचार पोर्टल
            </h3>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/4 h-96 border-b-2 flex justify-center items-center">
        <Advertisement />
      </div>
    </div>
  );
};

export default Header;
