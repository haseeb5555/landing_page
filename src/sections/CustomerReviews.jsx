import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
           <h3 className='font-palanquin text-center text-4xl font-bold'> What Our<span className='text-coral-red'> Customer</span> says?</h3>
           <p className='info-center m-auto mt-4 max-w-lg text-center'>Here stoeries from our customer that say about our quality products</p>
           <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                  {reviews.map((item)=>(
                    <ReviewCard key={item.customerName} {...item}/>
                  ))}
           </div>
    </section>
  )
}

export default CustomerReviews
