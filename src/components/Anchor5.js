import React, { Component } from 'react';
import './Anchor5.css';
import JSClub from '../images/Screen5/JSClubImageCPY2.png';
import Logo from '../images/Screen5/logo.png';
import FU from '../images/Screen5/fu.png';
import PDP from '../images/Screen5/avapdpc.png';

export default class MyClub extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="cl-content col-md-12 fix-row">
          <div className="row fix-row">
            <div className="col-md-6 fix-row">
              <div className="img-wrapper">
                <img src={JSClub} alt="jsclub" width="100%" />
              </div>
            </div>
            <div className="col-md-6 fix-row">
              <div className="cl-content-wrapper">
                <div className="cl-wrp">
                  <div className="in4-js">
                    <div className="cl-div-title">
                      <span className="cl-title">Về ban tổ chức</span>
                    </div>
                    <br />
                    <br />
                    <p className="ani-p">
                      JS Club - Câu lạc bộ Kỹ sư Nhật Bản thuộc trường Đại học FPT được thành lập vào ngày 24.02.2013. Sứ mệnh của chúng tôi là đào tạo nên
                      những kỹ sư Nhật Bản chất lượng về cả chuyên môn cũng như phẩm chất.
                        </p>
                    <p className="ani-p">JS Club đã 3 lần được vinh danh là Câu lạc bộ Xuất sắc của trường về lĩnh vực học tập.</p>
                    <div className="cl-logos">
                      <a className="cl-fix-a" href="https://www.facebook.com/fu.jsclub" target="_blank" rel="noopener noreferrer">
                        <img src={Logo} alt="logos" width="20%" />
                      </a>
                      <a href="http://daihoc.fpt.edu.vn/" target="_blank" rel="noopener noreferrer">
                        <img src={FU} alt="logos" width="37%" />
                      </a>
                      <a href="http://daihoc.fpt.edu.vn/" target="_blank" rel="noopener noreferrer">
                        <img src={PDP} alt="logos" width="37%" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
