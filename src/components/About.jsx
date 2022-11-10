import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import monitor from '../Assets/monitor.png';

const About = () => {
  return (
    <>
    <div name='about' className='w-full h-screen bg-[#252525] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                   
                       
                       
                     
                </div> 
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:grid-rows-1 gap-12 px-4'>
            <div className='sm:text-left text-2xl font-bold'>
                </div>  
                <div className='sm:text-left text-2xl font-bold'>
              
                </div>  
                <div className='sm:text-left'>
                <h2 className='text-4xl font-bold inline border-b-4 border-[#003082] reveal'>
                        Over mij
                </h2> 
                <p className='mt-10'>Met veel passie maak ik verschillende projecten. Zo ben ik gespecialiseerd in UX design, maar ben ik ook een ervaren front-end developer. 
                <br></br><br></br>Mijn doel is om ervoor te zorgen dat het leven wat gemakkelijker kan worden gemaakt. Met veel plezier maak ik software voor klanten op schaal van individueel niveau tot groot schalige bedrijven zoals de Belastingdienst. <br></br> Dit in combinatie met een goed design zorgt ervoor dat een doelgroep de gepaste oplossing geboden krijgt.</p>
                </div>   
                <div className='sm:text-left image--monitor reveal'>
                <img alt="monitor" src={monitor} width={250} height={400} />
                </div>   
                <div>
              
                </div>   
               
            </div>
        </div>
    </div>
    <div>
  
    </div>
 
    </>
  )
}
 
export default About