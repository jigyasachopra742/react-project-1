import React from 'react';
import './about_us.css';
import {motion} from 'framer-motion'
function About_us()
{
   return(   
     
      <div className='box'>
         <img className='about_img' src='https://www.codingminutes.com/static/media/header-image.9aa88f5aab8a31248bb3.png'></img>
            <div className='col-lg-12'>
               <div className='about-content'>
                  <div>
                     
                     <div className='about-text'>
                        <motion.h2 whileHover={{ scale: 2}}> About The Platform </motion.h2>
                        <motion.p whileHover={{ scale: 1.5}}
                           >
                          There's a myriad of information out there. 
                           A mentor helps navigate the complexities of life and find the best path based on your long term goals.
                           We helped our mentees get placed in organisations like Google, Microsoft, Amazon, 
                           Bloomberg, ByteDance, Adobe, Goldman Sachs, Intuit, Flipkart, Visa, Walmart, Arcesium, 
                           DE Shaw, Postman, Accenture, Myntra, Paytm etc.
                        </motion.p>
                     </div>
                  </div>
               </div>
            </div>
         
         
      </div>

      
        
 
      
   );
}

export default About_us;