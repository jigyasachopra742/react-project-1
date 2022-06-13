import React from "react";
function Entryfaq(props){
    
    return(
        <div>
            <div className="fa-column col-lg-4 col-md-6">

                <div className="card">

                    <div className="card-header">
                        <h3>{props.ques}</h3>
                    </div>

                    <div className="card-body">
                        <p>{props.paragraph}</p>
                    </div>
                
                </div>
            
            </div>
        
        </div>
    );

}

export default Entryfaq;