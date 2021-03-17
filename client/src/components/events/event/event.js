import React from 'react'
import './Event.css';
import moment from 'moment'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { deleteEvent,likeEvent, NumParEvent } from '../../../JS/action';

function Event({ event, setEventId }) {
    const dispatch = useDispatch();


    return (
        <div>
            <div className="container">
                <div className="cardcontainer">
                    <div className="photo"> <img src={event.image} alt="..." />
                        {/*  <div className="photos">{event.tags.map(tag => `#${tag} `)}</div> */}
                        <div className="photos" onClick={(()=>dispatch(NumParEvent(event._id)))}>{event.numOfParticip}</div>
                    </div>
                    <div className="content">
                        <p className="txt4">{event.creator}</p>
                        <p className="txt5">{event.title}</p>
                        <p className="txt2">{event.description}</p>
                    </div>
                    <div className="footer">
                        <p>
                        <Link to='/eventAction'><button className="waves-effect waves-light btn"  onClick={()=>setEventId(event._id)}>update</button></Link>
                            <span id="heart"><span className="like" onClick={(()=>dispatch(likeEvent(event._id)))}><i className="fab fa-gratipay"></i>{event.likeCount}</span></span>
                        </p>
                        <p className="txt3"><i className="far fa-clock"></i>{moment(event.createdAt).fromNow()} <span className="comments" onClick={()=>dispatch(deleteEvent(event._id))}><i className="fas fa-trash "></i>delete</span></p>
                    
                        
                    </div>
                </div>
            </div>

                
        </div>
    );
}

export default Event
