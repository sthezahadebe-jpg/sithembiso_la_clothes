import React from 'react';
import "../App.css";



const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='row'>
          <br />
          <h1 className='fw-bold'>Contact Us</h1>
          <h2 className="d-flex justify-content-center">
            <div className="col-xs-12 col-sm-4 img-hvr hvr-5">
            <img src='https://www.powproductphotography.com/wp-content/uploads/2021/06/clothing-photography.jpg' width='100%' height='550px' alt='...'/>
              <div className="text">
              
                <p className='fw-bold'>We would love to hear from you!</p>
              </div>
            </div>
          </h2>

          <form id="contact-form" method="POST">
            <div className="name">Full Name</div>
            <input className='name' placeholder="" type="text" width='100%' alt='...' />
            <div className="email">Email Address</div>
            <input className='email' placeholder="" type="email" />
            <div className="message">Message</div>
            <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
            <button type="submit"> Send Message</button>
          </form>

        </div>

      </div>
    </div>

  )
}

export default Contact;