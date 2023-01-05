import React from 'react'
import keeper  from '../assets/portfolio/keeper.png'
import weather from '../assets/portfolio/weather.png'
import simon from '../assets/portfolio/simon.png'
import drumkit from '../assets/portfolio/drumkit.png'


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:keeper,
            demo:'https://keeper-app-zubair05.netlify.app/',
            code:'https://github.com/Zubair-05/Keeper-App'
        },
        {
            id:2,
            src:weather,
            demo:'https://weather-app-zubair05.netlify.app/',
            code:'https://github.com/Zubair-05/Weather-App'
        },
        {
            id:3,
            src:simon,
            demo:'https://simongame-zubair05.netlify.app/',
            code:'https://github.com/Zubair-05/Simon-Game'
        },
        {
            id:4,
            src:drumkit,
            demo:'https://drumkit-zubair05.netlify.app/',
            code:'https://github.com/Zubair-05/Drum-Kit'
        },

    ]


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src, demo, code}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo}>Demo</a></button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code}>Code</a></button>
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