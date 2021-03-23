import React from 'react'
import './Navbar.css'
function Navbar() {
      return (
            <div >
                  
            
                  {/* Top menu */}
                  <nav className="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg" >
                        <div className="container" >
                              <a className="navbar-brand" href="/">Bootstrap 4 Navbar</a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                          <li className="nav-item">
                                                <a className="nav-link scroll-link" href="#top-content">Top</a>
                                          </li>
                                          <li className="nav-item">
                                                <a className="nav-link scroll-link" href="#section-1">Item 1</a>
                                          </li>
                                          <li className="nav-item">
                                                <a className="nav-link scroll-link" href="#section-2">Item 2</a>
                                          </li>
                                          <li className="nav-item">
                                                <a className="nav-link scroll-link" href="#section-3">Item 3</a>
                                          </li>
                                          <li className="nav-item">
                                                <a className="nav-link scroll-link" href="#section-4">Item 4</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
                  
            </div>
            
      );
}

export default Navbar
