import { useState, useEffect } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import {  getEvent, getProfile } from './JS/action';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/login/Login.js'
import FormEvent from './components/formEvent/FormEvent';
import Events from './components/events/Events';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Profile from './components/profile/Profile'
import SignUp from './components/signup/SignUp'



import Navbar from './components/header/Navbar.js'
import Home from './components/home/Home';



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.userReducer.isAuth);
  const [eventId, setEventId] = useState(null);
  
  useEffect(() => {
    
      dispatch(getProfile());
      dispatch(getEvent());

  }, [isAuth]);


  return (
    <div>
      <Navbar />
 

          
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/login' render={() => <Login />} />
        <PrivateRoute  path='/profile' component={Profile} />
        
        <Route exact path='/events' render={ ()=><Events setEventId ={setEventId} eventId={ eventId} />}/>
        <Route exact path='/eventAction' render={() => <FormEvent eventId={ eventId}  setEventId ={setEventId} />}/>

      
      </Switch>
    
    </div>
  )
}

export default App
