import {
      CREATE_EVENTS, UPDATE_EVENTS, DELETE_EVENTS, GET_ALL_EVENTS, GET_PROFILE, GET_PROFILE_FAIL,
      GET_PROFILE_SUCCESS, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, LIKE_EVENTS, PARTICIPANT_EVENTS
} from "../constants/actionType"
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
            const userRes = await axios.post('/user/login', userCred);
            console.log(userRes);
            //stocker token in local storage to verifier if the user is logged or not
            localStorage.setItem("token", userRes.data.token);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: userRes.data });


      } catch (error) {
            console.log(error.response.data);
            dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data })
            
      }
};


export const getProfile = () => async (dispatch) => {
      const config = {
                  headers: {
                        Authorization: localStorage.getItem("token"),
                  },
            };
      dispatch({ type: GET_PROFILE })
      
      try {

      
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




export const updateEvent = (id,updatedEvent) => async (dispatch) => {
      
      try {
            const { data } = await axios.patch(`/events/${id}`,updatedEvent);
            dispatch({ type: UPDATE_EVENTS, payload: data });
            
      } catch (error) {
            console.log(error);
            
      }
      
};







export const deleteEvent = (id) => async (dispatch) => {
      
      try {
            await axios.delete(`/events/${id}`);
            dispatch({ type: DELETE_EVENTS, payload: id });
            
      } catch (error) {
            console.log(error);
            
      }
      
};



export const likeEvent = (id) => async (dispatch) => {
      
      try {
            const { data } = await axios.patch(`/events/${id}/likeEvent`);
            dispatch({ type: LIKE_EVENTS, payload: data });
            
      } catch (error) {
            console.log(error);
            
      }
      
};

export const NumParEvent = (id) => async (dispatch) => {
      
      try {
            const { data } = await axios.patch(`/events/${id}/numParticEvent`);
            dispatch({ type: PARTICIPANT_EVENTS, payload: data });
            
      } catch (error) {
            console.log(error);
            
      }
      
};