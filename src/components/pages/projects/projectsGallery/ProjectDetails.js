import React from 'react';
import { useParams } from "react-router-dom";
import Projects from '../Projects'
import ProjectsArr from '../projectsArr.json';
import images1 from '../images/console_financial_Web_SceenShot.jpg';
import images2 from '../images/daily-planner_ScreenShot.jpg';
import images3 from '../images/Password-Generator_Screenshot.jpg';
import images4 from '../images/weather-dashboard_Screenshot.jpg';
import images5 from '../images/Git_generatedReadme.jpg';
import images6 from '../images/Screenshot-teamGenerated.jpg';





////FUNCTION TO GENERATED A SINGLE INSTANCE OF THE PROJECT WHEN CLICKED
function ProjectDetails() {
    
    const imagesList = [
       {id: 0,
        imagePath: images1},
       {id: 1,
        imagePath: images2},
       {id: 2,
        imagePath: images3},
       {id:3,
        imagePath: images4},
       {id:4,
        imagePath: images5},
       {id:5,
        imagePath: images6}
    ];
   
   

    const routeParams = useParams();
    
    const projectId = ProjectsArr.filter((proj) => proj.id == routeParams.id)

    let  imageClicked = imagesList.filter(image => image.id == routeParams.id)
    
   

  return (
    
        projectId && projectId.map(projectClicked =>(

        <Projects
        key={projectClicked.id}
        id={projectClicked.id}

        projectTitle={projectClicked.projectTitle}
        image={imageClicked[0].imagePath}
        
        deployedURL={projectClicked.deployedURL}
        githubRepoURL={projectClicked.githubRepoURL}
        description={projectClicked.description}
        />
        ))
    )
}

export default ProjectDetails