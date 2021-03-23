import Login from './components/login/Login';
import './App.css';
import Footer from './components/footer/Footer';

import SignUp from './components/signup/SignUp';
import Profile from './components/profile/Profile';
import { Route } from 'react-router';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ErrorModal from './components/errorModal/ErrorModal'

function App() {
  return (
    <div >
      <Navbar/>
        <Route exact path='/' render={() => <Home />} />

        <Route exact path='/signUp' render={() => <SignUp />} />
      <Route exact path='/login' render={() => <Login />} />
      <Route exact path='/profile' render={() => <Profile />} />
                    <Route exact path='/error' render={() => <ErrorModal />} />


{/*         <PrivateRoute  path='/profile' component={Profile} />  
 */}      <Footer/>
    </div>
  );
}

export default App;
