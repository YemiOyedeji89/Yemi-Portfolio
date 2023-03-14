import React, { Component } from "react";

import Title from "../ProjectTitle/Title";
import ProjectsArr from '../projectsArr.json';
 import Projects from "../Projects"; 
 


function ProjectGallery () {



  return(
    ProjectsArr && ProjectsArr.map(projectsArr => (
      <Title
      key={projectsArr.id}
      projectTitle={projectsArr.projectTitle}
      description ={projectsArr.description}
      
      />
      

    ))

     /*  <Projects
      key={ProjectsArr.id}
      projectTitle={ProjectsArr.projectTitle}
      deployedURL={ProjectsArr.deployedURL}
      githubRepoURL={ProjectsArr.githubRepoURL}
      image={ProjectsArr.image}
      />  */
  )
  
  
  
  
  
}

export default ProjectGallery






