import React from "react";
import { motion } from "framer-motion";
import './footer.css'

function Footer()
{
    return(
      <section id="contact">
          <div className = "mera">
            <footer className="footer">
              <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
              </div>
              <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a></li>
                <li className="social-icon__item"><a className="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a></li>
              </ul>
              <ul className="menu">
                <li className="menu__item"><a class="menu__link" href="#home">Home</a></li>
                <li className="menu__item"><a class="menu__link" href="#about_us">About</a></li>
                <li className="menu__item"><a class="menu__link" href="#course">Courses</a></li>
                <li className="menu__item"><a class="menu__link" href="#mentor">Mentors</a></li>
                <li className="menu__item"><a class="menu__link" href="#frequaskques">FAQ'S</a></li>

              </ul>
              <p>&copy;2022 Coding School | All Rights Reserved</p>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
      </section>




    );
}

export default Footer;