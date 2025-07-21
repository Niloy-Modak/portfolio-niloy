import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import logo from "../assets/NM-logo.png";
import { Link } from 'react-scroll';
import ButtonIII from './ui/ButtonIII';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 md:py-4">
                {/* Logo */}
                <div className='flex items-center gap-2'>
                    <img src={logo} className='w-10 md:w-12' alt="logo" />
                    <h1 className='text-2xl font-bold hover:scale-105 transition-all text-[#2c6fb3]'>
                        Niloy
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center gap-10 font-semibold text-base'>
                    <li className='p-2 hover:bg-secondary hover:text-white text-gray-700 rounded-md transition-all cursor-pointer'>
                        <Link to="home" smooth={true} duration={500} offset={-80}>Home</Link>
                    </li>
                    {[
                        { label: 'About Me', to: 'about' },
                        { label: 'Skills', to: 'skills' },
                        { label: 'Contact me', to: 'contact' },
                    ].map((item) => (
                        <li key={item.to} className='p-2 hover:bg-secondary text-gray-700 hover:text-white rounded-md transition-all cursor-pointer'>
                            <Link to={item.to} smooth={true} duration={500} offset={-80}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Download CV + Mobile Menu */}
                <div className='flex items-center gap-4'>
                    <div className='hidden md:block'>
                        <a href='/niloy_modak_cv.pdf' download >
                            <ButtonIII label='Download CV' />
                        </a>
                    </div>


                    {/* Mobile Toggle Button */}
                    <div className='lg:hidden relative' ref={menuRef}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setMenuOpen(!menuOpen);
                            }}
                            className='p-2 rounded-md hover:bg-white/20 transition cursor-pointer'
                        >
                            <FaBars className='text-xl text-gray-700' />
                        </button>

                        {/* Mobile Dropdown Menu */}
                        <div
                            className={`absolute top-12 right-0 w-72 rounded-2xl shadow-lg border  transform transition-all duration-300 ease-in-out z-50 border-white/20 backdrop-blur-xl bg-blue-200/75 
                             ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                        >
                            <ul className="flex flex-col items-center text-lg font-semibold py-4 text-gray-600 md:text-gray-50">
                                {[
                                    { label: 'Home', to: 'home' },
                                    { label: 'About Me', to: 'about' },
                                    { label: 'Skills', to: 'skills' },
                                    { label: 'Contact me', to: 'contact' },
                                ].map((item) => (
                                    <li
                                        key={item.to}
                                        onClick={handleLinkClick}
                                        className="w-full text-center py-3 px-4 text-sky-700  text-shadow-xs
                                         hover:bg-sky-600 hover:text-white transition-all cursor-pointer"
                                    >
                                        <Link to={item.to} className='w-full' smooth={true} duration={500} offset={-80}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="mt-2">
                                    <div className='md:hidden'>
                                        <a href="/niloy_modak_cv.pdf" download>
                                            <ButtonIII label="Download CV" />
                                        </a>
                                    </div>

                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
