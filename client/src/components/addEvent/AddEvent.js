import React from 'react'
import './AddEvent.css';
import img from '../../assets/img/portfolio/06-thumbnail.jpg'
import imagefull from '../../assets/img/portfolio/06-full.jpg';
import close from "../../assets/img/close-icon.svg"

function AddEvent() {
      return (
          
               
                                    <div className="col-lg-4 col-sm-6 mb-4">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src={img} alt="....." />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Add A new Event</div>
                                                      <div className="portfolio-caption-subheading text-muted">New </div>
                                                </div>
                                          </div>
                                  
                             
        {/* Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src={close} alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Add A new Event</h2>
                      <p className="item-intro text-muted"></p>
                        <img className="img-fluid d-block mx-auto" src={imagefull} style={{ width: "250px", height: "250px" }} alt="" />
                                                            
 <div>
                  <form >
                  <div class="question">
                              <input type="text" required  /><label>Creator</label>
                        </div>
                        <div class="question">
                              <input type="text" required  /><label>Title</label>
                        </div>
                        <div class="question">
                              <input type="text" required /><label>description</label>
                        </div>
                        
                        </form>
                                                            </div>
                                                            <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button" style={{margin:"20px"}}>
                        <i className="fas fa-times mr-1" />
                        Save Event
                      </button>
                        <button className="btn btn-danger" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                        Close Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        </div>
                          </div>
           
      );
}

export default AddEvent
