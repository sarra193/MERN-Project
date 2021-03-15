import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
      return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
                        <div className="wrapper"> </div>
                        <div className="container-fluid all-show"> <a className="navbar-brand">Penton <i className="fa fa-codepen"></i></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                          <li className="nav-item"> <a className="nav-link active" aria-current="page">About us</a> </li>
                                          <li className="nav-item"> <a className="nav-link">Products</a> </li>
                                          <li className="nav-item"> <a className="nav-link">Services</a> </li>
                                          <li className="nav-item"> <a className="nav-link">Events</a> </li>
                                          <Link to='/profile'><li className="nav-item"> <a className="nav-link">profile</a> </li></Link>
                                          <Link to='/login'><li className="nav-item"> <a className="nav-link">login</a> </li></Link>
                                          <li className="nav-item"> <a className="nav-link">
                                                <div class="search__container">
                                                      <input class="search__input" type="text" placeholder="Search" />
                                                </div>
                                          </a> </li>
                                    </ul>
                                    <div className="d-flex flex-column sim"> <span>1 item added to your quote</span> <small className="text-primary">view your quote</small> </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
}

export default Navbar
