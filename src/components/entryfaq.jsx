import React from "react";
function Entryfaq(props){
    
    return(
        <div className="col-md-6" >
            <div class="my-3 p-4 bg-light" style={{height: "25vh"}}>
                <div class="d-flex align-items-start">
                    <div class="mr-3 bg-dark text-white rounded-circle">
                        <svg fill="currentColor" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g></svg>
                    </div>

                    <div className="">
                        <a href="#" class="text-dark stretched-link"><h6 class="mb-3" style={{fontWeight: "bold", fontSize: "1.1rem"}}>{props.ques}</h6></a>
                        <p class="text-secondary" style={{lineHeight: "2"}}>{props.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Entryfaq;