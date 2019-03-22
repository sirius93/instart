import React, { Component } from 'react';
import * as actions from '../../Actions/index';
import './index.css';

class Header extends Component {
  render() {
    return ( 
      <div className="Nav-container">
        <div className="container">
          <ul className="Navbar left">
            <li className="Nav-items"><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a></li>
          </ul>
          <ul className="Navbar center">
            <li className="Nav-items"><a href="#">BLOG</a></li>
          </ul>
          <ul className="Navbar right">
            <li className="click-icons"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li className="click-icons"><a href="#"><i class="fa fa-tumblr" aria-hidden="true"></i></a></li>
            <li className="click-icons"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li className="click-icons"><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
          </ul>  
        </div>
      </div>
    );
  }
}
export default Header;
