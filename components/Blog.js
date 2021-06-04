import React from "react";

export default function Blog() {
  return (
    <div id="blog" className="single-section blog-area parallax_img">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2 className="section-title">Blog</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel blog-carousel">
              <div className="blog-item">
                <div className="category">News</div>
                <div className="img-item">
                  <img src="images/blog-01.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <div className="text-title">
                    <div className="date">Aug 13, 2018</div>
                    <a href="#0">
                      <h3>How subscription business with user analytics</h3>
                    </a>
                    <p>
                      Will be distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="category">News</div>
                <div className="img-item">
                  <img src="images/blog-02.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <div className="text-title">
                    <div className="date">Aug 13, 2018</div>
                    <a href="#0">
                      <h3>The benefits of a DevOps Approach</h3>
                    </a>
                    <p>
                      Will be distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="category">News</div>
                <div className="img-item">
                  <img src="images/blog-03.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <div className="text-title">
                    <div className="date">Aug 13, 2018</div>
                    <a href="#0">
                      <h3>What is DevOps and why does it matter?</h3>
                    </a>
                    <p>
                      Will be distracted by the readable content of a page when
                      looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="category">Brands</div>
                <div className="img-item">
                  <img src="images/blog-04.jpg" alt="" />
                </div>
                <div className="blog-text">
                  <div className="text-title">
                    <div className="date">Aug 13, 2018</div>
                    <a href="#0">
                      <h3>The benefits of a DevOps Approach</h3>
                    </a>
                    <p>
                      Will be distracted by the readable content of a page when
                      looking at its layout.
                    </p>
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
