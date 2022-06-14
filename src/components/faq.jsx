import React from "react";
import './faq.css';
import Entryfaq from "./entryfaq";
import Faques from "./faques";

function createFaqEntry(Faques)
{
    return(
        <Entryfaq 
            key={Faques.id}
            ques={Faques.ques}
            paragraph={Faques.paragraph}
        />
    );
}

function Faq(){
    
    return(
        <section id = "frequaskques">
            <div className="container my-5">
                <div className="text-center mb-5">
                    <span className="text-secondary text-uppercase">Questions</span>
                    <h2 className="text-capitalize font-weight-bold" style={{color: "wheat"}}>Frequently Asked <span>Questions</span></h2>
                </div>
        
                <div className="row">
                    {Faques.map(createFaqEntry)}
                </div>
                
            </div>
        </section>
    );

}

export default Faq;