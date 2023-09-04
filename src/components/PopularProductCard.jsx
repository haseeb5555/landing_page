import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name}
       width={280} 
       height={280 }
      />
      <div className=' mt-8 flex flex-col justify-start gap-2.5'>
          <img src={star} alt=""
           width={24}
           height={24}
          />
          <p className='font-montserrat text-xl text-slate-gray leading-normal'>4.5</p>
          <h3 className='mt-2 text-xl leading-none font-semibold font-palanquin'>{name}</h3>
           <p className='mt-2 font-montserrat text-coral-red leading-normal'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard
