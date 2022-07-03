import React from 'react'
import ItemCard from './ItemCard';
import { GiCakeSlice,GiSandwich,GiSlicedBread } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import Image from 'next/image';
import cupCake from '../assets/cupcake.png';

const Welcome = () => {
  return (
    <>
    <div className='container mx-auto flex text-center flex-col justify-center items-center space-y-5 pt-20'>
        <h2 className='text-5xl font-semibold '>Welcome to Our Store</h2>
        <span className='max-w-xl lg:max-w-2xl text-darkGrayishBlue'>When it comes to desserts, cake probably “takes the cake” for
             being the champion of sweetness and goodness.
             I love it, you love it, everyone loves it!
             I love it, you love it, everyone loves it!
        </span>
        <div className='grid grid-cols-2 gap-1 lg:flex items-center lg:space-x-2  '>
            <ItemCard name="Cake"> 
              <GiCakeSlice className='text-darkOrange w-10 h-10 lg:w-16 lg:h-16' />
            </ItemCard>
            <ItemCard name="Sandwich"> 
              <GiSandwich className='text-darkOrange w-10 h-10 lg:w-16 lg:h-16' />
            </ItemCard>
            <ItemCard name="Cookies"> 
              <BiCookie className='text-darkOrange w-10 h-10 lg:w-16 lg:h-16' />
            </ItemCard>
            <ItemCard name="Bread"> 
              <GiSlicedBread className='text-darkOrange w-10 h-10 lg:w-16 lg:h-16' />
            </ItemCard>
        </div>
    </div>
    <div className='mt-10 flex space-x-2'>
      <div className='md:w-1/2 hidden md:flex'>
        <Image src={cupCake} alt="cupcake"  />
      </div>
      <div className ='px-5 md:p-0 flex justify-center text-center md:text-left  flex-col space-y-5 '>
          <h2 className='text-4xl font-semibold'>About
            Bake.Cake
          </h2>
          <span className='text-darkGrayishBlue md:max-w-md'>
          Whether you’re looking for the best quotes about
           cake to write in a card or some super cute cake 
           Instagram captions to go along with your homemade creation, 
           this is the ultimate list of cake captions.
          </span>
      </div>
    </div>
    </>
  )
}

export default Welcome;