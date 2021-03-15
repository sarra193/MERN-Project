import { CREATE_EVENTS, GET_ALL_EVENTS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../constants/actionType"
import axios from 'axios';

//high order function ,dispatch: to dispatch action of the back end success/fail/register 
export const signUp = (newUser) => async (dispatch) => {

      dispatch({ type: USER_REGISTER })
      
      try {
            const addUser =  await axios.post('/user/register', newUser)
            console.log(addUser);
            dispatch({ type: USER_REGISTER_SUCCESS, payload: addUser.data });
            


      } catch (error) {
            console.log(error.response.data);
            dispatch({type:USER_REGISTER_FAIL , payload:error.response.data})
            
      }
      

      
}



export const userLogin = (userCred) => async (dispatch) => {

      dispatch({ type: USER_LOGIN })
      
      try {
            const userLogin = await axios.post('/user/login', userCred);
            console.log(userCred);
            //stocker token in local storage to verifier if the user is logged or not
            localStorage.setItem('token', userLogin.data.token);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userLogin.data.token });


      } catch (error) {
            console.log(error.response.data);
            dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data })
            
      }
};


export const getProfile = () => async (dispatch) => {
      dispatch({ type: GET_PROFILE })
      


      try {
            const token = localStorage.getItem('token')

            const config = {
                  headers: {
                        Authorization: token
                  }
            }
            const userProfile = await axios.get('/user/profile', config)
      
            dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfile.data })
      } catch (error) {
            dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data })
            
      }
};


export const createEvent = (newEvent) => async (dispatch) => {
      
      try {
            const { data } = await axios.post('/events', newEvent);
            dispatch({ type: CREATE_EVENTS, payload: data })
            
      } catch (error) {
            console.log(error.msg);
            
      }
      
};


export const getEvent = () => async (dispatch) => {
      
      try {
            const { data } = await axios.get('/events');
            dispatch({ type: GET_ALL_EVENTS, payload: data })
            
      } catch (error) {
            console.log(error.msg);
            
      }
      
};