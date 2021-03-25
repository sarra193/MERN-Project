import './App.css';
import Footer from './components/footer/Footer';

import SignUp from './components/signup/SignUp';
import Profile from './components/profile/Profile';
import { Route, Switch } from 'react-router';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from './JS/action';

function App() {
    const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProfile())
   
  }, [dispatch])
  return (
    <div >
      <Navbar />
       <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/login' render={() => <Login />} />
        <PrivateRoute  path='/profile' component={Profile} />
    
      </Switch>
    
        <Footer/>
    </div>
  );
}

export default App;
