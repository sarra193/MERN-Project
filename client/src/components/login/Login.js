import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
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


                  <div className="login">
                        <img src="" className="user" width="100" heigth="100" alt="" />
                        {errors ? <h1> { errors.msg}</h1>:null }
                        <p>Email Address</p>
                        <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        <p>PassWord</p>
                        <input type="password" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} />
                        <input type="submit" onClick={login} value="SignIn" />
            
                  
                  </div>
            </div>
      );
}

export default Login
