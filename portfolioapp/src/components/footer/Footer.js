import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
function Footer() {
  return (

    <div className='footer-sec'>
      <div className="card">
        <div className="card-body footer-bar">
          
          <p className="card-text">
            <Link
            to="https://www.linkedin.com/in/yemi-oyedeji-306251199/"
            className="me "
            >
            Linkedin page
          </Link></p>
          <h6>Copyrigt: @Yemi Oyedeji</h6>
        </div>
      </div>

    </div>
  )
}

export default Footer