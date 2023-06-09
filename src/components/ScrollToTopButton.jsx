import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll'
function ScrollToTopButton() {
    

    return (
        <button
            className="fixed bottom-4 right-4 bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-600"
            onClick={() => window.scrollTo(0, 0)}
        >
            
            <Link
                to='navbar'
                smooth={true} 
                duration={500}
                
                >
                <FaArrowUp />
            </Link>
                {/* <FaArrowUp /> */}
        </button>
    );
}

export default ScrollToTopButton;
