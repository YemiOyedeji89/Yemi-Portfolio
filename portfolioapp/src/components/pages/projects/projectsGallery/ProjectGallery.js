import React from "react";
import Title from "../ProjectTitle/Title";
import ProjectsArr from '../projectsArr.json';


///FUNCTION TO DISPLAY ALL THE PROJECT WITH DESCRIPTION

function ProjectGallery () {
  
 
  return(
    <div>
      <h1 className="project-gallery-title">Project Gallery</h1>
      <hr></hr>
      <br></br>
      {ProjectsArr.map(projectsArr => (
          <div>
            <Title
            key={projectsArr.id}
            id={projectsArr.id}
            projectTitle={projectsArr.projectTitle}
            description ={projectsArr.description}
            />
            
          </div>
        ))
      }
    </div>
  )
  
  
}

export default ProjectGallery






