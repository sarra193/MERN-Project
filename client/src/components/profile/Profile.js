import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

function Profile() {
      return (
            <div>
                  <div className="row py-5 px-4">
                        <div className="col-md-10 mx-auto">
                              <div className="bg-white shadow rounded overflow-hidden">
                                    <div className="px-4 pt-0 pb-4 cover">
                                          <div className="media align-items-end profile-head">
                                                <div className="profile mr-4 ml-4">
                                                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded-circle " /><Link className="btn btn-outline-dark btn-sm btn-block" >Edit profile</Link></div>
                                                <div className="media-body mb-5 text-white">
                                                      <h4 className="mt-0 mb-0">Mark Williams</h4>
                                                      <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>New York</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                                          
                                    </div>
                                    <div className="px-4 py-3">
                                          <h5 className="mb-0">About</h5>
                                          <div className="p-4 rounded shadow-sm bg-light">
                                                <p className="font-italic mb-0">Web Developer</p>
                                                <p className="font-italic mb-0">Lives in New York</p>
                                                <p className="font-italic mb-0">Photographer</p>
                                          </div>
                                    </div>
                                    <div className="py-4 px-4">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h5 className="mb-0">Recent photos</h5><Link  className="btn btn-link text-muted">Show all</Link>
                                          </div>
                                          <div className="row">
                                          <div className="container">
    <div className="row">
      
        <div className="col-lg-4">
            <div className="card p-0">
                <div className="card-image"> <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> </div>
                <div className="card-content d-flex flex-column align-items-center">
                    <h4 className="pt-2">SomeOne Famous</h4>
                    <h5>Creative Desinger</h5>
                 
                </div>
            </div>
        </div>
    </div>
</div>    
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Profile
