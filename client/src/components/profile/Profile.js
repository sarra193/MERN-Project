import React from 'react';
import './Profile.css'

function Profile() {
      return (
            <div >
                 <div className="containerProfile">
        <header>
          <i className="fa fa-bars" aria-hidden="true" />
        </header>
        <main>
          <div className="row">
            <div className="leftleft col-lg-4">
              <div className="photo-left">
                <img className="photo" src="https://images.pexels.com/photos/1804796/pexels-photo-1804796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                <div className="active" />
              </div>
              <h4 className="name">Jane Doe</h4>
              <p className="info">UI/UX Designer</p>
              <p className="info">jane.doe@gmail.com</p>
              <div className="stats row">
                <div className="stat col-xs-4" style={{paddingRight: '50px'}}>
                  <p className="number-stat">3,619</p>
                  <p className="desc-stat">Followers</p>
                </div>
                <div className="stat col-xs-4">
                  <p className="number-stat">42</p>
                  <p className="desc-stat">Following</p>
                </div>
                <div className="stat col-xs-4" style={{paddingLeft: '50px'}}>
                  <p className="number-stat">38</p>
                  <p className="desc-stat">Uploads</p>
                </div>
              </div>
              <p className="desc">Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p>
              <div className="social">
                <i className="fa fa-facebook-square" aria-hidden="true" />
                <i className="fa fa-twitter-square" aria-hidden="true" />
                <i className="fa fa-pinterest-square" aria-hidden="true" />
                <i className="fa fa-tumblr-square" aria-hidden="true" />
              </div>
            </div>
            <div className="rightright col-lg-8">
              <ul className="nav">
                <li>Gallery</li>
                <li>Collections</li>
                <li>Groups</li>
                <li>About</li>
              </ul>
              <span className="follow">Follow</span>
              <div className="row gallery">
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
                <div className="col-md-4">
                  <img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                </div>
              </div>
            </div>
          </div></main>
      </div>
            </div>
      );
}

export default Profile
