import React, { Component } from 'react';
import './Anchor7.css';
import VietIS from '../images/Screen7/vietis.png';
import TechKids from '../images/Screen7/techkid.png';
import TopCV from '../images/Screen7/topcv.png';
import FPT from '../images/Screen7/fpt.png';
import Sota from '../images/Screen7/sota.png';

export default class Anchor7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
3
  render() {
    return (
      <div id="anchor7">
        <div className="sp-content">
          <div className="sp-div-title">
            <span>đối tác</span>
          </div>
          <br />
          <div className="sp-silver">
            <span>Nhà tài trợ bạc</span>
            <br />
            <a href="https://vietis.com.vn/" className="fix-margin-a" target="_blank" rel="noopener noreferrer">
              <img src={VietIS} alt="VietIS" width="20%" />
            </a>
            <a href="https://techkids.vn/" target="_blank" rel="noopener noreferrer">
              <img src={TechKids} alt="TechKid" width="30%" />
            </a>
            <a href="https://www.topcv.vn/" target="_blank" rel="noopener noreferrer">
              <img src={TopCV} alt="TopCV" width="18%" className="fix-topcv" />
            </a>
          </div>

          <div className="sp-bronze">
            <span>Đồng tài trợ</span>
            <br />
            <a href="https://www.fpt-software.com/" className="fix-margin-a" target="_blank" rel="noopener noreferrer">
              <img src={FPT} alt="FPT Software" width="20%" />
            </a>
            <a href="https://sotatek.com/" target="_blank" rel="noopener noreferrer">
              <img src={Sota} alt="Sota Tek" width="27%" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
