import React from 'react'
import './Event.css';
import moment from 'moment'
import { Link } from 'react-router-dom';

function Event({event,setEventId}) {
    return (
        <div>
            <div className="container">
                <div className="cardcontainer">
                    <div className="photo"> <img src={event.image} alt="..." />
                        <div className="photos">{event.tags.map(tag => `#${tag} `)}</div>
                    </div>
                    <div className="content">
                        <p className="txt4">{event.creator}</p>
                        <p className="txt5">{event.title}</p>
                        <p className="txt2">{event.description}</p>
                    </div>
                    <div className="footer">
                        <p><a clas s="waves-effect waves-light btn" href="#">Read More</a><a id="heart"><span className="like"><i className="fab fa-gratipay"></i>{event.likeCount}</span></a></p>
                        <p className="txt3"><i className="far fa-clock"></i>{moment(event.createdAt).fromNow()} <span className="comments"><i className="fas fa-comments"></i>45 Comments</span></p>
                    
                        <Link to='/eventAction'><button onClick={()=>setEventId(event._id)}>update</button></Link>
                        
                    </div>
                </div>
            </div>

                
        </div>
    );
}

export default Event
