import React from "react";
import { Link } from "react-router-dom";
import '../ProjectTitle/style.css';



////PROPS TO RENDER THE PROJECT TITLE AND DETAILS
function Title(props) {
   

    return (
        
        <Link to={`/projectgallery/${props.id}`}>
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <div class="card-body">
                        
                        <h5 className="card-title">{props.projectTitle}</h5>
                        <p className="card-text">{props.description}</p>
                        
                    </div>
                </div>
            </div>
            
        </div>   
        </Link>
        
    )
}
  
export default Title;