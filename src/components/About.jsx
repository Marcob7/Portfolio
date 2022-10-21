import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#252525] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                   
                       
                        <h2 className='text-4xl font-bold inline border-b-4 border-[#003082]'>
                        Over mij
                        </h2> 
                     
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 sm:grid-rows-1 gap-8 px-4'>
            <div className='sm:text-left text-2xl font-bold'>
                    <p>Aangenaam kennis te maken :) </p>
                </div>  
                <div className='sm:text-left text-2xl font-bold'>
               
                    <p>Wat meer over mezelf 😎 </p>
                </div>  
                <div className='sm:text-left text-2xl'>
                <p className="font-size-[12pt]">Ik ben een: <br></br></p>
                <p className='text-1xl font-bold'>Creatieveling. Zelfverzekerd. Leergierig. Gamer. Sporter. Genieter. Leider. Pleziermaker. Vrolijk. Enthousiast.</p>
               
                <p className='text-1xl font-bold'>Persoon.</p>
                </div>   
                <div>
                <p>Met veel passie maak ik verschillende projecten. Zo ben ik gespecialiseerd in UX design, maar ben ik ook een ervaren front-end developer. 
                <br></br><br></br>Mijn doel is om ervoor te zorgen dat het leven wat gemakkelijker kan worden gemaakt. Met veel plezier maak ik software voor klanten op schaal van individueel niveau tot groot schalige bedrijven zoals de Belastingdienst. <br></br> Dit in combinatie met een goed design zorgt ervoor dat een doelgroep de gepaste oplossing geboden krijgt.</p>
                </div>   
               
            </div>
        </div>
    </div>
  )
}

export default About