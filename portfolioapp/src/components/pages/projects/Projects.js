import React from "react";

/////PROPS TO RENDER A SINGLE INSTANCE OF THE PROJECT WHEN CLICKED
function Projects(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.projectTitle} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Title:</strong> {props.projectTitle}
          </li>
          <li>
            <strong>URL:</strong> {props.deployedURL}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.githubRepoURL}
          </li>
        </ul>
      </div>
    </div>
  )
};
 

export default Projects;