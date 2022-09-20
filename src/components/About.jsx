import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#003082]'>Over mij</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Nice to meet you 👋</p>
                </div>   
                <div>
                <p>Met veel passie maak ik verschillende projecten. Zo ben ik gespecialiseerd in UX design, maar ben ik ook een ervaren front-end developer. 
                Mijn doel is om ervoor te zorgen dat het leven wat gemakkelijker kan worden gemaakt. Met veel plezier maak ik software voor klanten op schaal van individueel niveau tot groot schalige bedrijven zoals de Belastingdienst. Dit in combinatie met een goed design zorgt ervoor dat een doelgroep de gepaste oplossing geboden krijgt.</p>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default About