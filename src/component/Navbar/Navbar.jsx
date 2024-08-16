import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as RB from 'react-bootstrap';
import './navbar.css';
import logo from '../../img/logo.png';
import { UserContext } from '../../App';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    } else {
      window.alert(" Registration Successfull");
      console.log(" Registration Successfull");
      history.push("/");

    }
  }

  const loginUser = async (e) => {
    e.preventDefault();

    const result = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })

    const final_data = result.json()

    if (result.status === 400 || !final_data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true })
      localStorage.setItem("state", state);
      window.alert("Login Successfull");
      history.push("/profile");
    }
  }

  return (
    <>
      <div className="container-fluid navbarotr">
        <div className="row text-center">
          <div className="col-12">
            <RB.Navbar expand="lg" className="navres">
              <img src={logo} />
              <RB.Navbar.Brand href="#home" className="brnd_nm">Fitness Forest</RB.Navbar.Brand>
              <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
              <RB.Navbar.Collapse id="basic-navbar-nav">
                <RB.Nav className="mx-auto text-center " id="nav">
                  <RB.Nav.Link href="#home">Home</RB.Nav.Link>
                  <RB.Nav.Link href="#aboutPage">About</RB.Nav.Link>
                  <RB.Nav.Link href="#classes">Classes</RB.Nav.Link>
                  <RB.Nav.Link href="#trainers">Trainer</RB.Nav.Link>
                  <RB.Nav.Link href="#plan">Plans</RB.Nav.Link>
                  <RB.Nav.Link href="#contact">Contact</RB.Nav.Link>

                </RB.Nav>
                <RB.Form inline className="d-flex justify-content-center">
                  {/* {state ? "" : <RB.Button variant="outline-success" className="mx-3" onClick={handleShow2}>Login</RB.Button>} */}
                  <RB.Modal show={show2} onHide={handleClose2}>
                    <RB.Modal.Header closeButton>
                      <RB.Modal.Title>Login</RB.Modal.Title>
                    </RB.Modal.Header>
                    <RB.Modal.Body>
                      <form method="POST" id="signin-form">
                        <div class="mb-3">
                          <input type="email" placeholder="Enter Email address" name="Lemail" autoComplete="off" class="form-control" id="Lemail" aria-describedby="emailHelp" value={Email} onChange={(e) => setEmail(e.target.value)} />

                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <input type="password" placeholder="Enter Password" name="Lpassword" class="form-control" id="Lpassword" value={Password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <RB.Modal.Footer>
                          <RB.Button variant="primary" onClick={handleShow1}>Register</RB.Button>
                          <input type="submit" name="signin" id="signin" className="btn btn-success" value="Login" onClick={loginUser} />
                        </RB.Modal.Footer>
                      </form>
                    </RB.Modal.Body>
                  </RB.Modal>
                  <div className="btn_res">
                    {localStorage.getItem("state") ?
                      <div className="mr-5">
                        <RB.NavDropdown title="Menu" id="basic-nav-dropdown">
                          <RB.NavDropdown.Item href="#action/3.1">Action</RB.NavDropdown.Item>
                          <RB.NavDropdown.Item href="#action/3.4"><NavLink to="/profile">Profile</NavLink></RB.NavDropdown.Item>
                          <RB.NavDropdown.Divider />
                          <RB.NavDropdown.Item href="#action/3.4"><NavLink to="/logout">Logout</NavLink></RB.NavDropdown.Item>
                        </RB.NavDropdown>
                      </div> : 
                      <><RB.Button variant="outline-success" className="mx-3 my-3" onClick={handleShow2}>Login</RB.Button>
                        <RB.Button variant="outline-primary" onClick={handleShow1}>Register</RB.Button></>
                    }
                  </div>
                  <RB.Modal show={show1} onHide={handleClose1}>
                    <RB.Modal.Header closeButton>
                      <RB.Modal.Title>SignUp</RB.Modal.Title>
                    </RB.Modal.Header>
                    <RB.Modal.Body>
                      <form method="POST" id="register-form">
                        <div class="mb-3">
                          <input type="text" placeholder="Enter Your Name" name="name" autoComplete="off" class="form-control" id="name" value={user.name} onChange={handleInputs} aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <input type="email" placeholder="Enter Email address" name="email" autoComplete="off" class="form-control" id="email" value={user.email} onChange={handleInputs} aria-describedby="emailHelp" />
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                          <input type="number" placeholder="Enter Phone Number" name="phone" autoComplete="off" class="form-control" id="phone" value={user.phone} onChange={handleInputs} aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                          <input type="password" placeholder="Enter Password" name="password" class="form-control" id="password" value={user.password} onChange={handleInputs} />
                        </div>
                        <div class="mb-3">
                          <input type="password" placeholder="Confirm Your Password" name="cpassword" class="form-control" id="cpassword" value={user.cpassword} onChange={handleInputs} />
                        </div>

                        <select class="form-select" aria-label="Default select example">
                          <option selected>Select</option>
                          <option value="coach">Coach </option>
                          <option value="trainee">Trainee</option>
                        </select><br />

                        <RB.Modal.Footer>
                          <input type="submit" name="signup" id="signup" className="btn btn-primary" value="Register" onClick={PostData} />
                        </RB.Modal.Footer>
                      </form>
                    </RB.Modal.Body>
                  </RB.Modal>
                </RB.Form>
              </RB.Navbar.Collapse>
            </RB.Navbar>

          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar;