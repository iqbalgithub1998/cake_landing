import React from 'react'

const ItemCard = (props) => {
  return (
    <div className='border flex justify-center items-center flex-col rounded-xl bg-transparent border-[#F4F4F5] py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-10 lg:px-16 space-y-1 hover:shadow-xl max-w-sm '>
        {props.children}
        <h2 className='text-2xl md:text-4xl font-semibold text-darkOrange '>{props.name}</h2>
    </div>
  )
}

export default ItemCard