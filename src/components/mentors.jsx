import React from "react";
import './mentors.css'
import Entrymen from "./entrymen";
import Men from "./men";

function createMenEntry(Men)
{
    return(
        <Entrymen 
            key={Men.id}
            name={Men.name}
            subHeading={Men.subHeading}
            descmen={Men.descmen}
        />
    );
}

function Mentors()
{
    return(
        <section id="mentor">
            <section id="men">
                <h2 style={{color: "black"}}>Meet The Team🤩</h2>
                <div className="row">
                    {Men.map(createMenEntry)}
                </div>
            </section>
        </section>
    );
}

export default Mentors;