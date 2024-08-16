import React from 'react';
import Navbar from '../Navbar/Navbar';
import Few_details from '../Few_Details/Few_details';
import Footer from '../Footer/Foooter';
import './home.css';


const Home = () => {
    return (
        <>
            <Navbar />
        
            <div className="container-fluid ">
            <div className="mx-5 mainBox">
            <h1>hello</h1>
            <div className="d-flex">
                <div className="col-4 mainBox">
                <div className="d-flex flex-column justify-content-center align-items-center my-5">
                    <img src="" alt="" />
                    <h2>Vikas</h2>
                    </div>
                    <div className="d-flex">
                    <i class="fas fa-th mx-4"></i>
                    <p>DashBoard</p>
                    </div>
                    <div className="d-flex">
                    <i class="far fa-calendar-alt mx-4"></i>
                    <p>Appointments</p>
                    </div>
                    <div className="d-flex">
                    <i class="far fa-clock mx-4"></i>
                    <p>Schedule Timing</p>
                    </div>
                    <div className="d-flex">
                    <i class="fas fa-cog mx-4"></i>
                    <p>Update Profile</p>
                    </div>
                    <div className="d-flex">
                    <i class="fas fa-lock mx-4"></i>
                    <p>Change Password</p>
                    </div>
                    <div className="d-flex">
                    <i class="fas fa-sign-out-alt mx-4"></i>
                    <p>Logout</p>
                    </div>

                </div>
                <div className="col-8 mainBox">

                </div>
            </div>
            </div>
            

            </div>
               
            <Few_details />
            <Footer />
        </>
    )
}

export default Home
