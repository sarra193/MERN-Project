const { CREATE_EVENTS, GET_ALL_EVENTS } = require("../constants/actionType");



const eventsReducer = (events=[],{type,payload}) => {

      switch (type) {


            case GET_ALL_EVENTS:
                  
                  return payload;
            case CREATE_EVENTS:
                  
                  return [...events,payload];
            
      
            default:
                  return events;
      }
      
}

export default eventsReducer;