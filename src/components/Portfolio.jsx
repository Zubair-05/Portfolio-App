import React from 'react'
import keeper from '../assets/portfolio/keeper.png'
import weather from '../assets/portfolio/weather.png'
import simon from '../assets/portfolio/simon.png'
import drumkit from '../assets/portfolio/drumkit.png'
import portfolio from '../assets/portfolio/portfolio.png'
import coursemart from '../assets/portfolio/coursemart.png'
import progresso from '../assets/portfolio/progresso.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: keeper,
            title: 'Keeper App',
            description: 'Keeper App is a clone of Google Keep. It is a note taking app where you can add, delete and edit notes.',
            demo: 'https://keeper-app-zubair05.netlify.app/',
            code: 'https://github.com/Zubair-05/Keeper-App'
        },
        {
            id: 2,
            src: weather,
            description: 'Weather App is a web application that shows the weather of any city in the world. It uses OpenWeatherMap API to fetch the weather data.',
            title: 'Weather App',
            demo: 'https://weather-app-zubair05.netlify.app/',
            code: 'https://github.com/Zubair-05/Weather-App'
        },
        {
            id: 3,
            src: portfolio,
            description: 'This is my portfolio website. It is a responsive website built using ReactJS and TailwindCSS.',
            title: 'Portfolio App',
            demo: 'https://portfolio-zubair05.netlify.app/',
            code: 'https://github.com/Zubair-05/Portfolio-App'
        },
        {
            id: 4,
            src: simon,
            description: 'Simon Game is a memory game where you have to remember the sequence of colors and repeat it. It is built using HTML, CSS and JavaScript.',
            title: 'Simon Game',
            demo: 'https://simongame-zubair05.netlify.app/',
            code: 'https://github.com/Zubair-05/Simon-Game'
        },
        {
            id: 5,
            src: drumkit,
            description: 'Drum Kit is a web application where you can play drums by pressing the keys on your keyboard. It is built using HTML, CSS and JavaScript.',
            title: 'Drum Kit',
            demo: 'https://drumkit-zubair05.netlify.app/',
            code: 'https://github.com/Zubair-05/Drum-Kit'
        },
        {
            id: 6,
            src: coursemart,
            description: 'Coursemart is a web application where you can find courses on various topics. It is built using MERN stack.',
            title: 'Coursemart',
            demo: 'https://course-mart-user-dashboard-zubair05.vercel.app/',
            code: 'https://github.com/Zubair-05/CourseMart-User-Dashboard'

        },
        {
            id: 7,
            src: progresso,
            description: 'Progresso is a task management app with drag-and-drop functionality for tracking tasks and projects and it is build using nextjs.',
            title : 'Progresso',
            demo:'https://progresso-xi.vercel.app/',
            code:'https://github.com/Zubair-05/Progresso'
        }
    ]



    return (
        <div name="portfolio" className=' my-32 w-full pt-20 '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 min-w-fit'>

                    {
                        portfolios.map(({ id, src, demo, code, title, description }) => (

                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:scale-105 duration-200 cursor-pointer">
                                <a href={demo}>
                                    <img class="rounded-t-lg" src={src} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href={demo}>
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                                    <a href={demo} class="inline-flex items-center px-3 mr-3 mb-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <span>Visit Page</span>
                                    </a>
                                    <a href={code} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <span>Github</span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio