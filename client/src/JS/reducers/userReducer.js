import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from "../constants/actionType";


const initialState = {
      loading: false,
      user: null,
      isAuth: false,
      errors:{}
};

const userReducer = (state =initialState, { type, payload })=> {
      switch (type) {
            case USER_REGISTER:
            case USER_LOGIN:
            case GET_PROFILE:
                  return {
                        ...state,
                        loading: true
                  };
            
            case USER_REGISTER_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        user: payload,
                  };
            
            case USER_LOGIN_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        token: payload,
                        isAuth:true,
                  };
            
            case GET_PROFILE_SUCCESS:
                  return {
                        ...state,
                        loading: false,
                        user: payload,
                        isAuth: true,
                  };
            
            case USER_REGISTER_FAIL:
            
            
                  return {
                        ...state,
                        loading: false,
                        errors: payload
                  };
            case GET_PROFILE_FAIL:
            case USER_LOGIN_FAIL:
                  return {
                        ...state,
                        loading: false,
                        errors: payload,
                        isAuth:false
                        
                  }
            
            
            default:
                  return state;
            
      }
}

export default userReducer;