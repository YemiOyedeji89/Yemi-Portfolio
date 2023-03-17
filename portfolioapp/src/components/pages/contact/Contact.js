import React from 'react'
import './style.css';


function Contact() {
  
  return (
    <div className='cont-section jumbotron'>
      <div>
        <h1>Contact</h1>
      </div>

      <div className="card  cont-card" >
        <div class="card-header">
          Contact details
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            Call: +447903613357</li>
          <li className="list-group-item">Email: yemi.oyedeji89@gmail.com</li>
          <li className="list-group-item">Location: London, United Kingdom</li>
        
        </ul>
      </div>

      <div>
        <p className='contact-mssg'>Please do leave me a message and i will get back to you.</p>

        <form className='contact-form'>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Leave a message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" id='contact-btn'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact