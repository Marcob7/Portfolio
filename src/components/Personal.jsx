import React from 'react'
//import banner from '../Assets/banner.png'; 
//import goodVibesImage from '../Assets/goodvibes.png';

const Personal = () => {
  return (
    <>
    <div name='about' className='w-full h-screen bg-[#252525] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        
            <div className='max-w-[1300px] w-full grid sm:grid-cols-2 sm:grid-rows-1 auto gap-16 px-4'>
               {/*grid*/}
            <div className='sm:text-left'>
                <h2 className='text-5xl font-bold inline border-b-4 border-[#8685ef] reveal'>
                       About me 
                </h2> 
                <p className='mt-10'>
                  Currently i'm working on different projects with a lot of passion. I am specialized in UX design, but i'm also an experienced front-end developer. 
                 
                <br></br><br></br> My goal is to make life a little bit easier. With much joy i make software for clients on a scale from individual level to big companies like 'de Belastingdienst'. 
               <br></br>
                This in combination with good design choises will make sure that the clients get the solutions they deserve.
                </p>
                </div> 

               
               
                
               
                {/*grid*/}
                
                <div className="card flex-end">
                  
                <div className='card-content'>
              
                <h2 className='reveal'>Name: Marco Buitenhuis</h2>
                <h2 className='reveal'>Age: 27</h2>
                <h2 className='reveal'>Hobbies: Football, gaming, working out</h2>
                <h2 className='reveal'>Loves: Coffee, travelling, dogs</h2>
                
                </div>
                </div>
               
                   
               
               
            </div>
        </div>
    </div>
    <div>
  
    </div> 
 
    </>
  )
}
 
export default Personal