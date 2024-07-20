import React from 'react'

const Book = () => {
  return (
    <div className='h-full w-screen bg-gradient-to-b from-teal-700 to-teal-400' id="Book">
  <div className=' flex flex-col text-center'>
    <h1 className='text-3xl text-black underline mt-10 pt-10 text-center font-bold mb-10 pr-4'>Book Your Trip!</h1>
   <form className='flex flex-wrap justify-between'>


    <div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="name">Name</label>
   <input 
   type="text"
   id="name"
   name="name"
   className=' sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300  text-sm rounded-lg text-gray-900  '
   placeholder='Enter Your Name'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="Email">Email</label>
   <input 
   type="text"
   id="Email"
   name="Email"
   className=' sm:w-auto md:w-96 lg:w-96  py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Enter Your Email'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="Phone">Phone</label>
   <input 
   type="text"
   id="Phone"
   name="Phone"
   className=' sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Enter Your Mobile'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="Address">Address</label>
   <input 
   type="text"
   id="Address"
   name="Address"
   className='sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Enter Your Address'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="name">Where to</label>
   <input 
   type="text"
   id="Where"
   name="Where"
   className='sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Place you want to visit'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="HowMany">How Many</label>
   <input 
   type="Number"
   id="How"
   name="How Many"
   className='sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Number of Guest'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="Arrivals">Arrivals</label>
   <input 
   type="date"
   id="Arrivals"
   name="Arrivals"
   className='sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Place you want to visit'
   /></div>

<div className='w-full md:w-1/2 px-4 mb-4'>
   <label className='mb-2 block font-semibold' htmlFor="Leaving">Leaving</label>
   <input 
   type="date"
   id="Leaving"
   name="Leaving"
   className='sm:w-auto md:w-96 lg:w-96 py-2 px-3 border focus:border-blue-500 border-gray-300 bg-gray-50 text-sm rounded-lg text-gray-900  '
   placeholder='Place you want to visit'
   /></div>  
   <div className='w-full flex justify-center mb-8'>
   <button className='text-white bg-teal-700 text-md mt-10 px-6 py-3 rounded-lg border-2 hover:bg-teal-500 hover:scale-105 duration-200 cursor-pointer text-center '>Submit</button>
   </div>
   </form>
 </div>
</div>
  )
}

export default Book