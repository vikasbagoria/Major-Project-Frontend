import React from 'react';
import './few_details.css';
import logo from '../../img/logo.png';
const Few_details = () => {
    return (
        <>
            <div className="container-fluid footerchk">
                <div className="row few_card">
                    <div className="col-3">
                        <div className="details_card">
                            <div className="card-body">
                            <div className="d-flex align-items-center">
                            <img src={logo} className="image-fluid mx-1" />
                                <h2 className="card-title ">Fitness Forest</h2>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                                <p className="card-text"><i class="fas fa-phone-alt"></i> +91-98765 43210</p>
                                <p className="card-text"><i class="fas fa-envelope"></i> xyz.info@fitnessforest.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="details_card" style={{ width: '15rem' }}>
                            <div className="card-body">
                                <h5 className="card-title ml-4">Company</h5>
                                <ul className="li_style">
                                    <li>
                                        <a href="#" className="card_li">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Special Issues</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="details_card" style={{ width: '15rem' }}>
                            <div className="card-body">
                                <h5 className="card-title ml-4">ABOUT US</h5>
                                <ul className="li_style">
                                    <li>
                                        <a href="#" className="card_li">Our Vision</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Our Mission</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Meet The Team</a>
                                    </li>
                                    <li>
                                        <a href="#" className="card_li">Customer Service</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="details_card" style={{ width: '17rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">OPEN TIME</h5>
                                <p className="card-text"><i class="far fa-clock"></i> Mon-Fri 06:30am - 07:45pm</p>
                                <p className="card-text"><i class="far fa-clock"></i>  Sat-Sun 08:30am - 05:45pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Few_details
