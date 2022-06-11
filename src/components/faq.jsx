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
        <section id="fa">
            
            <h2 style={{color: "wheat"}}>Frequently Asked Questions🤔</h2>
            <div className="row">
                {Faques.map(createFaqEntry)}
            </div>
        
        </section>
    );

}

export default Faq;