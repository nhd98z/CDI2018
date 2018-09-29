import React from 'react';

import Header from './Header';

import ci_intro from '../videos/ci-intro.mp4';

class Anchor2 extends React.Component {
  render() {
    return (
      <aside>
        <Header showBtn />
        <video width="100%" controls>
          <source src={ci_intro} type="video/mp4" />
        </video>
      </aside>
    );
  }
}

export default Anchor2;
