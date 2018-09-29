import React, { Component } from 'react';

import './Header.css';
import logo from '../images/logo-ci.png';

class Header extends Component {
  render() {
    return (
      <div className="fixed_header">
        <a href="/1">
          <img src={logo} alt="logo" />
        </a>
        {this.props.showBtn ? <input type="button" className="header_btn" value="ĐĂNG KÝ" /> : <div />}
      </div>
    );
  }
}

export default Header;
