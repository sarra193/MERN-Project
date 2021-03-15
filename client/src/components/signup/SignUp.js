import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { signUp } from '../../JS/action';
import './SignUp.css'
function SignUp() {

      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
      const [passWord, setPassWord] = useState();
      const dispatch = useDispatch();

      const addUser = () => {
            dispatch(signUp({
                  name,
                  email,
                  phoneNumber,
                  passWord
            })
            );
      }

      return (
            
            <div className="login">
                  <img src="" className="user" width="100" heigth="100" alt="" /> 
      
                  
                        <p>Name</p>
                        <input type="text"  placeholder="Enter your Name" onChange={(e)=> setName(e.target.value) }/>
                        <p>Email Address</p>
                        <input type="text"  placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value) }/>
                        <p>Phone Number</p>
                        <input type="number"  placeholder=" Enter your phone Number" onChange={(e)=>setPhoneNumber(e.target.value) }/>
                        <p>PassWord</p>
                        <input type="password"  placeholder="Password" onChange={(e)=> setPassWord(e.target.value)} />
                        <input type="submit" onClick={addUser}  value="SignUp" />
            
                  
            </div>
                  
      
      );
}

export default SignUp
