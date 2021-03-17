import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../JS/action';
import Event from './event/Event';


function Events({setEventId,eventId}) {

      const events = useSelector(state => state.eventsReducer)

        const dispatch = useDispatch();

      
 useEffect(() => {
      dispatch(getEvent())
      
    
 }, [eventId,dispatch]);
      console.log(events)
      
      return (
           !events.length ? <h1>no events</h1>:
                  (<div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        gap: '10px 20px'
                  }}>
                        {events.map((event) => (
                              <Event key={event._id} event={event} setEventId={ setEventId}/>
                        ))}
                  
            </div>)  
          
      );
}

export default Events
