import React, { Component } from "react";
import "./Anchor4.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Phase1 from "../images/Screen4/Phase1.png";
import Phase2 from "../images/Screen4/Phase2.png";
import Phase3 from "../images/Screen4/Phase3.png";
import Phase4 from "../images/Screen4/Phase4.png";
import Phase5 from "../images/Screen4/Phase5.png";

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    

    render() {
        return (
            <div id="anchor4" className="timeline">
                <div className="tit-timeline">
                    <span className="tl-title">TIMELINE</span>
                </div>
                
                <div className="row fix-col">
                    <div className="col-md-1 fix-col"></div>
                    <div className="col-md-2 fix-col">
                        <div className="phase-1">
                            <div className="in4-phase">
                                <span className="text-in-phase">Nhận đơn</span> <br/>
                                <span className="text-in-phase">đăng kí</span> <br/>
                                <span className="num-in-phase">25.09 - 19.10</span> <br/><br/>
                            </div>
                            <img src={Phase1} alt="phase 1" width="120%"/>
                        </div>
                    </div>
                    <div className="col-md-2 fix-col">
                        <div className="phase-2">
                            <div className="in4-phase">
                                <span className="text-in-phase">Hoàn thiện &</span> <br/>
                                <span className="text-in-phase">nộp sản phẩm</span> <br/>
                                <span className="num-in-phase">23.10 - 29.11</span> <br/><br/>
                            </div>
                            <img src={Phase2} alt="phase 2" width="120%"/>
                        </div>
                    </div>
                    <div className="col-md-2 fix-col">
                        <div className="phase-3">
                            <div className="in4-phase">
                                <span className="text-in-phase">Sơ loại</span> <br/>
                                <span className="text-in-phase">vòng 2</span> <br/>
                                <span className="num-in-phase">30.11 - 07.12</span> <br/><br/>
                            </div>
                            <img src={Phase3} alt="phase 3" width="120%"/>
                        </div>
                    </div>
                    <div className="col-md-2 fix-col">
                        <div className="phase-4">
                            <div className="in4-phase">
                                <span className="text-in-phase">Hoàn thiện</span> <br/>
                                <span className="text-in-phase">sản phẩm</span> <br/>
                                <span className="num-in-phase">08.12 - 12.12</span> <br/><br/>
                            </div>
                            <img src={Phase4} alt="phase 4" width="120%"/>
                        </div>
                    </div>
                    <div className="col-md-2 fix-col">
                        <div className="phase-5">
                            <div className="in4-phase">
                                <span className="text-in-phase">Đêm</span> <br/>
                                <span className="text-in-phase">Chung kết</span> <br/>
                                <span className="num-in-phase">13.12</span> <br/>
                            </div>
                            <img src={Phase5} alt="phase 5" width="140%"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}