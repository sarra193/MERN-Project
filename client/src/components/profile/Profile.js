import React from 'react';
import './Profile.css'

function Profile() {
      return (
            <div>
                  <div class="row py-5 px-4">
                        <div class="col-md-10 mx-auto">
                              <div class="bg-white shadow rounded overflow-hidden">
                                    <div class="px-4 pt-0 pb-4 cover">
                                          <div class="media align-items-end profile-head">
                                                <div class="profile mr-4 ml-4"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" class="rounded-circle "/><a  class="btn btn-outline-dark btn-sm btn-block" >Edit profile</a></div>
                                                <div class="media-body mb-5 text-white">
                                                      <h4 class="mt-0 mb-0">Mark Williams</h4>
                                                      <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>New York</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="bg-light p-4 d-flex justify-content-end text-center">
                                          <ul class="list-inline mb-0">
                                                <li class="list-inline-item">
                                                      <h5 class="font-weight-bold mb-0 d-block">215</h5><small class="text-muted"> <i class="fas fa-image mr-1"></i>Photos</small>
                                                </li>
                                                <li class="list-inline-item">
                                                      <h5 class="font-weight-bold mb-0 d-block">745</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Followers</small>
                                                </li>
                                                <li class="list-inline-item">
                                                      <h5 class="font-weight-bold mb-0 d-block">340</h5><small class="text-muted"> <i class="fas fa-user mr-1"></i>Following</small>
                                                </li>
                                          </ul>
                                    </div>
                                    <div class="px-4 py-3">
                                          <h5 class="mb-0">About</h5>
                                          <div class="p-4 rounded shadow-sm bg-light">
                                                <p class="font-italic mb-0">Web Developer</p>
                                                <p class="font-italic mb-0">Lives in New York</p>
                                                <p class="font-italic mb-0">Photographer</p>
                                          </div>
                                    </div>
                                    <div class="py-4 px-4">
                                          <div class="d-flex align-items-center justify-content-between mb-3">
                                                <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                                          </div>
                                          <div class="row">
                                          <div class="container">
    <div class="row">
      
        <div class="col-lg-4">
            <div class="card p-0">
                <div class="card-image"> <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> </div>
                <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">SomeOne Famous</h4>
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
