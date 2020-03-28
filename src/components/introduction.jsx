import React, { Component } from 'react'
import "./../App.css";
import img_bg_slide0 from './images/img_bg_slide0.jpg'
import img_bg_slide1 from './images/img_bg_slide_2.jpg'
import img_bg_slide2 from './images/img_bg_slide_1.JPG'

export default class Introduction extends Component {

  render() {    
    return ( 
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: `url(${img_bg_slide0})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>สวัสดีครับ <br />ผมชื่ออนุรักษ์</h1>
                          <p><a className="btn btn-primary btn-learn" href="#" target="_blank" rel="noopener noreferrer">SAR<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${img_bg_slide1})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>ตำแน่งครูผู้ช่วย<br /> โรงเรียนภูเขียว</h1>
                          <p><a className="btn btn-primary btn-learn" href="#" target="_blank" rel="noopener noreferrer">ผลการปฏิบัติงาน<i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: `url(${img_bg_slide2})`}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>สอนวิชาเทคโนโลยี <br/>และคอมพิวเตอร์ </h1>
                          <p><a className="btn btn-primary btn-learn" href="#" target="_blank" rel="noopener noreferrer">ชั้นเรียน <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
