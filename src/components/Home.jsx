// // eslint-disable-next-line
// import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import heroImg from '../assets/heroImage.jpg'
import { Link } from 'react-scroll'
// import { TypeAnimation } from 'react-type-animation';
import Typed from 'typed.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



import React from 'react'

const Home = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["I'm a Full Stack Developer", "I'm a Open Source Contributor", "I'm a Freelancer"],
            typeSpeed: 75,
            backSpeed: 75,
            
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);



    return (
        <>
            <div name='home' className="pt-28 md:flex-row space-x-16 space-y-9 flex flex-col mx-10 justify-center items-center">
                <div className=' w-fit '>
                    <h1 className="text-5xl font-semibold mb-4">Hi, I'm Mahammad Zubair</h1>
                    <span className='text-2xl font-semibold' ref={el} />
                    {/* { <div className='w-fit'>
                        <TypeAnimation
                        sequence={[
                            
                            'A Frontend Developer', // Deletes 'One' and types 'Two'
                            3000, // Waits 2s
                            // 'Two Three', // Types 'Three' without deleting 'Two'
                            'Open Source Contributor', // Deletes 'One' and types 'Two',
                            3000,
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '3em', width:'15em' }}
                    />
                    </div> } */}

                    <p className='text-gray-500 py-4 max-w-lg'>
                        Welcome to my portfolio! My name is Mahammad Zubair and I am a frontend web developer with a passion for creating engaging and intuitive user experiences. On this site, you'll find examples of my work and information about my background and experience.
                    </p>
                    <div className='flex space-x-2 items-center my-2'>
                        <Link to='portfolio' smooth duration={500} className='group flex items-center rounded-md px-6 py-3  w-fit bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer'>                      Portfolio
                            <span className='group-hover:rotate-90 duration-300 ml-1'><AiOutlineRight size={20} /></span>
                        </Link>
                        <a href="https://www.linkedin.com/in/mahammadzubair/"><LinkedInIcon fontSize='large' className='cursor-pointer' /></a>
                        <a href="https://github.com/Zubair-05"><GitHubIcon fontSize='large' className='cursor-pointer' /></a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={heroImg} width={200} alt="HeroImage" className='rounded-2xl' srcset="" />
                </div>
            </div>
        </>
    )
}

export default Home