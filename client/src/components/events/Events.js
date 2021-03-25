import React from 'react'
import AddEvent from '../addEvent/AddEvent'
import './Events.css';
import image from '../../assets/img/portfolio/01-thumbnail.jpg'
import imagefull from '../../assets/img/portfolio/01-full.jpg';
import close from "../../assets/img/close-icon.svg"
function Events() {
      return (
            <div>
                  <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                              <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Events</h2>
                                    <h3 className="section-subheading text-muted">List of Events.</h3>
                              </div>
                              <div className="row">
                                    <div className="col-lg-4 col-sm-6 mb-4">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src={image} alt="....." />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Threads</div>
                                                      <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                                </div>
                                          </div>
                </div>
                   <AddEvent/>
              </div>
             
                        </div>
                  </section>
                  <div>
        {/* Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src={close} alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={imagefull} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                        Close Project
                      </button>
                    </div>
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

export default Events
