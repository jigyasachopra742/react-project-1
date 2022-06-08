import React from "react";
import './header.css';
import {motion} from "framer-motion"
function Header() //import the function name 
{
    // Some random colors
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

        const numBalls = 50;
        const balls = [];

        for (let i = 0; i < numBalls; i++) 
        {
            let ball = document.createElement("div");
            ball.classList.add("ball");
            ball.style.background = colors[Math.floor(Math.random() * colors.length)];
            ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
            ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
            ball.style.transform = `scale(${Math.random()})`;
            ball.style.width = `${Math.random()}em`;
            ball.style.height = ball.style.width;
            
            balls.push(ball);
            document.body.append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => 
        {
            let to = 
            {
                x: Math.random() * (i % 2 === 0 ? -11 : 11),
                y: Math.random() * 12
            };

            let anim = el.animate
            (
                [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
                ],
                {
                duration: (Math.random() + 1) * 2000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
                }
            );
        });

        const opacity = [0.8, 0.9, 1];
        function num()
        {
            let idx = Math.floor(Math.random() * 2);
            return idx;
        }

    return(
    <div className="container-fluid">
      <div className="row" style={{overflow:"hidden"}}>
        <div className="col-lg-6">
            
            <h1>Get help with
                Coding from 
                Engineers.
            </h1>
            
            <h5>
                Learn How to Code efficiently and create 
                apps and games that work. Consult with 
                best experts to apply skills in action.
            </h5>

            <motion.button whileHover={{ scale: 1.2}} type="button" class="btn btn-dark btn-lg download-button">  Start Learning</motion.button>
            <motion.button whileHover={{ scale: 1.2}} type="button" class="btn btn-light btn-lg download-button"><i class="fab fa-google-play"></i>  Watch Video</motion.button>
      

            <div className="col-lg-12">
                <img className="coding" src = "https://imgs.developpaper.com/imgs/2993519687-c203a7b973b06316_articlex.png"></img>
                <img className="codingboy" src="https://cdn1.iconfinder.com/data/icons/people-career-for-business/64/Artboard_2-512.png"></img>
            </div>
        </div>
       
      </div>
    </div>
    );
}

export default Header;