import React, { Component } from "react";
import "./../App.css";
import Tabletop from "tabletop";
import Timelinerender from "./timelinerender";
import Training from './training'

var data = [];
var year = '2020';
var id ='';
export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      year,
    };
  }

  handleSort = (id, value) => event => {
    this.setState({ year: value,
        id: id
     });
  };

  componentDidMount() {
    Tabletop.init({
      key: "1hov_vf4QAoolGNtRh4whSunYidBp106pFLO4pikre8s",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    const { data } = this.state;
    var options = [];
    var prev = "";
    data.forEach(obj => {
      var dateD = obj.Date;
      var lastFour = dateD.substring(dateD.length - 4, dateD.length);
      if (prev !== lastFour) {
        options.push(lastFour);
        prev = lastFour;
      }
    });
    console.log(Array.from(options));
    console.log(data);
    console.log(this.state.year);
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">ข้อมูลด้าน</span>
                <h2 className="colorlib-heading animate-box">
                  การปฏิบัติงานและกิจกรรมที่ได้เข้าร่วม
                  <div></div>
                </h2>
              </div>
            </div>

            <div>
              {options.map((name, index) => (
                <button
                  key={index}
                  className="btn_option"
                  to="#"
                  onClick={this.handleSort(1,name)}
                >
                  {parseInt(name) + parseInt("543")}
                </button>
              ))}
            </div>
            <Timelinerender
              data={{data}}
              year={this.state.year}
            ></Timelinerender>
          </div>
        </section>
      </div>
    );
  }
}
