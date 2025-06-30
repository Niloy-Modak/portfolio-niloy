import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-blue-300/30 backdrop-blur-lg border-t border-white/20 text-center py-8 text-sm text-gray-700 mt-12">
            &copy; {new Date().getFullYear()} Niloy Modak. All rights reserved.
        </footer>
    );
};

export default Footer;