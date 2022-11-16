import React from 'react'
import workImg from '../Assets/workImg.jpeg'
import realEstate from '../Assets/realestate.jpg'
import Servicedesk from '../Assets/homepagina_servicedesk.jpg'

function Work() { 
  return (
    <div name='work' className='bg-[#252525] w-full md:h-screen text-gray-300 pt-24'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#003082]'>Projecten</p>
            <p className='py-6'> // Bekijk hier mijn meest recente werk</p>
        </div>
      
        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 reveal'>

                {/*Grid item */}
                <div 
                style={{ backgroundImage: `url(${Servicedesk})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Selfservice portaal ICT-servicedesk
                </span> 
                <span className='text-sm px-10 py-10'>
                    <p>Een volledig selfservice portaal met uitgebreide functionaliteiten.</p>
                </span>
                <div className='pt-8 text-center'>
                    <a href="https://www.ubrijk.nl/actueel/nieuws/2021/12/16/van-afstudeeropdracht-tot-digitale-doe-het-zelfservice">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Lees meer</button>
                    </a>
                </div> 

                </div>
            </div>

            <div 
                style={{ backgroundImage: `url(${realEstate})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Genesys widget chat & callback
                </span> 
                <div className='pt-8 text-center'>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

                </div>
            </div>
            {/*Grid item */}
            <div 
                style={{ backgroundImage: `url(${workImg})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Lijn robot 
                </span> 
                <div className='pt-8 text-center'>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

                </div>
            </div>

            <div 
                style={{ backgroundImage: `url(${realEstate})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Dashboard
                </span> 
                <div className='pt-8 text-center'>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

                </div>
            </div>
            {/*Grid item */}
            <div 
                style={{ backgroundImage: `url(${workImg})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                   Fotovakschool redesign
                </span> 
                <div className='pt-8 text-center'>
                    <a href="./"> 
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </a>
                    <a href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>

                </div>
            </div>

            <div 
                style={{ backgroundImage: `url(${realEstate})` }}
                className='shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div'>
                
                {/*Hover effexts */}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    Ecommerce webshop met stripe
                </span> 
                <div className='pt-8 text-center'>
                    <button href="./"> 
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                    </button>
                    <button href="./">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                    </button> 
                </div>

                </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Work