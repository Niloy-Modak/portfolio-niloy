import React from 'react';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import Education from '../components/Education';
import MyProjects from '../components/MyProjects';
import ContactMe from '../components/ContactMe';

const Home = () => {
    return (
        <div id="home" className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <Banner/>
            <AboutMe/>
            <SkillsSection/>
            <Education/>
            <MyProjects/>
            <ContactMe/>
        </div>
    );
};

export default Home;