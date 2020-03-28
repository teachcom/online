import React, { Component } from "react";
import "./../App.css";

var photo = [];
export default class Timelinerender extends Component {
  
  componentDidMount() {
    console.log("componentDidMount() lifecycle");
  }

  render() {
    const { data } = this.props.data;
    var year = this.props.year;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="timeline-centered">
            <article
              className="timeline-entry animate-box"
              data-animate-effect="fadeInTop"
            >
              {data.map(obj => {
                var dateD = obj.Date;
                var lastFour = dateD.substring(dateD.length - 4, dateD.length);
                var firstOne = dateD.substring(0, dateD.length - 4);
                if (lastFour === year) {
                  var im1 = obj.Picture1.replace("open?", "uc?export=view&");
                  var im2 = obj.Picture2.replace("open?", "uc?export=view&");
                  var im3 = obj.Picture3.replace("open?", "uc?export=view&");
                  var im4 = obj.Picture4.replace("open?", "uc?export=view&");
                  var v2 = "inline-block";
                  var v3 = "inline-block";
                  var v4 = "inline-block";
                  if (im2 === null || im2 === "") {
                    im2 = im1;
                    v2 = "none";
                  }
                  if (im3 === null || im3 === "") {
                    im3 = im1;
                    v3 = "none";
                  }
                  if (im4 === null || im4 === "") {
                    im4 = im1;
                    v4 = "none";
                  }
                  var head1 = obj.Topic1.localeCompare("");
                  var head2 = obj.Topic2.localeCompare("");
                  var head3 = obj.Topic3.localeCompare("");
                  if (head1 !== 0) {
                    head1 = "#" + obj.Topic1;
                  } else {
                    head1 = obj.Topic1;
                  }
                  if (head2 !== 0) {
                    head2 = "#" + obj.Topic2;
                  } else {
                    head2 = obj.Topic2;
                  }
                  if (head3 !== 0) {
                    head3 = "#" + obj.Topic3;
                  } else {
                    head3 = obj.Topic3;
                  }
                  return (
                    <div key={obj.Timestamp}>
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-5">
                          <i className="icon-pen2" />
                        </div>
                        <div className="timeline-label">
                          <h1
                            className="btn_titled"
                            style={{ fontSize: "16px" }}
                          >
                            {obj.Title} : วันที่ {firstOne}
                            {parseInt(lastFour) + 543}
                          </h1>
                          <br></br>
                          <div>
                            <h2 style={{ paddingTop: 10 }}>
                              tag:
                              <a href="">{head1}</a>
                              <a href="">{head2}</a>
                              <a href="">{head3}</a>
                            </h2>
                            <img className="photo" alt="" src={im1} />
                            <img
                              className="photo"
                              alt=""
                              src={im2}
                              style={{ display: v2 }}
                            />
                            <img
                              className="photo"
                              alt=""
                              src={im3}
                              style={{ display: v3 }}
                            />
                            <img
                              className="photo"
                              alt=""
                              src={im4}
                              style={{ display: v4 }}
                            />
                            <p>{obj.Detail}</p>
                          </div>
                        </div>
                      </div>
                      <br></br>
                    </div>
                  );
                }
              })}
            </article>
            <article
              className="timeline-entry animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="timeline-entry-inner">
                <div className="timeline-icon color-5">
                  <i className="icon-pen2" />
                </div>
                <div className="timeline-label">
                  <h2>
                    เริ่มปฏิบัติราชการวันแรก <span>11 เมษายน 2018</span>
                  </h2>
                  <p>
                    รายงานตัวและเข้ารับราชการในตำแหน่ง ครูผู้ช่วย
                    เอกการสอนคอมพิมเตอร์ โรงเรียนภูเขียว อำเภอภูเขียว
                    จังหวัดชัยภูมิ ในวันที่ 11 เดือนเมษายน พ.ศ. 2561
                  </p>
                </div>
              </div>
            </article>
            <article
              className="timeline-entry begin animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div className="timeline-entry-inner">
                <div className="timeline-icon color-none"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
