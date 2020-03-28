import React, { Component } from "react";
import "./../App.css";
import Tabletop from "tabletop";
import Object from "./object";

var year = "2020";
var id = '';
export default class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      year,
      id: this.props.id
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1tjrWgeusmGBaZsgFuUt7S5UmLhSXt5sBmjqtfJcgkj8",
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
      var dateD = obj.Day;
      var yFour = dateD.substring(dateD.length - 4, dateD.length);
      var dateTo = obj.fromDate;
      var yTo = dateTo.substring(dateTo.length - 4, dateTo.length);
      if (prev !== yFour && yFour !== "") {
        options.push(yFour);
        prev = yFour;
      } else {
        if (prev !== yTo) {
          options.push(yTo);
        }
      }
    });
    console.log(Array.from(options));
    console.log(this.props.id)
    return (
      <div>
        <section className="colorlib_training" data-section="blog">
        {/*  <div className="colorlib-narrow-content" style={{ display: "block" }}>
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">ผลงาน</span>
                <h2 className="colorlib-heading">และการฝึกอบรม</h2>
                  <div>
                    {options.map((name, index) => (
                      <button
                        key={index}
                        className="btn_option"
                        to="#"
                        onClick={this.handleSortTraining}
                      >
                        {parseInt(name) + parseInt("543")}
                      </button>
                    ))}
                  </div>
              </div>
            </div>
            <div className="row row-pt-md">
              <div>
                <div
                  className="services color-1"
                  style={{ alignItems: "center" }}
                >
                    <span
                    
                    style={{ textAlign: "center", width: "500px" }}
                  >
                    <div>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: 20,
                          color:"grey"
                        }}
                      >
                        ข้อมูลปี {parseInt(this.state.year) + 543}
                      </p>
                    </div>
                  </span>
                  <Object
                    dataObject={{ data }}
                    yearObject={this.state.year}
                  ></Object>
                </div>
              </div>
            </div>
          </div>*/}
                    </section> 
      </div>
    );
  }
}
