import React from "react";
function Entrymen(props)
{
    return(
        <div className="men-column col-lg-4 col-md-6">

            <div className="card">
                
                <div className="card-header">
                    <h3>{props.name}</h3>
                    <img>{props.imgURL}</img>
                </div>

                <div className="card-body">
                    <p>{props.descmen}</p>
                </div>
            
            </div>

        </div>
    );
}

export default Entrymen;