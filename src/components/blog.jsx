import React, { Component } from 'react'

import Tabletop from "tabletop";

import Object from "./object";

var data = [];
var year = '2020';
var id ='';
export default class Blog extends Component {
	constructor() {
		super();
		this.state = {
		  data: [],
		  year,
		};
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
    console.log(data);
    console.log(this.state.year);
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			{/*<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Renovating National Gallery</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Make website from scratch</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
	</div>
	<div className="colorlib-narrow-content" style={{ display: "block" }}>
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
						onClick={this.handleSort(name)}
						value={name}
                      >
                        {parseInt(name)+543}
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
    )
  }
}
