import React, { useState } from "react";
import { ImAirplane } from "react-icons/im";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'Destination'},
    { id: 3, link: 'About'},
    {id: 4, link: 'Book'},
  ];

  return (
    <div className=' bg-transparent bg-gradient-to-r from-teal-900 to-teal-400 p-4 flex justify-between items-center'>
      <h1 className='text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-signature flex items-center'>
        Sam Travels <ImAirplane className='ml-2 h-7 text-neutral-200' />
      </h1>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200">
            <Link to={link} smooth duration={500}> {link} </Link>
          </li>
        ))} 
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={23} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className=" top-0 left-0 w-full h-screen bg-gradient-to-b from-teal-900 to-teal-500 flex flex-col justify-center items-center">
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl text-white'>
              <Link to ={link} smooth duration={500} onClick={() => setNav(!nav)}>{link} </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

