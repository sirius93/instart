import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return ( 
       <footer className="footer-container">
         <div className="container">
          <ul className="link-container">
            <li className="click-icons"><a href="#">Copyrights All right reserved</a></li>
            <li className="click-icons"><a href="#">Terms policy</a></li>
            <li className="click-icons"><a href="#">Disclaimers</a></li>
          </ul> 
         </div>
       </footer> 
    );
  }
}
export default Footer;
