import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useColorMode } from 'theme-ui';
import { Link } from 'react-scroll';

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


function MobileMenuToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [colorMode] = useColorMode();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" top-0 right-0 m-2">
            <button
                className={`p-2 rounded-lg focus:outline-none ${colorMode === 'default' ? 'bg-black text-white' : 'bg-white text-gray-800'
                    }`}
                onClick={toggleMenu}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isOpen && (
                <div
                    className={`absolute top-12 right-0 mt-2 py-2 px-4 rounded-lg shadow-lg ${colorMode === 'default' ? 'bg-white' : 'bg-black'
                        }`}
                >
                    {
                        links.map(({ id, link }) => (
                            <div className='px-4 cursor-pointer capitalize py-2 text-lg' key={id}>
                                <Link
                                    onClick={() => setIsOpen(!isOpen)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link> </div>
                        ))
                    }
                    <hr />
                </div>
            )}
        </div>
    );
}

export default MobileMenuToggle;
