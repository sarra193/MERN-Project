import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { getProfile, userLogin } from '../../JS/action';
import ErrorModal from '../errorModal/ErrorModal';
import './Login.css'
function Login() {
      const [email, setEmail] = useState();
      const [passWord, setPassWord] = useState();
      const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

      //get errors with useSelector
      const errors =useSelector(state=>state.userReducer.errors.errors)
            const isAuth =useSelector(state=>state.userReducer.isAuth)

      console.log(isAuth)
      const dispatch =useDispatch()

  
  useEffect(() => {
    dispatch(getProfile())
   
  }, [])

      const login = () => {
            dispatch(userLogin({
                  email,
                  passWord

            }));
            setEmail('');
            setPassWord('');
      }

      if(isAuth) return <Redirect exact to="/profile"/>

      return (
            <div>


            
                  <div className="containerLogin">
                        {errors ? <ErrorModal errors={errors}/>: null}
                        <div className="left">
                              <div className="header">
                                    <h2 className="animation a1">Welcome Back</h2>
                                    <h4 className="animation a2">Log in to your account using email and password</h4>
                              </div>
                              <div className="form">
                                    <input type="email" className="form-field animation a3" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                   <div className="pass-wrapper">
                                    <input type={passwordShown ? "text" : "password"} className="form-field animation a3" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} />
                                    <i onClick={togglePasswordVisiblity}>{passwordShown ? "hide" : "show"}</i>{" "}
                                    </div>
                                    <p className="animation a5"><Link >Forgot Password</Link></p>
                                    <button className="animation a6" data-toggle="modal" data-target="#exampleModal" onClick={login} >LOGIN</button>
                                    <p className="animation a6"><Link >Sign Up</Link></p>
                              </div>
                        </div>
                        <div className="right" />
                  </div> 
            </div>
      );
}

export default Login
