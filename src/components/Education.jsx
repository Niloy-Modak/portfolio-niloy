import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <Fade>
            <div className='py-8'>
                <div className="flex justify-center items-center w-full">
                    <div className="bg-blue-300/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 p-6  w-full text-center">
                        <div className="flex text-gray-700 items-center justify-center mb-4">
                            <FaGraduationCap className="text-3xl  mr-2" />
                            <h2 className="text-2xl font-semibold">My Education</h2>
                        </div>
                        <p className="text-lg leading-relaxed font-light">
                            I’m currently studying{' '}
                            <span className="font-medium">
                                BSc (Honours) in Mathematics at Sherpur Government College, Sherpur
                            </span>
                            . I live in Sherpur Town, Bangladesh, and I’m currently in my second year.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default Education;