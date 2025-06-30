import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiVite, SiVercel } from 'react-icons/si';

const SkillsSection = () => {
    const skills = [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-600" />, color: 'bg-orange-200' },
        { name: 'CSS', icon: <SiCss3 className="text-blue-600" />, color: 'bg-blue-200' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, color: 'bg-yellow-200' },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-cyan-200' },
        { name: 'React', icon: <SiReact className="text-blue-400" />, color: 'bg-blue-200' },
        { name: 'Nodejs', icon: <SiNodedotjs className="text-green-600" />, color: 'bg-green-200' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'bg-green-100' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, color: 'bg-yellow-100' },
        { name: 'Vite', icon: <SiVite className="text-purple-500" />, color: 'bg-purple-200' },
    ];

    return (
        <div id="skills" className="  py-10">
            <h1 className="text-gray-700 text-3xl font-bold text-center mb-8">My Skills</h1>
            <div className="p-8 bg-white/10 
                    backdrop-blur-xl 
                    border border-white/20 
                    shadow-lg 
                    rounded-2xl 
                    ring-1 ring-inset ring-white/10 
                    transition-all duration-500">
                <div>
                    <h1 className='text-center lg:text-2xl md:text-xl text-lg pb-8 lg:pb-12 tracking-tighter text-gray-600'>The technologies and programming languages I work with :</h1>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-6 '>
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center justify-center h-32 rounded-2xl ${skill.color} backdrop-blur-md shadow-md hover:scale-105 transition cursor-pointer`}
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <span className="text-black  font-semibold">{skill.name}</span>
                        </div>

                    ))}
                    <div className='flex flex-col items-center justify-center h-32 bg-black rounded-2xl backdrop-blur-md shadow-md hover:scale-105 transition cursor-pointer'>
                        <div className="text-4xl mb-2"><SiVercel className="text-white" /></div>
                        <span className="text-white  font-semibold">Vercel</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillsSection;