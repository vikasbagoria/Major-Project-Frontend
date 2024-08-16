import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as RB from 'react-bootstrap';
import './contact.css';


const Contact = () => {

    const[show,setShow] = useState(false); 

    return (
        <>
            <div className="pt-5 mt-5" id="contact">
                <div className="text-center">
                    <h1 className="display-4" >CONTACT US</h1>
                    <hr className="w-25 mx-auto" /> </div>
            </div>
            <div className="container-fluid contact_main" >
                <div className="row contres">
                    <div className="col-6 contact_form" >
                        <div className="my-5 " >
                        <iframe className="border border-info rounded mapres" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.804540327832!2d77.07077705633478!3d28.47348874245488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190492e81db3%3A0x60a6ca34d486cdf3!2sIFFCO%20Forest%2C%20Block%20B%2C%20IFFCO%20Colony%2C%20Sector%2017%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1625779091120!5m2!1sen!2sin" width="500" height="500"  allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-6 my-5 py-1 pr-5 contact_form" >
                    <div className="cont_res">
                    <div className="row">
                    <h2>Enter Your Details</h2>
                        <p>To be invited to the nearest Call center and get free physical advice to learn more about the program.</p>
                    </div>
                        <div className="row mt-2 mb-5 py-1">
                            <div className="col">
                                <input type="text" className="form-control rounded-pill" style={{height:"120%", width:"80%"}} placeholder="First Name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control rounded-pill " style={{height:"120%", width:"80%"}} placeholder="Last Name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row my-5  py-1">
                            <div className="col">
                                <input type="number" className="form-control rounded-pill" style={{height:"120%", width:"80%"}} placeholder="Phone Number" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control rounded-pill" style={{height:"120%", width:"80%"}} placeholder="Your Email" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="form-floating my-5 py-1">
                            <textarea className="form-control rounded-pill" style={{height:"120%", width:"91%"}} placeholder="Leave a Message here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Message:</label>
                        </div>
                        <button type="button" style={{width:"20%"}} onClick={()=>setShow(true)} className="btn btn-outline-success btn-lg rounded-pill">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
            <RB.Row className="float-right">
            <RB.Col xs={6}>
        <RB.Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <RB.Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">@Support</strong>
            <small>1 mins ago</small>
          </RB.Toast.Header>
          <RB.Toast.Body>Our Team Contact you shortly!</RB.Toast.Body>
        </RB.Toast>
      </RB.Col>
      </RB.Row>
        </>
    )
}

export default Contact;
