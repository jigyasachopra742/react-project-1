import React from "react";
import './courses.css';
import Entry from "./entry";
import Cou from "./cou";


function createEntry(Cou)
{
    return(
        <Entry
            key={Cou.id}
            name={Cou.name}
            level={Cou.level}
            session={Cou.session}
            stars={Cou.stars}
            description={Cou.description}
            learn={Cou.learn}
            buttonname1 = {Cou.buttonname1}
            buttonname2 = {Cou.buttonname2}
            buttonname3 = {Cou.buttonname3}
            buttonname4 = {Cou.buttonname4}
    
        />
    );
   

}
function Courses()
{
    return(
        <section id = "abu">

            <h2 style={{color: "wheat"}}>A Plan for every aspiring student's Needs</h2>
            <h6 style={{color: "lightblue"}}  >Simple and affordable price plans for the courses</h6>

            <div className="row">
                {Cou.map(createEntry)}
            </div>
        </section>
    );
}

export default Courses;