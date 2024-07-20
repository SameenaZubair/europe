import React from 'react';
import { Link } from "react-scroll";
import bgvideo from '../assets/bgvideo.mp4';


const Home = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden' id="Home">
      <video
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
      >
        <source src={bgvideo} type='video/mp4' />
      </video>
      <div className='relative w-full h-screen flex flex-col justify-center items-center'>
        
        <h1 className=' sm:text-4xl md:text-3xl lg:text-5xl font-serif text-white text-center bg-teal-400 bg-opacity-15 backdrop-blur-md p-4 rounded-lg'>
          Discover Europe's Wonders
        </h1>
        <Link to="Destination" smooth duration={500}> 
        <button className='text-white bg-teal-700 text-md mt-10 px-6 py-3 rounded-lg border-2 hover:bg-teal-600 hover:scale-105 duration-200 cursor-pointer'>
          Explore
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;