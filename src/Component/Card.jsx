import React from 'react'

export default function Card({image, number, onhandleClick}) {
  return <div className='w-full sm:w-1/2 md:w-1/3 cursor-pointer p-3 '>
    <img src={image} className='w-full rounded-md  ' onClick={() => onhandleClick(number)}/>
  
  </div>
}
