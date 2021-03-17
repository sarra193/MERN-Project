import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { userLogin } from '../../JS/action';
import './Login.css'
function Login() {
      const [email, setEmail] = useState();
      const [passWord, setPassWord] = useState();

      //get errors with useSelector
      const errors =useSelector(state=>state.userReducer.errors)
            const isAuth =useSelector(state=>state.userReducer.isAuth)

      console.log(isAuth)
      const dispatch =useDispatch()


      const login = () => {
            dispatch(userLogin({
                  email,
                  passWord

            }));
            setEmail('');
            setPassWord('');
      }

      if(isAuth) return <Redirect to='/profile'/>

      return (
            <div>


            
                  <div className="container">
                        {errors ? <h1> {errors.msg}</h1> : null}
                        <div className="left">
                              <div className="header">
                                    <h2 className="animation a1">Welcome Back</h2>
                                    <h4 className="animation a2">Log in to your account using email and password</h4>
                              </div>
                              <div className="form">
                                    <input type="email" className="form-field animation a3" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className="form-field animation a4" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} />
                                    <p className="animation a5"><Link >Forgot Password</Link></p>
                                    <button className="animation a6" onClick={login} >LOGIN</button>
                                    <p className="animation a6"><Link >Sign Up</Link></p>
                              </div>
                        </div>
                        <div className="right" />
                  </div>
            </div>
      );
}

export default Login
