import React from 'react';
import coverBG from '../images/coverBG.jpg';

const HeroSection = () => {
  return (
    <header
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${coverBG.src})`,
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.8)' // Black inner shadow
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-snug">
          Explore Top-Rated Films <br />and Hidden Gems
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Whether you are a movie buff or just looking for something to watch tonight,
          <br /> explore our extensive collection of films.
        </p>
        <div className="flex gap-4">
          <a href="#explore" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Explore</a>
          <a href="#get-started" className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
