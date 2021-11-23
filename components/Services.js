import React from "react";

export default function Services() {
  return (
    <div id="services" className="single-section services-area parallax_img">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">Services</h2>
              <p className="section-description"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="single-service">
              <span className="icon-display"></span>
              <div className="service-body">
                <h6 className="service-title">Web Development</h6>
                <p className="service-description">
                  Focused on developing high quality web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="single-service">
              <span className="icon-phone"></span>
              <div className="service-body">
                <h6 className="service-title">Mobile Development</h6>
                <p className="service-description">
                  Developing mobile apps with latest technologies on the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
