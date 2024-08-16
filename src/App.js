import React, { createContext, useReducer } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Carousel from './component/Carousels/Carousel';
import Navbar from './component/Navbar/Navbar';
import About from './component/About';
import Classes from './component/classes/Classes';
import Trainer from './component/Trainer/Trainer';
import Plans from './component/Plans/Plans';
import Contact from './component/Contact/Contact';
import Few_details from './component/Few_Details/Few_details';
import Footer from './component/Footer/Foooter';
import {Route, Switch} from 'react-router-dom';
import Home from './component/home/Home';
import Errorpage from './component/Errorpage';
import Profile from './component/home/Profile';
import Logout from './component/Logout';
import {initialState, reducer} from './reducer/useReducer';
import Updatepass from './component/home/Updatepass';
import Appointments from './component/home/Appointments';
import Scheduletiming from './component/home/Scheduletiming';
import Updateprofile from './component/home/Updateprofile';
import Videoapp from './component/Videoapp/Videoapp';



export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Switch>
   
    <Route exact path='/'>
      <Navbar />
      <Carousel />
      <About />
      <Classes />
      <Trainer />
      <Plans />
      <Contact />
      <Few_details />
      <Footer />
      </Route>
      
      <Route exact path='/validUser'>
        <Home />
      </Route>

      <Route exact path='/profile'>
        <Profile />
      </Route>

      <Route exact path="/profile/updatepass">
        <Updatepass />
      </Route>

      <Route exact path="/profile/updateprofile">
        <Updateprofile />
      </Route>

      <Route exact path="/profile/scheduletiming">
        <Scheduletiming />
      </Route>

      <Route exact path="/profile/appointments">
        <Appointments />
      </Route>

      <Route exact path="/profile/appointments/meeting">
        <Videoapp />
      </Route>    

      <Route exact path="/logout">
        <Logout />
      </Route>   

      <Route >
      <Errorpage />
      </Route>

      </Switch>

      </UserContext.Provider>
    </>
  );
}

export default App;
