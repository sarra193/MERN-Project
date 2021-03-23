import React from 'react';
import './Header.css';
function Header() {
      return (
            <div>
                  {/* Masthead*/}
                  <header className="masthead">
                        <div className="container">
                              <div className="masthead-subheading">Welcome To Our Studio!</div>
                              <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
                        </div>
                  </header>
            </div>
      );
}

export default Header
