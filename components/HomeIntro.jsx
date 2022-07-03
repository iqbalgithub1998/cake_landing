import React from 'react'
import Image from 'next/image'
import cake1 from "../assets/cake1.png";


const HomeIntro = () => {
  
  return (
    <>
    <div className='container flex flex-col-reverse items-center md:flex-row mx-auto p-4 lg:p-0 '>
      <div className='flex flex-col justify-center text-center md:text-left md:w-1/2 space-y-4 lg:px-5'>
        <h1 className='text-4xl font-semibold   md:text-5xl lg:text-6xl'>
          The Perfect Backed
          Cake Everyday!
        </h1>
        <p className="text-center md:text-left md:max-w-lg text-darkGrayishBlue">
        Bakery Landing Page Design Concept designed by Emran Emon.
        Connect with them on Dribble ; 
        the global community for designers and creative professionals.
        </p>
        <div className="space-x-2">
          <button className='border bg-darkOrange rounded-full border-darkOrange w-32 h-10 text-white shadow-sm  hover:shadow-lg'>
            About us
          </button>
          <button className='border rounded-full border-darkOrange w-32 h-10 text-darkOrange hover:bg-darkOrange hover:text-white shadow-sm hover:shadow-lg'>
            Order now
          </button>
        </div>
      </div>
      <div className='md:w-1/2'>
        <Image src={cake1} alt="cake1" />
      </div>
    </div>
    </>
  )
}

export default HomeIntro;