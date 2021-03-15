import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../JS/action';
import Event from './event/Event';


function Events() {

      const events = useSelector(state => state.eventsReducer)

        const dispatch = useDispatch();

      
 useEffect(() => {
    
    return () => {
      dispatch(getEvent())
      
    }
 }, [dispatch]);
      console.log(events)
      
      return (
           !events.length ? <h1>no events</h1>:
                  (<div>
                        {events.map((event) => (
                              <Event key={event._id} event={event}/>
                        ))}
                  
            </div>)  
          
      );
}

export default Events
