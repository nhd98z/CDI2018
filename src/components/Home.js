import React, { Component } from "react";
import Anchor1 from "./Anchor1";
import Anchor2 from "./Anchor2";
import Anchor3 from "./Anchor3";
import Anchor4 from "./Anchor4";
import Anchor5 from "./Anchor5";
import Anchor6 from "./Anchor6";
import Anchor7 from "./Anchor7";
import Header from "./Header";
import Footer from "./Footer";
import ReactFullpage from '@fullpage/react-fullpage';

export default class Home extends Component {

  render() {
    return (
      <ReactFullpage
      anchors={['home', 'intro', 'award', 'timeline', 'about', 'partners', 'examiners']}
      navigation="true"
    render={({ state, fullpageApi }) => {
      return (
        <div>

          <Header />
          <div id="fullpage">
            <div className="section">
              <Anchor1 />
            </div>
            <div className="section">
              <Anchor2 />
            </div>
            <div className="section">
              <Anchor3 />
            </div>
            <div className="section">
              <Anchor4 />
            </div>
            <div className="section">
              <Anchor5 />
            </div>
            <div className="section">
              <Anchor7 />
            </div>
            <div className="section">
              <Anchor6 />
            </div>
          </div>
          <Footer />
          </div>
      );
    }}
  />
    );
  }
}
