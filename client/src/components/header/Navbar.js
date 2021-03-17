import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
      return (
            <div>
                  {/* <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
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
                  </nav> */}

                  <header className="site-header">
                        <div className="header-shape header-shape-1">
                              <svg width={337} height={222} viewBox="0 0 337 222" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                          <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="header-shape-1">
                                                <stop stopColor="#E0E1FE" stopOpacity={0} offset="0%" />
                                                <stop stopColor="#E0E1FE" offset="100%" />
                                          </linearGradient>
                                    </defs>
                                    <path d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z" transform="translate(-1103)" fill="url(#header-shape-1)" fillRule="evenodd" />
                              </svg>
                        </div>
                        <div className="header-shape header-shape-2">
                              <svg width={128} height={128} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                                    <defs>
                                          <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
                                                <stop stopColor="#FF3058" offset="0%" />
                                                <stop stopColor="#FF6381" offset="100%" />
                                          </linearGradient>
                                    </defs>
                                    <circle className="anime-element fadeup-animation" cx={64} cy={64} r={64} fill="url(#header-shape-2)" fillRule="evenodd" />
                              </svg>
                        </div>
                        <div className="container">
                              <div className="site-header-inner">
                                    <div className="brand header-brand">
                                          <h1 className="m-0">
                                                <a href="#">
                                                      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
                                                            <title>April</title>
                                                            <defs>
                                                                  <linearGradient x1="114.674%" y1="39.507%" x2="-52.998%" y2="39.507%" id="logo-a">
                                                                        <stop stopColor="#8D92FA" offset="0%" />
                                                                        <stop stopColor="#8D92FA" stopOpacity={0} offset="100%" />
                                                                  </linearGradient>
                                                                  <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="logo-b">
                                                                        <stop stopColor="#FF3058" offset="0%" />
                                                                        <stop stopColor="#FF6381" offset="100%" />
                                                                  </linearGradient>
                                                                  <linearGradient x1="32.716%" y1="-20.176%" x2="32.716%" y2="148.747%" id="logo-c">
                                                                        <stop stopColor="#FF97AA" offset="0%" />
                                                                        <stop stopColor="#FF97AA" stopOpacity={0} offset="100%" />
                                                                  </linearGradient>
                                                            </defs>
                                                            <g fill="none" fillRule="evenodd">
                                                                  <path d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z" fill="#312ECA" />
                                                                  <path d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z" fill="url(#logo-a)" />
                                                                  <g opacity=".88">
                                                                        <path d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z" fill="url(#logo-b)" />
                                                                        <path d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z" fill="url(#logo-c)" />
                                                                  </g>
                                                            </g>
                                                      </svg>
                                                </a>
                                          </h1>
                                    </div>
                              </div>
                        </div>
                  </header>
            </div>
      );
}

export default Navbar
