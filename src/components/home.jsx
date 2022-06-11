import React from 'react';
import Navbar from './navbar';
import Header from './header';
import About_us from './about_us';
import Courses from './courses';
import Benefits from './benefits';
import Mentors from './mentors';
import Faq from './faq';


function Home()
{
    return(
        <div>
            <Navbar />
            <Header />
            <About_us />
            <Courses />
            <Benefits />
            <Mentors />
            <Faq />
        </div>
    );
}

export default Home;