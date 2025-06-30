import React from 'react';
import aboutImg from '../assets/profile-about.jpg'

const AboutMe = () => {
    return (
        <div id="about" className='my-14 md:my-22'>
            <h1 className='text-4xl text-center tracking-tight mt-6 mb-8 md:mb-10 font-bold text-gray-700'>
                About <span className=''>Me</span>
            </h1>

            <div className="flex flex-col lg:flex-row flex-wrap p-8
                    bg-white/10 
                    backdrop-blur-xl 
                    border border-white/20 
                    shadow-lg 
                    rounded-2xl 
                    ring-1 ring-inset ring-white/10 
                    transition-all duration-500">

                <div className='w-full lg:w-1/2 mb-8 md:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className=' md:w-[372px] lg:w-[444px] rounded-2xl' src={aboutImg} alt="" />
                    </div>
                </div>

                <div className='w-full lg:w-1/2  md:pt-8 md:px-8'>
                    <div className='flex  justify-center items-start '>
                        <p className='font-light tracking-tight'>
                            Hi, I’m <span className='font-medium'>Niloy Modak</span> , a fresh web developer with knowledge in both frontend and backend development. I’m currently studying <span className='font-medium'>BSc (Honours) in Mathematics at Sherpur Government College, Sherpur</span>. I live in Sherpur Town, Bangladesh, and I’m currently in my second year. <br /><br />
                            I have developed full-stack projects, including a Food Recipe website where users can add their own recipes with authentication, and a Car Rental System featuring user authentication, booking functionality, and secure backend integration. I also genuinely enjoy working on these kinds of projects. <br /><br />
                            My programming journey started at the end of 2024. I got inspired by watching <span className='font-medium'>Jhankar Mahbub</span> —his videos motivated me to explore programming more deeply. I then joined the Programming Hero Web development course, where I learned a lot and truly enjoyed the process. <br /> <br />
                            Besides programming, I also enjoy gaming in my free time. I always love to spend my free time with my family. I am working hard to support my father and my family financially.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;