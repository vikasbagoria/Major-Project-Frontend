import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Few_details from '../Few_Details/Few_details';
import Footer from '../Footer/Foooter';
import person from './../../img/person.jpg';

const Updatepass = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({});
  const [email, setEmail] = useState('');
  const [newPass, setNewPassword] = useState('');
  const [cnewPass, setCNewPassword] = useState('');

  
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

    const ChangePassword = async (e) => {
        e.preventDefault()
        if(newPass!==cnewPass){
            window.alert("Password is not Matching");
            history.push('./updatepass');
            setNewPassword("");
            setCNewPassword("");
        }
    
        const responce = await fetch('/profile/updatepass', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            newPass,email
          }),
        })
    
        const data1 = await responce.json()
    
        if (responce.status === 422 || !data1) {
          window.alert('Password not Changed')
        } else {
          console.log('Password Changed')
          window.alert('Password Changed')
          setNewPassword('') //clear input box
          setCNewPassword(""); //clear input box
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
                                <div className="d-flex flex-column justify-content-center align-items-center fs-4 mt-5 " >
                                    <div className="my-2 bg-dark-gray">
                                        <p>Change Password</p>
                                    </div>
                                    <div >
                                        <form method="POST" className="d-flex flex-column justify-content-center align-items-center">
                                            <input type="email" placeholder="Enter Email" name="email" id="password" value={email} onChange={(e)=>setEmail(e.target.value)} /> 
                                            <br />
                                            <input type="password" placeholder="Enter Password" name="password" id="password" value={newPass} onChange={(e)=>setNewPassword(e.target.value)} /> 
                                            <br />
                                            <input type="password" name="cpassword"  placeholder="Confirm New Password" value={cnewPass} onChange={(e)=>setCNewPassword(e.target.value)}/>
                                            <br />
                                            <input type="submit" onClick={ChangePassword} className="pl-3 pr-3 btn-success" />
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

export default Updatepass;
