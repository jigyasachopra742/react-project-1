import React from "react";
import { motion } from "framer-motion";
function Entry(props)
{
    return(
        <>
            <div className="abu-column col-lg-4 col-md-6">

                <motion.div whileHover={{ scale: 1.2}} className="card" style={{height: "80vh"}}>
                    
                    <div className="card-header" style={{backgroundColor:"#DD2FD0 "}}>
                        <h3>{props.name}</h3>
                        <img>{props.imgURL}</img>
                    </div>

                    <div className="card-body">
                        <h2>{props.level}</h2>
                        <p>{props.session}</p>
                        <p>{props.stars}</p>
                        <p>{props.description}</p>
                        <p>{props.learn}</p>

                    
                        <button className="btn data-btn btn-md btn-block btn-light" type="button">{props.buttonname1}</button>
                        <button className="btn btn-md btn-block btn-light" type="button">{props.buttonname2}</button>
                        <button className="btn btn-md btn-block btn-light" type="button">{props.buttonname3}</button>
                        <button className="btn hash-btn btn-md btn-block btn-light" style={{marginLeft:"0em"}}type="button">{props.buttonname4}</button>
                        <button className="btn hash-btn btn-md btn-block btn-light" style={{marginLeft:"40px"}} type="button">{props.buttonname5}</button>
                        <button className="btn hash-btn btn-md btn-block btn-light" type="button" style={{marginLeft:"35px"}}>{props.buttonname6}</button>
                        <button className="btn hash-btn btn-md btn-block btn-light" type="button">{props.buttonname7}</button>
                    </div>

                </motion.div>
                
            </div>
        </>
    
    );
}

export default Entry;

