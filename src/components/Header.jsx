import React, { Component } from 'react';

import './Header.css';
import logo from '../images/logo-ci.png';

class Header extends Component {
  render() {
    return (
      <div className="fixed_header">
        <a href="/#home">
          <img src={logo} alt="logo" />
        </a>
        {window.location.hash!=="#home" ? <a href="http://bit.ly/CDI18_Maudondangky" target="__blank"><input type="button" className="header_btn" value="ĐĂNG KÝ" /></a> : <div />}
      </div>
    );
  }
}

export default Header;
