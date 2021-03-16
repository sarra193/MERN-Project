import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
      return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
                        <div className="wrapper"> </div>
                        <div className="container-fluid all-show"> <Link to='/home' className="navbar-brand">FunEv <i className="fa fa-handshake-o"></i></Link> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    
                                          <Link to='/events'><span className="nav-item"> <span className="nav-link">Events</span> </span></Link> 
                                          <Link to='/profile'><span className="nav-item"> <span className="nav-link">profile</span> </span></Link>
                                          <Link to='/login'><span className="nav-item"> <span className="nav-link">login</span> </span></Link>
                                          <li className="nav-item"> <span className="nav-link">
                                                <div class="search__container">
                                                      <input class="search__input" type="text" placeholder="Search" />
                                                </div>
                                          </span> </li>
                                    </ul>
                                    <div className="d-flex flex-column sim"> <span></span> <small className="text-primary">view your quote</small> </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
}

export default Navbar
