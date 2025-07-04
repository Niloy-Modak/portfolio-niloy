import React from 'react';
import { GoDownload } from "react-icons/go";

const ButtonI = ({ label }) => {
    return (
        <button
            type="button"
            className="px-4 py-2 m-2 relative group rounded-2xl border border-primary/30 text-primary font-medium bg-sky-100/20 backdrop-blur-lg shadow-inner shadow-blue-200/10 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
        >
            {/* Hover expanding rotated background */}
            <span className="absolute w-64 h-0 bg-primary/80 rotate-45 -translate-x-20 top-1/2 transition-all duration-500 ease-in-out origin-center group-hover:h-64 group-hover:-translate-y-32 blur-sm"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 text-primary transition-colors duration-300 ease-in-out group-hover:text-white ">
                {label} <GoDownload size={22} />
            </span>
        </button>


    );
};

export default ButtonI;