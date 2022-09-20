import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       <form method="POST" action="https://getform.io/f/a0019ec9-87bc-4bc4-82f7-5a817658e246" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Vul hieronder het formulier in of stuur een mail - Marcobuitenhuis402@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Naam' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='E-mail' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Bericht'>

            </textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's collaborate
            </button>
        </form>  
    </div>
  )
}

export default Contact