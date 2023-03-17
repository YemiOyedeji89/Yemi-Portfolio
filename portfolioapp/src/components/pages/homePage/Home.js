import React from 'react';
import me from './images/me.jpg';
import { NavLink } from 'react-router-dom';


import './style.css';


function Home() {
  

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello!</h1>
        <img  className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"src= {me} alt="Yemi's Picture"/>
       

       <p className="lead myName">I'm Yemi Oyedeji</p>
        <p className='intro'> Welcome! to my online profile, I'm ISTQB certified Software Test Engineer with over 6 years experience in the financial domain.
          I have been working on different Front and Backend development projects, and am excited to share this with you here.
          Please click below to find out more about this, and don't forget to get in touch. I'm open to pick up challenging roles that will build on my experiences an capabilities. </p>
        
        <p className="lead">
          <NavLink
            to="/projectgallery"
            className="btn "
            >
            Check it out
          </NavLink>
        </p>
         

        <p className="lead">
         
          <a href='YemiCV_032023Update.pdf'>Resume</a>
        </p>
      </div>
    </div>
  )
}

export default Home