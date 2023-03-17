import React from "react";
import { Link } from "react-router-dom";
import '../ProjectTitle/style.css';



////PROPS TO RENDER THE PROJECT TITLE AND DETAILS
function Title(props) {
   

    return (
        <div className="divColm "> 

        
            <div className="row div-row  ">
                <div className="col-lg-6 col-md-6 col-sm-6 shadow-lg">
                    <div className="card jumbotron">
                        <div class="card-body">
                           
                            <h2 className="card-title">{props.projectTitle}</h2>
                            <p className="card-text">{props.description}</p>

                            <Link to={`/projectgallery/${props.id}`}>
                                <button className="btn">View project</button> 
                            </Link>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>   
       
    )
}
  
export default Title;