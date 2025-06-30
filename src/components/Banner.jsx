import React from 'react';
import banner from '../assets/profilePic.jpg'
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='pt-14'>
            <div className='flex flex-wrap'>

                <div className='w-full md:w-1/2 mb-12' >
                    <div className=' flex flex-col items-start gap-3 mt-8 md:mt-18 lg:mt-32'>

                        <h1 className='text-5xl lg:text-7xl tracking-tight '>
                            <span className='text-xl lg:text-3xl tracking-tight ml-1 text-gray-700'>
                                Hi, I am
                            </span> <br />
                            Niloy Modak
                        </h1>

                        <h3 className="bg-gradient-to-r mt-4 from-sky-300 via-slate-500 to-purple-500 bg-clip-text text-transparent
                        text-3xl lg:text-4xl text-shadow-2xs tracking-tight">
                            I am a Web developer
                        </h3>
                        <p className='max-w-xl my-2 md:py-6 font-light tracking-tight text-gray-700'>
                            I'm passionate about coding and creating engaging web experiences. I specialize in building responsive, user friendly interfaces using React, Tailwind CSS, and MongoDB. I truly love what I do.
                        </p>
                        <div className="flex justify-center items-center gap-4 mb-6">
                            <a href="https://github.com/Niloy-Modak" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl text-gray-700 hover:text-gray-500 transition" />
                            </a>
                            <a href="https://x.com/NiloyModak42" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX className="text-2xl text-gray-700 hover:text-gray-500 transition" />
                            </a>
                            <a href="https://www.facebook.com/niloy.modak.499302" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl text-gray-700 hover:text-blue-600 transition" />
                            </a>
                        </div>
                        <a href='/cv-pdf.pdf' download>
                            <button className='btn btn-primary'>
                                Download CV
                            </button>
                        </a>

                    </div>
                </div>

                <div className='w-full md:w-1/2 lg:p-8 md:mt-12'>
                    <div className='flex justify-center'>
                        <img className='w-[382px] lg:w-[462px] rounded-full shadow-2xs' src={banner} alt="profile pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;