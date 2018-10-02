import React, { Component } from 'react';
import './Anchor7.css';
import VietIS from '../images/Screen7/vietis.png';
import TechKids from '../images/Screen7/techkids.png';
import TopCV from '../images/Screen7/topcv.png';
import Sota from '../images/Screen7/sota.png';
import Rikkei from '../images/Screen7/rikkei.png';
import Gau from '../images/Screen7/gau.png';
import VTI from '../images/Screen7/vti.png';

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
          {/* <div className="sp-div-title">
            <span>đối tác</span>
          </div> */}
          <br />
          <div className={window.location.hash==="#partners"?"sp-gold":""}>
            <span>Nhà tài trợ Vàng</span>
            <br />
            <a href="https://rikkeisoft.com/" className="fix-margin-a" target="_blank" rel="noopener noreferrer">
              <img src={Rikkei} alt="Rikkei Soft" width="20%" />
            </a>
          </div>

          <div className={window.location.hash==="#partners"?"sp-silver":" "}>
            <span>Nhà tài trợ Bạc</span>
            <br />
            <a href="https://vietis.com.vn/" className="fix-vietis" target="_blank" rel="noopener noreferrer">
              <img src={VietIS} alt="VietIS" width="20%" />
            </a>
            <a href="https://techkids.vn/" target="_blank" rel="noopener noreferrer">
              <img src={TechKids} alt="TechKid" width="25%" />
            </a>
          </div>

          <div className={window.location.hash==="#partners"?"sp-bronze ":""}>
            <span>Nhà tài trợ Đồng</span>
            <br />
            <a href="https://vti.com.vn/" target="_blank" className="fix-margin-a" rel="noopener noreferrer">
              <img src={VTI} alt="VTI" width="17%" />
            </a>
            <a href="https://www.topcv.vn/" target="_blank" className="fix-topcv" rel="noopener noreferrer">
              <img src={TopCV} alt="TopCV" width="17%" />
            </a>
            <a href="http://gauuniform.vn/"  target="_blank" className="fix-topcv" rel="noopener noreferrer">
              <img src={Gau} alt="Gau Uniform" width="17%" />
            </a>
            <a href="https://sotatek.com/" target="_blank" className="fix-vietis"  rel="noopener noreferrer">
              <img src={Sota} alt="Sota Tek" width="17%" />
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}
