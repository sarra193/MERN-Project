
const { CREATE_EVENTS, GET_ALL_EVENTS, UPDATE_EVENTS, DELETE_EVENTS, LIKE_EVENTS } = require("../constants/actionType");



const eventsReducer = (events=[],{type,payload}) => {

      switch (type) {


            case GET_ALL_EVENTS:
                  
                  return payload;
            
            case UPDATE_EVENTS:
            case LIKE_EVENTS:
                  
                  return events.map((event)=> event._id===payload._id?payload:event);
            
            case CREATE_EVENTS:
                  
                  return [...events, payload];
            case DELETE_EVENTS:
                  
                  return events.filter((event)=>event._id !== payload);
      
            default:
                  return events;
      }
      
}

export default eventsReducer;