import React from "react";

export default function HeadSlide() {
  return (
    <div id="home" className="home-area">
      <div className="water-effect"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 home-content text-center">
            <h5 className="greet">
              Hello, my name is <strong>Moez ZAINEB</strong>
            </h5>
            <h1 className="skills cd-headline letters scale">
              <span>I'm a </span>
              <span className="cd-words-wrapper">
                <b className="is-visible">Developer</b>
                <b>Freelancer</b>
              </span>
            </h1>
            <p className="description">
              I'm a Full-stack developer from Tunisia, I've graduated in juin
              2016 but i've built my skills for more than 5 years by worked on
              good projects.
            </p>
            <div className="button-area">
              <a className="btn scroll" href="#portfolio">
                Portfolio
              </a>
              <a className="btn scroll button-scheme" href="#quote">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
