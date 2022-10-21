import React from 'react'
//import {HiArrowNarrowRight} from 'react-icons/hi'
import ProfilePic from '../Assets/profilephoto.jpg';
//import Goo from 'gooey-react';

const Home = () => {

  return (
    <> 
    


    <div name='home' className='w-full h-screen bg-[#252525] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          
            <div>
            </div>
        </div> 
        
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
            <div className='sm:text-left text-4xl font-bold'>
            <div className='text-left'>
            <p className='text-[#cce1f6] text-sm'>Hallo, mijn naam is,</p>
            </div>
            <h1 className='text-4xl sm:text-4xl font-bold text-[#d1dfed]'>Marco Buitenhuis</h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>Ik ben een Front-end developer &  UX designer.</h2>
        <div className='sm:text-left text-sm py-4'>
        <p>Mijn specialiteit is het maken van uitzonderlijke digitale experiences. Op het moment ben ik gefocussed op het maken en ontwerpen van responsive web applicaties.</p>
            </div>   
            <div className='text-sm flex items-center py-4'>
            <button className='group px-4 py-3 mr-2 flex items-center hover:bg-[#003082] hover:border-[#003082]'>
                Download mijn Cv
              
                </button>
               <button className='group px-4 py-3 mr-2 flex items-center hover:bg-[#003082] hover:border-[#003082]'>
                    Bekijk mijn werk
               
                </button>
            </div>
            </div>
            <div>
              
            <div className="flex flex-wrap justify-center">
  
                <div className="w-1/2">
                  <img src={ProfilePic} alt="profielfoto" className="border:radius-[5px] shadow-lg rounded max-w-full h-auto align-middle border-none" />

                </div> 
    

                </div>
                </div>   
        </div>
     
    </div>
</div>

</>
  ) 
} 

export default Home