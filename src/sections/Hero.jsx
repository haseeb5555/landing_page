import React ,{useState}from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
   <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen  gap-10 max-container'>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <p className='text-lg text-coral-red font-montserrat'>Our summer collection</p>
            <h1 className='mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold'><span className='xl:bg-white
             whitespace-nowrap relative z-10 pr-10'>The
                 New Arrival 
                </span>
                <br />
                <span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
                </h1>
                <p className='text-lg text-slate-gray mt-6 mb-14 font-montserrat sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Sua necessitatibus cum non repudiandae 
                    illo officiis.</p>
                    <Button label="show now " iconUrl={arrowRight}/>
                    <div className='flex  justify-start items-start flex-wrap w-full mt-20 gap-16'>
                {statistics.map((item)=>(
                    <div>
                        <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
                        <p className='leading-7 text-slate-gray font-montserrat'>{item.label}</p>
                    </div>
                ))}
                    </div>

        </div>
        <div className=' relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
         <img src={bigShoeImg} alt="bigshow"
           width={610}
           height={500}
           className='object-contain relative z-10'
         />
         <div className='flex absolute -bottom-[5%] sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe)=>(
            <div key={shoe}> 
                <ShoeCard imgUrl={shoe}
                  changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)

                  }
                  bigShoeImg={bigShoeImg}
                />
            </div>
        
            ))}
         </div>
        </div>
   </section>
  )
}

export default Hero
