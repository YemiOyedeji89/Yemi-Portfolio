import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbarStyle.css';

function Navbar() {
  return (
    <div id='navFixed'>

   
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <Link className="navbar-brand" to="/">
         Home
      </Link>
      {/*<a className="navbar-brand" href="#">Home</a>*/}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <NavLink
              to="/projectgallery"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Project Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Tools
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
    </div>
  )
}

export default Navbar;