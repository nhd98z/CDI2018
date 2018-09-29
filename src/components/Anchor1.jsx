import React, { Component } from 'react';

import './Anchor1.css';
import light_bulb from '../images/bongden.png';

const DEADLINE = '10/19/2018';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUtil(DEADLINE);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUtil(DEADLINE), 1000);
  }

  leading0 = num => (num < 10 ? '0' + num : num);

  getTimeUtil(deadline) {
    const time = Date.parse(deadline) - new Date().getTime();
    // console.log('time', time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    // console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div className="fa_background">
        <div className="fa">
          <div className="fa_big_hulb_section">
            <img src={light_bulb} alt="light_bulb" />
          </div>
          <div className="fa_content_section row">
            <h2 className="fa_vsl">Vòng sơ loại</h2>
            <h1 className="fa_nyt">Nộp ý tưởng</h1>
            <p className="fa_lorem">
              Dưới con mắt của chúng tôi, mỗi lập trình viên là một tài năng. Họ đều có điểm chung là xuất phát từ đam mê, đi lên bằng khổ luyện, và
              tỏa sáng bằng tài năng và trí tuệ tuyệt vời. Và chúng tôi tin rằng, '<span>Coding Project 2018</span>' chính là sân chơi đáng giá dành
              cho những coder trẻ luôn khao khát được tỏa sáng, được cháy hết mình với đam mê.
            </p>
            <h1 className="fa_number">
              <span>{this.leading0(this.state.days)}</span>
              &nbsp;:&nbsp;
              {this.leading0(this.state.hours)}
              &nbsp;:&nbsp;
              {this.leading0(this.state.minutes)}
              &nbsp;:&nbsp;
              {this.leading0(this.state.seconds)}
            </h1>
            <h3 className="fa_ngaygio">
              Ngày&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Giờ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Phút&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Giây
            </h3>
            <input type="button" className="fa_btn" value="ĐĂNG KÝ NGAY" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
