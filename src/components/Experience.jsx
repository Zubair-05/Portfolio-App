// eslint-disable-next-line
import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import cpp from "../assets/cpp.png"
import tailwind from "../assets/tailwind.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import mongodb from "../assets/mongodb.png"
import materialui from "../assets/materialui.png"
import nextjs from "../assets/nextjs.png"
const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-600'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:cpp,
            title:'C++',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:tailwind,
            title:'Tailwind CSS',
            style:'shadow-blue-300'
        },
        {
            id:7,
            src:git,
            title:'Git',
            style:'shadow-orange-500'
        },
        {
            id:8,
            src:github,
            title:'Github',
            style:'shadow-white'
        },
        {
            id:9,
            src:mongodb,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:10,
            src:materialui,
            title:'Material UI',
            style:'shadow-blue-500'
        },{
            id:11,
            src:nextjs,
            title:'Next JS',
            style:'shadow-black'
        }
    ]


  return (
    <div name = 'experience' className=' w-full my-32 pt-20'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-400 p-2 inline '>Experience</p>
                <p className='py-6'>These are the Technologies I worked with</p>
            </div>

            <div className='w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style}) => (
                        <div key='id' className={'cursor-pointer shadow-md bg-black hover:scale-105 duration-500 py-2 rounded-lg '+ style} >
                            <img src={src} className='w-20 mx-auto' alt=''/>
                            <p className='mt-4 text-white'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>


    </div>
  )
}

export default Experience