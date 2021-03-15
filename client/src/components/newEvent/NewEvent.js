import React, { useState } from 'react'
import './NewEvent.css';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../JS/action';
function NewEvent() {

      const [eventData, setEventData] = useState({
            creator: '', title: '', description: '', tags: '', image: '', date: ''});
      

      const dispatch = useDispatch();



      
      const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(createEvent(eventData));
      }
      const clear=()=>{}

      return (
            <div>
                  <form onSubmit={handleSubmit}>
  <h1>Creating an Event</h1>
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
  
                        <button>Create</button>
                         <button onClick={clear}>Clear</button>
</form>
            </div>
      )
};

export default NewEvent
