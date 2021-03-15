import React, { useEffect, useState } from 'react'
import './FormEvent.css';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent ,updateEvent} from '../../JS/action';
import { Link, Redirect } from 'react-router-dom';
function FormEvent({eventId,setEventId}) {

      const [eventData, setEventData] = useState({creator: '', title: '', description: '', tags: '', image: '', date: ''});
      
      const event = useSelector(state => eventId ? state.eventsReducer.find((evet) => evet._id === eventId) : null);

      const dispatch = useDispatch();

      useEffect(() => {
            
            if(event) setEventData(event)
      }, [event,eventId])

      const handleSubmit = (e) => {
            e.preventDefault();
            if (eventId) {
                  dispatch(updateEvent(eventId, eventData));
                  
            } else {
            dispatch(createEvent(eventData)); 
            }
            clear();

      }
      const clear = () => {
            setEventId(null);
            setEventData({creator: '', title: '', description: '', tags: '', image: '', date: ''})

      }

      return (
            <div>
                  <form onSubmit={handleSubmit }>
            <h1>{eventId? 'Updating':'Creating'}  an Event</h1>
            <div class="question">
                              <input type="text" required value={eventData.creator} onChange={e => setEventData({ ...eventData, creator: e.target.value })} /><label>Creator</label>
                        </div>
                        <div class="question">
                              <input type="text" required value={eventData.title} onChange={e => setEventData({ ...eventData, title: e.target.value })} /><label>Title</label>
                        </div>
                        <div class="question">
                              <input type="text" required value={eventData.description} onChange={e => setEventData({ ...eventData, description: e.target.value })} /><label>description</label>
                        </div>
                        <div class="question">
                              <input type="text" required value={eventData.tags} onChange={e => setEventData({ ...eventData, tags: e.target.value })} /><label>tags</label>
                        </div>
                        <div class="question">
                              <input type="text" required value={eventData.date} onChange={e => setEventData({ ...eventData, date: e.target.value })} /><label>date</label>
                        </div>
                        <div class="question">
                              <input type="text"/><label>image</label>
                              <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({base64})=>setEventData({...eventData,image:base64})}/>
                        </div>
                        <button  > {eventId? 'Update' :'Create'}</button>
                  
                        
                        <button onClick={clear}>Clear</button>
</form>
            </div>
      )
};

export default FormEvent
