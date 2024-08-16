import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Few_details from '../Few_Details/Few_details';
import Footer from '../Footer/Foooter';
import person from './../../img/person.jpg';

const Appointments = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});

    const callprofile = async () => {
        try {
            const res = await fetch('/profile', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
            window.alert("Please Login with valid Details")
            history.push('/');
        }
    }

    useEffect(() => {
        callprofile();
    }, [])
    return (
        <>
            <Navbar />
            <form method="GET">
                <div className="container-fluid ">
                    <div className="mx-5 ">
                        <div className="p-3 mainBox">
                            <h1>hello {userData.name}</h1>
                        </div>
                        <div className="validres">
                            <div className="col-lg-4 mt-3 mainBox">
                                <div className="validuser" >
                                    <img src={person} alt="" height="250px" width="250px" />
                                    <h2>{userData.name}</h2>
                                </div>
                                <NavLink className="profileMenu" to="/profile">
                                    <i class="fas fa-th mx-4"></i>
                                    <span>DashBoard</span>
                                </NavLink>
                                <NavLink className="profileMenu" to="/profile/appointments">
                                    <i class="far fa-calendar-alt mx-4"></i>
                                    <span>Appointments</span>
                                </NavLink>
                                <NavLink className="profileMenu" to="/profile/scheduletiming">
                                    <i class="far fa-clock mx-4"></i>
                                    <span>Schedule Timing</span>
                                </NavLink>
                                <NavLink className="profileMenu" to="/profile/updateprofile">
                                    <i class="fas fa-cog mx-4"></i>
                                    <span>Update Profile</span>
                                </NavLink>
                                <NavLink className="profileMenu" to="/profile/updatepass">
                                    <i class="fas fa-lock mx-4"></i>
                                    <span>Change Password</span>
                                </NavLink>
                                <NavLink className="profileMenu" to="/logout">
                                    <i class="fas fa-sign-out-alt mx-4"></i>
                                    <span>Logout</span>
                                </NavLink>
                            </div>
                            <div className="col-lg-8 mt-3 ml-3 mainBox">
                                <div >
                                    <div>
                                        <p className="profilefont">Appointments :</p>
                                        <hr/>
                                    </div>
                                    <div>
                                    <p className="fs-0">Note:</p>
                                    <p>Please click the below button to start meeting.</p>
                                    <p>Please allow permission to camera and mic.</p>
                                    <br/>
                                    <NavLink className="btn btn-outline-secondary" to="/profile/appointments/meeting">
                                    <i class="fas fa-video"></i>
                                    &nbsp;&nbsp;&nbsp;
                                    <span>Start Meeting</span>
                                </NavLink>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Few_details />
            <Footer />
        </>
    )
}

export default Appointments

