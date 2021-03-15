import React from 'react';
import { useSelector } from 'react-redux';
import NewEvent from '../newEvent/NewEvent';

function Events() {
      const events = useSelector(state => state.eventsReducer.events)
      console.log(events)
      return (
            <div>
                  <NewEvent/>
            </div>
      )
}

export default Events
