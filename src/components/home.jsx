import React from 'react';
import Navbar from './navbar';
import Header from './header';
import About_us from './about_us';
import Courses from './courses';

function Home()
{
    return(
        <div>
            <Navbar />
            <Header />
            <About_us />
            <Courses />
        </div>
    );
}

export default Home;