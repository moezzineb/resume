import React from "react";

export default function About() {
  return (
    <div id="about" className="single-section about-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="about-img">
              <img src="images/about-image.png" alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="about-content">
              <div className="section-heading">
                <h2 className="section-title">About Me</h2>
                <h6 className="about-role">I am a Full-Stack Web Developer</h6>
              </div>
              <p>
                I am a Tunisian web developer, graduated in June 2016, but I
                developed my skills during more than 4 years working on exciting
                creative projects for local and offshore clients.
              </p>
              <p>
                Over the past few years I have met a lot of people who are
                really experts in specific areas, getting in touch with more
                experienced developers taking their advice and getting the
                community talking about new technologies and projects in
                different specialties.
              </p>
              <hr />
              <ul className="list-inline about-info">
                <li>
                  <span>Name:</span>
                  <p>Moez ZINEB</p>
                </li>
                <li>
                  <span>Email:</span>
                  <p>
                    <a href="mailto:moez.zineb@gmail.com">
                      moez.zineb@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <span>Age:</span>
                  <p>28</p>
                </li>
                <li>
                  <span>From:</span>
                  <p>Tunis, Tunisia</p>
                </li>
              </ul>
              <a href="#0" className="btn button-scheme">
                Resume
              </a>
              <a href="#experience" className="btn scroll">
                Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
