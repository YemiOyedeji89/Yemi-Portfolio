import React from 'react'
import './style.css'
import git from './images/git.jpg'
import node from './images/node-js.jpg'
import sql from './images/sql.jpg'
import Reactsample from './images/React.jpg'
import css from './images/css-image.jpeg'
import javascript from './images/Javascript-logo.png'
import html from './images/htmi-image.png'
import python from './images/python.jpg'


function Tools() {
  return (
  
    <div className='card-div jumbotron'>
      <h1>Tools</h1>
      <hr></hr>
      <br></br>

      <div className="row div-row">
        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={git} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={node} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={sql} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={Reactsample} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

      </div>   


      <div className="row div-row">
        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={css} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={javascript} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={html} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div class="card-body tool-card-body">
              <img src={python} className="card-img-top tool" alt=""/>
              </div>
          </div>
        </div>

      </div>   

    </div>
   
  )

 
}

export default Tools