import React from 'react'
import { useParams } from "react-router-dom";
import Projects from '../Projects'
import ProjectsArr from '../projectsArr.json';


////FUNCTION TO GENERATED A SINGLE INSTANCE OF THE PROJECT WHEN CLICKED
function ProjectDetails() {

    const routeParams = useParams();
    
    const projectId = ProjectsArr.filter((proj) => proj.id == routeParams.id)
    
    

  return (
    
        projectId.map(projectClicked =>(
        <Projects
        key={projectClicked.id}
        id={projectClicked.id}
        projectTitle={projectClicked.projectTitle}
        image={projectClicked.image}
        deployedURL={projectClicked.deployedURL}
        githubRepoURL={projectClicked.githubRepoURL}
        />

        ))
    
    )
    
  
}

export default ProjectDetails