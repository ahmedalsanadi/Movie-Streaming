import React from 'react';
import bgImg from '../images/trending-bg.svg';

const HorizontalSlider = ({ children }) => {
  return (
    <div
      className="mx-auto overflow-x-scroll px-4 py-1 overflow-y-hidden scrollbar-hide scroll-smooth scrollbar-thin scrollbar-thumb-yellow-300 dark:scrollbar-thumb-yellow-200 dark:scrollbar-track-[#032541] 
      scrollbar-thumb-rounded bg-bottom bg-no-repeat h-[460px] sm:bg-transparent md:bg-contain  lg:bg-contain"
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
        backgroundImage: `url(${bgImg.src})`,
        backgroundPosition: 'center bottom',
      
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalSlider;
