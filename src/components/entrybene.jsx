import React from "react";
function Entrybene(props)
{
    return(
        <>
            <div className="bene-column col-lg-3 col-md-12">

                <div className="card" style={{borderRadius:"0.5rem", width: "15em", height: "32vh"}}>

                    <div className="card-header" style={{backgroundColor:"whitesmoke"}}>
                        <h3>{props.name}</h3>
                    </div>

                    <div className="card-body" >
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Entrybene;