import React from "react";
import { Link} from "react-router-dom";
import ProjectGallery from "./projectsGallery/ProjectGallery";

import './projectsGallery/style.css'


/////PROPS TO RENDER A SINGLE INSTANCE OF THE PROJECT WHEN CLICKED
function Projects(props) {

  return (
    <div>
      <h1>{props.projectTitle}</h1>
      <hr></hr>
      <br></br>

      <div className="card dis-card jumbotron ">
      
        <img className="card-img-top pro-image " alt={props.projectTitle} src=
        {props.image} />

        <div className="card-body">
          <h2 className="card-title">
              {props.projectTitle}
            </h2>
            <p className="card-text">{props.description}</p>
        </div>
    
      
        <div className="card-body">

          <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <Link to={props.deployedURL}>
              <strong className="card-link">Deployed URL</strong> 
              </Link>
            </li>

            <li className="list-group-item">
              <Link to={props.githubRepoURL}>
                <strong className="card-link">GitHub Repo</strong> 
              </Link>
            </li>

          </ul>
          
        </div>

      </div>

    </div>
    
  )
};
 

export default Projects;