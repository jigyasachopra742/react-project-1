import React from "react";
import { motion } from "framer-motion";
import './footer.css'

function Footer()
{
    return(
        <div className="container-fluid" id="contact">
            <div className="col-md-4">
            <span>
                <img  src="https://cdn4.iconfinder.com/data/icons/programming-52/64/Coding-binary-data-computer-programming-256.png" style={{height: "140px", marginTop: "60px", marginRight: "80em"}}></img>
                    <h2 style={{marginLeft:"1.6em", marginTop: "-8rem"}}>Coding school</h2> 
            </span>

            <p style={{marginLeft: "10rem"}}>
            Coding School was started with a mission to provide affordable and high quality education for everyone. With Udemy as our technology partner, we wish to bring all our courses with top-notch content to our students at pocket friendly prices with lifetime access.
            <br></br>
            <p style={{marginTop:"20px"}}>©2022 Coding Minutes. All rights reserved</p>
            </p>
            </div>


            <div className="col-md-3">
                <h2>Get In Touch</h2>
            </div>
        </div>
    );
}

export default Footer;