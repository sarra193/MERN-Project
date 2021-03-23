import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventsReducer from './eventsReducer';


const rootReducer = combineReducers({
       userReducer,
       eventsReducer
});

export default rootReducer;