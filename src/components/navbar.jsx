import React from "react";
import './navbar.css';
function Navbar()
{
    return(
        <div>
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
                    <a class="nav-link" aria-current="page" href="#">Features</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link" href="#">Solutions💯</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link">Resources</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link">Pricing</a>
                    </li>
                </ul>

                <button type="button" class="btn btn-dark">Log In</button>
                <button type="button" class="btn btn-light">Try for free</button>
                

                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;