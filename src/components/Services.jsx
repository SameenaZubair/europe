import React from 'react'
import { FaHotel } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaPlane } from "react-icons/fa6";
import { TbTrekking } from "react-icons/tb";
 


const Services = () => {
  return (
    <div className='h-full w-screen relative bg-gradient-to-br from-teal-400 to-teal-700'> 
 <div> 
    <h1 className=' text-3xl text-black flex flex-col justify-center items-center mr-3 font-bold  underline pt-10 font-seri  '>Services</h1>
  </div>

  <div className='flex flex-col items-center justify-center pt-12 m-10'> 
  <FaHotel className='text-3xl text-white ' />
    <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-semibold justify-center '> Affordable Hotels</h1>
    <p className='sm:text-xl md:text-2xl lg:text-2xl font-light justify-center pt-3  text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elite<br/>Incidunt pariatur cumque, 
        voluptatibus porro provident<br/> debitis natus, magnam repudiandae, dolorem facere aspernatur.</p>
  </div>

  <div className='flex flex-col items-center justify-center pt-12 m-10'>
  <GiForkKnifeSpoon className='text-3xl  text-white' />
    <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-semibold justify-center'> Food And Drinks </h1>
    <p className='sm:text-xl md:text-2xl lg:text-2xl  font-light justify-center pt-3  text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elite<br/>Incidunt pariatur cumque, 
        voluptatibus porro provident<br/> debitis natus, magnam repudiandae, dolorem facere aspernatur.</p>


  </div>
  <div className='flex flex-col items-center justify-center pt-12 m-10'>
  <AiFillSafetyCertificate className='text-3xl text-white ' />
    <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-semibold justify-center'> Safety Guide </h1>
    <p className='sm:text-xl md:text-2xl lg:text-2xl  font-light justify-center pt-3  text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elite<br/>Incidunt pariatur cumque, 
        voluptatibus porro provident<br/> debitis natus, magnam repudiandae, dolorem facere aspernatur.</p>
</div>

<div className='flex flex-col items-center justify-center pt-12 m-10'>
<FaPlane className='text-3xl text-white '/>
    <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-semibold justify-center'> Fastest Travel </h1>
    <p className='sm:text-xl md:text-2xl lg:text-2xl  font-light justify-center pt-3  text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elite<br/>Incidunt pariatur cumque, 
        voluptatibus porro provident<br/> debitis natus, magnam repudiandae, dolorem facere aspernatur.</p>
</div> 

<div className='flex flex-col items-center justify-center pt-12 m-10'>
<TbTrekking className='text-3xl text-white ' />
    <h1 className='md:text-3xl sm:text-2xl lg:text-3xl font-semibold justify-center'> Adventures </h1>
    <p className='sm:text-xl md:text-2xl lg:text-2xl font-light justify-center pt-3 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elite<br/>Incidunt pariatur cumque, 
        voluptatibus porro provident<br/> debitis natus, magnam repudiandae, dolorem facere aspernatur.</p>
</div>





<br/>
</div>
  )
}

export default Services