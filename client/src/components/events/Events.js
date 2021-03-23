import React from 'react'
import './Events.css'
function Events() {
      return (
            <div>
                  <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                              <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                              </div>
                              <div className="row">
                                    <div className="col-lg-4 col-sm-6 mb-4">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src={require("../../assets/img/portfolio/01-thumbnail.jpg")} alt="....." />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Threads</div>
                                                      <div className="portfolio-caption-subheading text-muted">Illustration</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src="../../assets/img/portfolio/02-thumbnail.jpg" alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Explore</div>
                                                      <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src="../../assets/img/portfolio/03-thumbnail.jpg" alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Finish</div>
                                                      <div className="portfolio-caption-subheading text-muted">Identity</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src="../../assets/img/portfolio/04-thumbnail.jpg" alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Lines</div>
                                                      <div className="portfolio-caption-subheading text-muted">Branding</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src="../../assets/img/portfolio/05-thumbnail.jpg" alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Southwest</div>
                                                      <div className="portfolio-caption-subheading text-muted">Website Design</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                          <div className="portfolio-item">
                                                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                                      <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                                                      </div>
                                                      <img className="img-fluid" src="../../assets/img/portfolio/06-thumbnail.jpg" alt="" />
                                                </a>
                                                <div className="portfolio-caption">
                                                      <div className="portfolio-caption-heading">Window</div>
                                                      <div className="portfolio-caption-subheading text-muted">Photography</div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  <div>
        {/* Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/01-full.jpg" alt="" />
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
        {/* Modal 2*/}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/02-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Explore</li>
                        <li>Category: Graphic Design</li>
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
        {/* Modal 3*/}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/03-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
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
        {/* Modal 4*/}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/01-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
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
        {/* Modal 5*/}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/05-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
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
        {/* Modal 6*/}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="../../assets/img/portfolio/06-full.jpg" alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
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
