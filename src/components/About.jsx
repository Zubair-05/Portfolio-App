// eslint-disable-next-line
import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                Hi there! My name is Mahammad Zubair and I am a frontend web developer with a passion for creating intuitive and engaging user experiences.
                I have a strong background in HTML, CSS, and JavaScript, and have experience working with frameworks like React. I'm currentky pursuing my B.Tech 3rd year in National Institute of Technology Warangal.
                </p>
                <br />
                <p className='text-xl'>
                Outside of work, I enjoy staying up to date with the latest web development trends and technologies and  always looking for ways to improve my skills , and also I enjoy spending time outdoors and playing chess. Thank you for visiting my portfolio. I hope you enjoy learning more about my work and experiences.
                </p>                
            </div>
        </div>
    )
}

export default About
