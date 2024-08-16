import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Few_details from '../Few_Details/Few_details';
import Footer from '../Footer/Foooter';
import person from './../../img/person.jpg';

const Updateprofile = () => {
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
                                    <span >DashBoard</span>
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
                                <div className="d-flex flex-column   mt-5 " >
                                    <div className="my-2 bg-dark-gray fs-2">
                                        <p>Personal Details</p>
                                    </div>
                                    <div >
                                        <form >
                                        <div className="d-flex justify-content-around">
                                        <div className="d-flex flex-column ">
                                        <label htmlFor="">First Name:</label>
                                            <input type="text"  placeholder="First Name" className="form-control"  />
                                            </div>
                                        <div className="d-flex flex-column">
                                        <label htmlFor="">Last Name:</label>
                                            <input type="text"  placeholder="Last Name" className="form-control"  />
                                            </div>
                                            </div>
                                        <div className="d-flex justify-content-around">
                                        <div className="d-flex flex-column">
                                        <label htmlFor="">Phone:</label>
                                            <input type="text"  placeholder="Phone" className="form-control"  />
                                            </div>
                                        <div className="d-flex flex-column">
                                        <label htmlFor="">Date of Birth:</label>
                                            <input type="date"  placeholder="dd-mm-yyyy" className="form-control"  />
                                            </div>
                                            </div>
                                        <div className="d-flex flex-column ">
                                        <label htmlFor="">Gender:</label>
                                        <select type="text"  placeholder="Phone" className="form-control" >
                                        <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            </select>
                                            </div>
                                        <div className="d-flex flex-column"> 
                                        <label htmlFor="">About:</label>
                                            <textarea type="text"  placeholder="Write about yourself..." className="form-control"  />
                                            </div>
                                            <br/>
                                           <input type="submit" className="btn-success px-3" value="Submit" />
                                        </form>
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

export default Updateprofile;
