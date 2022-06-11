import React from "react";
function Entrybene(props)
{
    return(
        <>
            <div className="bene-column col-lg-4 col-md-6">

                <div className="card benefits-card">

                    <div className="bene-card">
                        <h3>{props.name}</h3>
                    </div>

                    <div className="card-body">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Entrybene;