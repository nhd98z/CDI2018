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
      <div className="award col-md-12">
        <div className="row">
          <div className="col-md-1" />
          <div className="award-brand col-md-10 row">
            <u>GIẢI THƯỞNG</u>
          </div>
          <div className="col-md-1" />
          <div className="col-md-1" />
          <div className="award-content col-md-10 row">
            <div className="award-content-left col-md-6 ">
              <div className="row">
                <div className="award-sumary ">
                  <div className="award-sumary-title">
                    {this.state.sumaryTitle}
                  </div>
                  <div className="award-sumary-money">
                    {this.state.sumaryMoney}
                    <span style={{ fontSize: "30px" }}>VND</span>{" "}
                  </div>
                </div>
                <div className="award-prize row">
                  <div className="col-md-12 text-center" style={{color:"#FFFFFF",fontSize:"26px"}}>Chọn để xem các giải thưởng</div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.firstActive ? {opacity:"0.5"}:{}}
                    onClick ={() => this.firstPrize()}
                  >
                    <div className="prize-sumary text-center">
                      <div className="prize-sumary-title">GIẢI NHẤT</div>
                      <div className="prize-sumary-money">
                        56,000,000 <span style={{ fontSize: "10px" }}>VND</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.secondActive ? {opacity:"0.5"}:{}}
                    onClick ={() => this.secondPrize()}
                  >
                    <div className="prize-sumary text-center">
                      <div className="prize-sumary-title">GIẢI NHÌ</div>
                      <div className="prize-sumary-money">
                        32,000,000 <span style={{ fontSize: "10px" }}>VND</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="award-prize-content col-md-4"
                    style={this.state.thirdActive ? { opacity: "0.5" } : {}}
                    onClick ={() => this.thirdPrize()}
                  >
                    <div className="prize-sumary text-center">
                      <div className="prize-sumary-title">2 GIẢI BA</div>
                      <div className="prize-sumary-money">
                        15,000,000 <span style={{ fontSize: "10px" }}>VND</span>{" "}
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
                      width: "120px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto">
                    {this.state.cash}{" "}
                    <span style={{ fontSize: "12px" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff" }}
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
                      width: "120px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto">
                    {this.state.techkidScholarship}{" "}
                    <span style={{ fontSize: "12px" }}>VND</span>
                    <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff" }}
                    >
                      5 học bổng {this.state.techkidScholarshipPercentage}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="row pb-4">
                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto "
                    src={TopCVAccount}
                    style={{
                      width: "120px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto">
                    {this.state.topcvAccount}{" "}
                    <span style={{ fontSize: "12px" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff" }}
                    >
                      5 tài khoản VIP TopCV
                    </span>
                  </div>
                </div>

                <div className="award-item col-md-6 text-center">
                  <img
                    className="col-md-12 m-auto "
                    src={TopCVScholarship}
                    style={{
                      width: "120px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    alt=""
                  />
                  <div className="col-md-12 m-auto">
                    {this.state.topcvScholarship}{" "}
                    <span style={{ fontSize: "12px" }}>VND</span> <br />
                    <span
                      className="col-md-12 m-auto"
                      style={{ color: "#ffffff" }}
                    >
                      5 khóa học của TopCV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}
