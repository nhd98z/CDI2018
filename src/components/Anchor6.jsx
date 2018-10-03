import React from 'react';
import './Anchor6.css';
import ava1 from '../images/avatar1.jpg';
import ava2 from '../images/avatar2.jpg';
import ava3 from '../images/avatar3.jpg';
import Footer from './Footer';

class Anchor6 extends React.Component {
  render() {
    return (
      <aside id="anchor6" className="ac6_wrap">
        <h1 className="ac6_title">Ban cố vấn</h1>
        <div className={window.location.hash === '#examiners' ? 'ac6 ac6_animate' : 'ac6'}>
          <div>
            <img src={ava1} alt="ava" />
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
            <img src={ava2} alt="ava" />
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
            <img src={ava3} alt="ava" />
            <div className="ac6_content">
              <h4>
                Thầy
                <span> Chu Xuân Luyện</span>
              </h4>
              <h5 className="ac6_content_first">Giảng viên bộ môn lập trình</h5>
              <h5>Đại học FPT</h5>
            </div>
          </div>
        </div>
        <Footer />
      </aside>
    );
  }
}

export default Anchor6;
