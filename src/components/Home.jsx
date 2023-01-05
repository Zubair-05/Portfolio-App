// eslint-disable-next-line
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import heroImg from '../assets/heroImage.png'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='text-white flex flex-col justify-center h-full' >
                    {/* <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Frontend Developer</h2> */}
                    <TypeAnimation
                        sequence={[
                            "I'm Mahammad Zubair", // Types 'One'
                            3000, // Waits 1s
                            'A Frontend Developer', // Deletes 'One' and types 'Two'
                            3000, // Waits 2s
                            // 'Two Three', // Types 'Three' without deleting 'Two'
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '4em', width:'11em' }}
                    />
                    <p className='text-gray-500 py-4 max-w-md'>
                    Welcome to my portfolio! My name is Mahammad Zubair and I am a frontend web developer with a passion for creating engaging and intuitive user experiences. On this site, you'll find examples of my work and information about my background and experience.                    </p>
                    <Link to='portfolio' smooth duration={500} className='group flex items-center rounded-md px-6 py-3 my-2 w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 ml-1'><AiOutlineRight size={20} /></span>
                    </Link>
                </div>
                <div>
                    <img src={heroImg} width={100} alt='My profile' className="rounded-2xl mx-auto w-96" />
                </div>
            </div>
        </div>
    )
}

export default Home