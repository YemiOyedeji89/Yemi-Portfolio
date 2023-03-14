import React from "react";
import '../ProjectTitle/style.css';
import Projects from "../Projects";



function Title(props) {

 

    return (

        
        <div className="row">
            <div className="col-sm-3">
                <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">{props.projectTitle}</h5>
                        <p className="card-text">{props.description}</p>
                        <button type="button" className="btn btn-primary btn-lg" onClick={Projects} >Explore</button>
                    </div>
                </div>
            </div>
            
        </div>
        






        
        //   <button type="button" class="btn btn-primary btn-lg">{props.projectTitle}</button> 
        
        /*  <div className="content">
            <ul className="project-title" > 
                <li>
                <button type="button" class="btn btn-primary btn-lg">{props.projectTitle}</button>
                </li>
            </ul>
        </div>  */ 

        

        
    )
}
  
export default Title;