import React from 'react';
import banner from '../assets/profilePic.jpg'
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import ButtonI from './ui/ButtonI';
import {motion} from "framer-motion"

const Banner = () => {
    const container = (delay) =>({
        hidden: {x: -100, opacity:0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5, delay: delay}
        }
    })
    return (
        <div id="home" className='pt-14 '>
            <div className='flex flex-wrap'>

                <div className='w-full md:w-1/2 mb-12' >
                    <div className=' flex flex-col items-start gap-3 mt-0 md:mt-8 lg:mt-22'>

                        <motion.h1 
                        variants={container(0)}
                        initial= "hidden"
                        animate= "visible"
                        className='text-5xl lg:text-7xl tracking-tight '>
                            <span className='text-xl lg:text-3xl tracking-tight ml-1 text-gray-700'>
                                Hi, I am
                            </span> <br />
                            Niloy Modak
                        </motion.h1>

                        <motion.h3
                        variants={container(0.5)}
                        initial= "hidden"
                        animate= "visible"
                        className="bg-gradient-to-r mt-4 from-sky-300 via-slate-500 to-purple-500 bg-clip-text text-transparent
                        text-3xl lg:text-4xl text-shadow-2xs tracking-tight">
                            I am a Web developer
                        </motion.h3>
                        <motion.p
                        variants={container(1)}
                        initial= "hidden"
                        animate= "visible"
                        className='max-w-xl my-2 md:py-6 font-light tracking-tight text-gray-700'>
                            I'm passionate about coding and creating engaging web experiences. I specialize in building responsive, user friendly interfaces using React, Tailwind CSS, and MongoDB. I truly love what I do.
                        </motion.p>
                        <motion.div
                        variants={container(1)}
                        initial= "hidden"
                        animate= "visible"
                        className="flex justify-center items-center gap-4 mb-6">
                            <a href="https://www.linkedin.com/in/niloymodak" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-gray-700 hover:text-sky-600 transition" />
                            </a>
                            <a href="https://github.com/Niloy-Modak" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl text-gray-700 hover:text-gray-500 transition" />
                            </a>
                            <a href="https://x.com/NiloyModak42" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX className="text-2xl text-gray-700 hover:text-gray-500 transition" />
                            </a>
                            <a href="https://www.facebook.com/niloy.modak.499302" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 transition" />
                            </a>

                        </motion.div>
                        <motion.a
                        variants={container(1)}
                        initial= "hidden"
                        animate= "visible"
                        href='/niloy_modak_cv.pdf' download>
                            <ButtonI label='Download CV' />
                        </motion.a>



                    </div>
                </div>

                <div className='w-full md:w-1/2 lg:p-8 md:mt-12'>
                    <div className='flex justify-center'>
                        <motion.img
                        initial= {{x:100, opacity: 0}}
                        animate= {{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className='w-72 sm:w-72 md:w-80 lg:w-[462px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md  p-2 ring-1 ring-inset ring-white/10' src={banner} alt="profile pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;