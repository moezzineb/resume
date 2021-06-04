import React from "react";

export default function Portfolio() {
  return (
    <div id="portfolio" className="single-section silver-bg portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section-heading">
              <h2 className="section-title">Our Portfolio</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione!
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="works-filter-wrap">
              <div className="row">
                <ul className="col-lg-12 col-md-12 list-inline works-filter">
                  <li className="list-inline-item tab-active" data-filter="*">
                    All
                  </li>
                  <li className="list-inline-item" data-filter=".brand">
                    Brand
                  </li>
                  <li className="list-inline-item" data-filter=".design">
                    Design
                  </li>
                  <li className="list-inline-item" data-filter=".photos">
                    Photos
                  </li>
                </ul>
              </div>
            </div>
            <div className="works-container row">
              <div className="col-lg-4 col-sm-6 works-item brand">
                <div className="item-overlay">
                  <div className="category">Brand</div>
                  <img src="images/portfolio-01.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Business Card</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-01.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 works-item design">
                <div className="item-overlay">
                  <div className="category">Design</div>
                  <img src="images/portfolio-02.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Anime Art</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-02.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 works-item photos">
                <div className="item-overlay">
                  <div className="category">Photos</div>
                  <img src="images/portfolio-03.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Business Card</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-03.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 works-item photos">
                <div className="item-overlay">
                  <div className="category">Photos</div>
                  <img src="images/portfolio-04.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Business Card</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-04.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 works-item brand">
                <div className="item-overlay">
                  <div className="category">Brand</div>
                  <img src="images/portfolio-05.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Business Card</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-05.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 works-item photos">
                <div className="item-overlay">
                  <div className="category">Photos</div>
                  <img src="images/portfolio-06.jpg" alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">Business Card</h6>
                    <div className="overlay-icons">
                      <a href="images/portfolio-06.jpg" data-lity>
                        <span className="icon-eye"></span>
                      </a>
                      <a href="#0">
                        {" "}
                        <span className="icon-link"></span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
