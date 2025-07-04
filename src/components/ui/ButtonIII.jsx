import React from 'react';
import { GoDownload } from "react-icons/go";

const ButtonIII = ({label, clsName}) => {
    return (
        <button className={`group relative inline-block px-6 py-2.5 text-sm uppercase font-medium rounded-full text-sky-50 text-shadow-2xs bg-primary/20 backdrop-blur-md border border-primary/30 shadow-inner shadow-primary/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)] active:translate-y-[1px] active:shadow-[0_3px_6px_rgba(0,0,0,0.2)] overflow-hidden hover:text-primary cursor-pointer ${clsName}`}>
            {/* Ripple animation span */}
            <span className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-100 transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.6] group-hover:opacity-0 -z-10"></span>
            <span className='flex justify-center items-center gap-1.5'>{label} <GoDownload size={22}/></span>
        </button>



    );
};

export default ButtonIII;