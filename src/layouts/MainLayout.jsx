import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <div className="relative min-h-screen">
                {/* Background Pattern */}
                <div className="fixed inset-0 -z-10">
                    <div className="h-full w-full bg-gradient-to-b from-blue-300 to-white"></div>
                </div>

                <header className="fixed w-full top-0 z-20">
                    <Navbar />
                </header>

                <main className="pt-20 z-10 relative">
                    <Outlet />
                </main>
                <Footer/>
            </div>





        </>
    );
};

export default MainLayout;