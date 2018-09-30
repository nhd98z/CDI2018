import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return <aside className="footer">
        <p>© 2018 Coding Inspiration</p>
        <p>Địa chỉ: Đại học FPT, Hòa Lạc, Hà Nội</p>
        <p>
          Liên hệ: <a href="mailto:cdi2018.fpt@gmail.com?Subject=Thắc%20mắc%20về%20cuộc%20thi" target="_top">
            Mail
          </a> | <a href="tel:01647520088">Phone</a>
        </p>
      </aside>;
  }
}

export default Footer;
