import React from "react";

export default function Exp() {
  return (
    <div id="experience" className="single-section silver-bg experience-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className="exp-content">
              <h5 className="subtitle">Having 4 years Experience</h5>
              <h3>
                Amazing <span>experience</span> with those companies
              </h3>
              <p>
                It's been a honor to work for this companies who gave their
                trust on my on the first steps.
              </p>
              <p>
                I've work in many projects during my experiance such in web or
                mobile plateforms.
              </p>
              <a href="#portfolio" className="btn scroll button-scheme">
                Portfolio
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="exp-block">
                  <img
                    className="img-icon"
                    src="images/coccinet.png"
                    alt=""
                    width="54"
                    height="50"
                  />
                  <h4>Coccinet</h4>
                  <h6>2018 - Present</h6>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="exp-block">
                  <img
                    className="img-icon"
                    src="images/n3rd.png"
                    alt=""
                    width="54"
                    height="50"
                  />
                  <h4>N3RD</h4>
                  <h6>2017 - 2018</h6>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="exp-block">
                  <img
                    className="img-icon"
                    src="images/edizas.png"
                    alt=""
                    width="54"
                    height="50"
                  />
                  <h4>EDIZAS</h4>
                  <h6>2016 - 2017</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
