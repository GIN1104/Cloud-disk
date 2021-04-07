import React from 'react';
import './navbar.less'
import Logo from "../../assets/img/navbar__logo.svg"

const Navbar = () => {
    return ( 
      <div className="navbar">
          <img src={ Logo } alt="" className="navbar__logo" />
          <div className="navbar__header">MEARN CLOUD</div>
          <div className="navbar__login">Login</div>
          <div className="navbar__registration">Registration</div>
      </div> );
}
 
export default Navbar;
