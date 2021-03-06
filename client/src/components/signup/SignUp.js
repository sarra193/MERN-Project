import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../JS/action';
import ErrorModal from '../errorModal/ErrorModal';
import './SignUp.css';

function SignUp() {
       
      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
      const [passWord, setPassWord] = useState();


      //get errors with useSelector
      const errors =useSelector(state=>state.userReducer.errors.errors)
            const isAuth =useSelector(state=>state.userReducer.isAuth)

      console.log(isAuth)
      const dispatch =useDispatch()
      const addUser = () => {
            dispatch(signUp({
                  name,
                  email,
                  phoneNumber,
                  passWord
            })
            );
            setEmail('');
            setPassWord('');
            setName('');
            setPhoneNumber('');
      }
      if(isAuth) return <Redirect to='/profile'/>

      return (
            
            <div >
      

                  
                 <div className="containerLogin">
                        {errors ? <ErrorModal errors={errors}/>: null}
                        <div className="left">
                              <div className="header">
                                    <h2 className="animation a1">Welcome Back</h2>
                                    <h4 className="animation a2">Log in to your account using email and password</h4>
                              </div>
                              <div className="form">
                                    <input type="text" className="form-field animation a3" placeholder="name " onChange={(e) => setName(e.target.value)} />
                                    <input type="number" className="form-field animation a4" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                                    <input type="email" className="form-field animation a4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className="form-field animation a4" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} />
                                    <p className="animation a5"><Link >Forgot Password</Link></p>
                                    <button className="animation a6" data-toggle="modal" data-target="#exampleModal" onClick={addUser} >LOGIN</button>
                                    <p className="animation a6"><Link >Sign Up</Link></p>
                              </div>
                        </div>
                        <div className="right" />
                  </div> 
            </div>
                  
      
      );
}

export default SignUp
