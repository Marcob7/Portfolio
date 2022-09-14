import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
         
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#003082]'>Hallo, mijn naam is,</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Marco Buitenhuis</h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>Ik ben een Front-end developer &  UX designer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Mijn specialiteit is het maken van uitzonderlijke digitale experiences. Op het moment ben ik gefocussed op het maken en ontwerpen van responsive web applicaties.</p>
        <div className='flex items-center py-4'>
            <button className='text-white border-2 group px-6 py-3 mr-2 flex items-center hover:bg-[#003082] hover:border-[#003082]'>
                Download mijn Cv
                <span className='group-hover:rotate-90 duration-200'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
               <button className='text-white border-2 group px-6 py-3 mr-2 flex items-center hover:bg-[#003082] hover:border-[#003082]'>
                    Bekijk mijn werk
                <span className='group-hover:rotate-45 duration-200'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
        </div>

        </div>
    </div>
  ) 
} 

export default Home