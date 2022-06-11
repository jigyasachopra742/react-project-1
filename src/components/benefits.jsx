import React from "react";
import './benefits.css';
import Entrybene from "./entrybene";
import Bene from "./bene";

function createBeneEntry(Bene)
{
    return(
        <Entrybene
            key={Bene.id}
            name={Bene.name}
            desc={Bene.desc}
        />
    );
    
}

function Benefits()
{
    return(
        <section id="bene">
            <h2 style={{color: "red"}}>Advantages of Joining the program</h2>
            <h6 style={{color: "darkblue"}}  >Now spend less than a pizza🍕 and learn more than ever✨💡</h6>

            <div className="row">
                {Bene.map(createBeneEntry)}
            </div>
        </section>
        
        
    );
}

export default Benefits;