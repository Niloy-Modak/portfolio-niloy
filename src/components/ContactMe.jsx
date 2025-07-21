import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Fade } from 'react-awesome-reveal';


const ContactMe = () => {
    return (
        <Fade>
            <section id="contact" className="w-full py-16 px-4 md:px-16 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl ring-1 ring-inset ring-white/10 text-white">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">Contact Me</h2>

                <div className="flex justify-center items-center flex-col lg:flex-row gap-10">
                    {/* Contact Info */}
                    <div className="  space-y-6">
                        <p className="text-lg text-center text-gray-600">
                            Feel free to reach out for collaborations, freelance projects, or just to say hello!
                        </p>

                        <div className="space-y-4">
                            <div className="flex justify-center items-center gap-3">
                                <FaEnvelope className="text-xl text-blue-400" />
                                <span className='text-gray-600'>niloymodak42@gmail.com</span>
                            </div>
                            <div className="flex justify-center  items-center gap-3">
                                <FaPhoneAlt className="text-xl text-green-400" />
                                <span className='text-gray-600'>+8801313535668</span>
                            </div>
                            <div className="flex justify-center  items-center gap-3">
                                <IoLogoWhatsapp className="text-xl text-green-400" />
                                <span className='text-gray-600'>+8801313535668</span>
                            </div>
                            <div className="flex justify-center  items-center gap-3">
                                <FaMapMarkerAlt className="text-xl text-red-400" />
                                <span className='text-gray-600'>Sherpur, Mymensingh, Bangladesh</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex justify-center items-center gap-4 mt-6">
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
                        </div>
                    </div>


                </div>
            </section>
        </Fade>
    );
};

export default ContactMe;