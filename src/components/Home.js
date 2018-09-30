import React, { Component } from 'react';
import Anchor1 from './Anchor1';
import Anchor2 from './Anchor2';
import Anchor3 from './Anchor3';
import Anchor4 from './Anchor4';
import Anchor5 from './Anchor5';
import Anchor6 from './Anchor6';
import Anchor7 from './Anchor7';
import Header from './Header';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Anchor1 />
        <Anchor2 />
        <Anchor3 />
        <Anchor4 />
        <Anchor5 />
        <Anchor6 />
        <Anchor7 />
      </div>
    );
  }
}
