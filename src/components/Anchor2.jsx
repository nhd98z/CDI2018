import React from 'react';

import ci_intro from '../videos/ci-intro.mp4';

class Anchor2 extends React.Component {
  render() {
    return (
      <video width="100%" controls autoPlay style={{ display: 'block' }}>
        <source src={ci_intro} type="video/mp4" />
      </video>
    );
  }
}

export default Anchor2;
