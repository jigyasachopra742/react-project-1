import React from "react";
import './navbar.css';
import { motion } from "framer-motion"
function Navbar()
{
    return(
        <div class = "container-fluid">
            <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
            <div id = "nav-container" class="container">
                <a class="navbar-brand" href="#">
                    <span>
                        <img className="logo" src="https://cdn4.iconfinder.com/data/icons/programming-52/64/Coding-binary-data-computer-programming-256.png"></img>
                        Coding school    
                    </span>
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                   
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">About</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="#">Courses💯</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link">Mentors</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link">FAQ'S</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link">Contact</a>
                    </li>
                </ul>

                <motion.button whileHover={{ scale:1.2 }} type="button" class="btn btn-dark">Log In</motion.button>
                <motion.button whileHover={{ scale:1.2 }} type="button" class="btn btn-light">Try for free</motion.button>
                

                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;