import React, { Component } from "react";
import "./Anchor3.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cash from "../images/Screen 3/Money.png";
import TechKidsScholarship from "../images/Screen 3/TechKidsScholarship.png";
import TopCVAccount from "../images/Screen 3/TopCVAccount.png";
import TopCVScholarship from "../images/Screen 3/TopCVScholarship.png";

export default class Award extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onView: 0,
      key: 0,
      firstActive: true,
      secondActive: false,
      thirdActive: false,
      sumaryTitle: "GIẢI NHẤT",
      sumaryMoney: "56,000,000",
      cash: "15,000,000",
      techkidScholarship: "31,000,000",
      techkidScholarshipPercentage: "100",
      topcvAccount: "6,000,000",
      topcvScholarship: "3,000,000"
    };
  }

  firstPrize = () => {
    const key = 1;
    const firstActive = true;
    const secondActive = false;
    const thirdActive = false;
    const sumaryTitle = "GIẢI NHẤT";
    const sumaryMoney = "56,000,000";
    const cash = "15,000,000";
    const techkidScholarship = "31,000,000";
    const techkidScholarshipPercentage = "100";
    const topcvAccount = "6,000,000";
    const topcvScholarship = "3,000,000";
    this.setState({
      key,
      firstActive,
      secondActive,
      thirdActive,
      sumaryTitle,
      sumaryMoney,
      cash,
      techkidScholarship,
      techkidScholarshipPercentage,
      topcvAccount,
      topcvScholarship
    });
  };

  secondPrize = () => {
    const key = 2;
    const firstActive = false;
    const secondActive = true;
    const thirdActive = false;
    const sumaryTitle = "GIẢI NHÌ";
    const sumaryMoney = "32,000,000";
    const cash = "10,000,000";
    const techkidScholarship = "12,400,000";
    const techkidScholarshipPercentage = "40";
    const topcvAccount = "6,000,000";
    const topcvScholarship = "3,000,000";
    this.setState({
      key,
      firstActive,
      secondActive,
      thirdActive,
      sumaryTitle,
      sumaryMoney,
      cash,
      techkidScholarship,
      techkidScholarshipPercentage,
      topcvAccount,
      topcvScholarship
    });
  };

  thirdPrize = () => {
    const key = 3;
    const firstActive = false;
    const secondActive = false;
    const thirdActive = true;
    const sumaryTitle = "GIẢI BA";
    const sumaryMoney = "15,000,000";
    const cash = "5,000,000";
    const techkidScholarship = "6,200,000";
    const techkidScholarshipPercentage = "20";
    const topcvAccount = "500,000";
    const topcvScholarship = "2,750,000";
    this.setState({
      key,
      firstActive,
      secondActive,
      thirdActive,
      sumaryTitle,
      sumaryMoney,
      cash,
      techkidScholarship,
      techkidScholarshipPercentage,
      topcvAccount,
      topcvScholarship
    });
  };

 
  render() {
    return (
      <div id="anchor3" className="award col-md-12">
        <div key={this.props.onView} className="row mt-0 ">
          <div className="col-md-1" />
          <div className="award-brand col-md-10 row fade-in-top">
            <p style={{ borderBottom: "3px solid" }}>GIẢI THƯỞNG</p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div key={this.state.key} className="award-content col-md-10 row">
            <div className="award-content-left col-md-6 ">
              <div className="row">
                <AwardSumary
                  sumaryMoney={this.state.sumaryMoney}
                  sumaryTitle={this.state.sumaryTitle}
                />
                <div className="award-prize row">
                  <div
                    className="col-md-12 text-center"
                    style={{ color: "#FFFFFF", fontSize: "4vh" }}
                  >
                    Chọn để xem các giải thưởng
                  </div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.firstActive ? { opacity: "0.5" } : {}}
                    onClick={() => this.firstPrize()}
                  >
                    <div className="prize-sumary text-center fade-in-top">
                      <div className="prize-sumary-title">GIẢI NHẤT</div>
                      <div className="prize-sumary-money">
                        56,000,000 <span style={{ fontSize: "2vh" }}>VND</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.secondActive ? { opacity: "0.5" } : {}}
                    onClick={() => this.secondPrize()}
                  >
                    <div className="prize-sumary text-center fade-in-top">
                      <div className="prize-sumary-title">GIẢI NHÌ</div>
                      <div className="prize-sumary-money">
                        32,000,000 <span style={{ fontSize: "2vh" }}>VND</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.thirdActive ? { opacity: "0.5" } : {}}
                    onClick={() => this.thirdPrize()}
                  >
                    <div className="prize-sumary text-center fade-in-top">
                      <div className="prize-sumary-title">2 GIẢI BA</div>
                      <div className="prize-sumary-money">
                        15,000,000 <span style={{ fontSize: "2vh" }}>VND</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" />
            </div>
            <div className="award-content-right col-md-6">
              <div className="row pb-4">
                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto "
                    src={cash}
                    style={{
                      width: "15vh",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto fade-in-right">
                    {this.state.cash}{" "}
                    <span style={{ fontSize: "2vh" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff", fontSize: "2.5vh" }}
                    >
                      Tiền mặt
                    </span>
                  </div>
                </div>

                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto "
                    src={TechKidsScholarship}
                    style={{
                      width: "15vh",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto fade-in-right">
                    {this.state.techkidScholarship}{" "}
                    <span style={{ fontSize: "2vh" }}>VND</span>
                    <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff", fontSize: "2.5vh" }}
                    >
                      5 học bổng {this.state.techkidScholarshipPercentage}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="row pb-4">
                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto"
                    src={TopCVAccount}
                    style={{
                      width: "15vh",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto fade-in-right">
                    {this.state.topcvAccount}{" "}
                    <span style={{ fontSize: "2vh" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff", fontSize: "2.5vh" }}
                    >
                      5 tài khoản VIP TopCV
                    </span>
                  </div>
                </div>

                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto"
                    src={TopCVScholarship}
                    style={{
                      width: "15vh",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto fade-in-right">
                    {this.state.topcvScholarship}{" "}
                    <span style={{ fontSize: "2vh" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff", fontSize: "2.5vh" }}
                    >
                      5 khóa học của TopCV
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 text-center"
                style={{ color: "#ffffff", fontSize: "3vh" }}
              >
                và các phần quà có giá trị khác
              </div>
            </div>
          </div>

          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}

class AwardSumary extends Component {
  render() {
    return (
      <div className="award-sumary fade-in-top">
        <div className="award-sumary-title">{this.props.sumaryTitle}</div>
        <div className="award-sumary-money">
          {this.props.sumaryMoney}
          <span style={{ fontSize: "5vh" }}>VND</span>{" "}
        </div>
      </div>
    );
  }
}
