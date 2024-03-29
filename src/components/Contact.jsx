// eslint-disable-next-line
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full   pt-20 '>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/7f34b6dc-45ac-44d6-8571-5b5f39143b05" 
                method='POST'
                className='flex flex-col w-full md:w-1/2 '>
                    <input
                        type="text" 
                        name="name" 
                        placeholder='Enter your Name'
                        className='p-2 bg-transparent border-2 rounded-md  focus:outline-none m-1'    
                    />
                    <input 
                        type="text"
                        name='email'
                        placeholder='Enter your email'
                        className='p-2 bg-transparent border-2 rounded-md  focus:outline-none m-1'    
                        />
                    <textarea 
                        name="message" 
                        placeholder='Enter your message'
                        rows='10'
                        className='p-2 bg-transparent border-2 rounded-md  focus:outline-none m-1'
                    ></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact