import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../JS/action';
import './SignUp.css'
function SignUp() {

      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
      const [passWord, setPassWord] = useState();

      //get errors with useSelector
      const errors =useSelector(state=>state.userReducer.errors)
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
      
                                    {errors ? <ul> {errors.msg}</ul> : null}

                  
                  <div className="container">
                        <div className="left">
                              <div className="header">
                                    <h2 className="animation a1">New Here ? Welcome you can SignUp here</h2>
                                    <h4 className="animation a2">Create An  account</h4>
                              </div>
                              <div className="form">
                                    <input type="text" className="form-field animation a3" placeholder="name" onChange={(e) => setName(e.target.value)} />
                                    <input type="email" className="form-field animation a3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="number" className="form-field animation a3" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                                    <input type="password" className="form-field animation a3" placeholder="PassWord" onChange={(e) => setPassWord(e.target.value)} />

                                    <button className="animation a6" onClick={addUser} >SignUp</button>
                                    <p className="animation a6"><Link to='/login'>Login</Link></p>
                              </div>
                        </div>
                        <div className="right" />
                  </div>
            </div>
                  
      
      );
}

export default SignUp
