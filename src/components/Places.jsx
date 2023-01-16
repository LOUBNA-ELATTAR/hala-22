import React from 'react'
import '../assets/styles/Places.css'


const Places = () => {


  return (

    <div className='w-4/5 m-auto mt-5'>
    <hr></hr>
      <div className='w-full xl:w-1/2 m-auto text-center my-10 space-y-5'>
        <h1 id='places' className='text-4xl font-bold'>Iconic Places</h1>
        <p  className='text-lg mb-5'>Do not miss visiting those places in Qatar!</p>
      </div>
      <div className='grid grid-rows-2 grid-flow-col gap-4 w-full h-[300px] md:h-[450px] pb-10 border-b'>
        <div className='row-span-1 col-span-2'>
          <a href="http://www.villaggioqatar.com/en" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/image1.jpg" alt="Villagio" />
          </a>
        </div>
        <div className='row-span-1 col-span-1'>
        <a href="https://www.katara.net/" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/katara.jpg" alt="" />
        </a>
        </div>
        <div className='row-span-1 col-span-1'>
        <a href="https://www.souq-waqif-doha.com/" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/souqwaqef.jpg" alt="" />
        </a>
        </div>
        <div className='row-span-2 col-span-1'>
        <a href="https://www.lusail.com/attraction2/lusail-marina-promenade/" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/image-2.jpg" alt="" />
        </a>
        </div>
        <div className='row-span-1 col-span-1'>
        <a href="https://mia.org.qa/en/" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/image.jpg" alt="" />
        </a>
        </div>
        <div className='row-span-1 col-span-1'>
        <a href="https://visitqatar.com/fr-fr/highlights/iconic-places/the-pearl-qatar" target='_blank'>
            <img className='w-full h-full object-cover rounded-md' src="images/city.jpg" alt="" />
        </a>
        </div>
      </div>

  </div>
      
  
    
  )
}

export default Places