import React from "react";
import { motion } from "framer-motion";
function Entrymen(props)
{
    return(
        <div className="men-column col-lg-4 col-md-6">

            <motion.div whileHover={{ scale: 1.2}} className ="card" style={{borderRadius:"0.5rem", width: "25em", height: "70vh"}}>
                
                <div className="card-header" style={{backgroundColor: "#EB984E ",borderRadius:"0.5rem"}}>
                    <h3 style={{color:"whitesmoke", marginTop:"1rem", fontSize: "1.5rem"}}>{props.name}</h3>
                    <h5 style={{marginLeft: "-8rem"}}>{props.subHeading}</h5>
                    
                </div>

                <div className="card-body" style={{borderRadius:"2rem"}}>
                   
                    <p>{props.descmen}</p>
                </div>
            
            </motion.div>

        </div>
    );
}

export default Entrymen;