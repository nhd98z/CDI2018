import React from 'react';

import './Anchor6.css';
import ava from '../images/avatar.jpg';

class Anchor6 extends React.Component {
  render() {
    return (
      <aside id="anchor6" className="ac6_wrap">
        <h1 className="ac6_title">Ban giám khảo</h1>
        <div className="ac6 ac6_animate">
          <div>
            <img src={ava} alt="ava" />
            <div className="ac6_content">
              <h4>
                Anh
                <span> Tôn Hồng Đức</span>
              </h4>
              <h5 className="ac6_content_first">9 năm kinh nghiệm lập trình</h5>
              <h5>TOP 30 Vietnam StackOverFlow</h5>
            </div>
          </div>
          <div>
            <img src={ava} alt="ava" />
            <div className="ac6_content">
              <h4>
                Thầy
                <span> Đào Trọng Duy</span>
              </h4>
              <h5 className="ac6_content_first">Trưởng phòng đào tạo</h5>
              <h5>Viện đào tạo quốc tế FPT</h5>
            </div>
          </div>
          <div>
            <img src={ava} alt="ava" />
            <div className="ac6_content">
              <h4>
                Anh
                <span> Nguyễn Thái Bảo</span>
              </h4>
              <h5 className="ac6_content_first">90 năm kinh nghiệm lập trình</h5>
              <h5>TOP 01 Vietnam StackOverFlow</h5>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Anchor6;
