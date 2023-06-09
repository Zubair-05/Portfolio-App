// eslint-disable-next-line
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import {  useColorMode } from 'theme-ui';
import MobileMenuToggle from './MobileMenuToggle'

const Navbar = () => {


    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]

    const [colorMode, setColorMode] = useColorMode();

    const toggleColorMode = () => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
    };



    return (

        <div id='navbar' className=' flex justify-between items-center px-4  h-20   top-0 left-0 right-0'>
            <div>
                <h1 className='text-5xl font-signature ml-2 '>Mahammad</h1>
            </div>

            <ul className='hidden md:flex'>
                {
                    links.map(({ id, link }) => (
                        <li className='px-4 cursor-pointer capitalize text-xl hover:scale-105 duration-200' key={id}
                        >
                            <Link
                                to={link}
                                smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))
                }
                {
                    (colorMode === 'dark') ? (<LightModeIcon onClick={toggleColorMode} className='cursor-pointer' />) : (<BedtimeOutlinedIcon onClick={toggleColorMode} className='cursor-pointer' />)
                }
            </ul>


            <div className='md:hidden flex space-x-1'>
                <div className="">
                {
                    (colorMode === 'dark') ? (<LightModeIcon onClick={toggleColorMode} className='cursor-pointer top-0 right-0 m-2' fontSize='large'/>) : (<BedtimeOutlinedIcon onClick={toggleColorMode} className='cursor-pointer top-0 right-0 m-2' fontSize='large'/>)
                }
                </div>
                <div className="">
                    <MobileMenuToggle />
                </div>
            </div>

        </div>

    )
}

export default Navbar