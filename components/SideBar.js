import React from "react";

export default function SideBar() {
  return (
    <div className="left-side-area">
      <header className="header-left-area">
        <div className="container">
          <nav className="navbar">
            <div className="header-content">
              <div className="image-item">
                <div className="status active"></div>
                <img src="images/profile-image.jpg" alt="" />
              </div>
              <div className="caption-area">
                <h5 className="name">Moez ZAINEB</h5>
                <h6 className="designation skills cd-headline clip">
                  <span>I'm a &nbsp;</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible">Freelancer</b>
                    <b>Developer</b>
                  </span>
                </h6>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#side-menu"
              aria-controls="side-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span className="icon-thumbnails"></span>
              </span>
            </button>
            <div className="menu-main-area align-items-center">
              <div className="collapse navbar-collapse" id="side-menu">
                <ul id="menu_scroll" className="navbar-nav side-menu">
                  <li>
                    <a href="#home" className="scroll active">
                      <span className="icon-home-house-streamline"></span> Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="scroll">
                      <span className="icon-map-streamline-user"></span> About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="scroll">
                      <span className="icon-dashboard-speed-streamline"></span>
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="scroll">
                      <span className="icon-settings-streamline-1"></span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="scroll">
                      <span className="icon-streamline-suitcase-travel"></span>
                      Portfolio
                    </a>
                  </li>
                  {/* <li>
                    <a href="#clients" className="scroll">
                      <span className="icon-speech-streamline-talk-user"></span>
                      Clients
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#blog" className="scroll">
                      <span className="icon-design-graphic-tablet-streamline-tablet"></span>
                      Blog
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <ul className="header-social-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/moez-zineb"
                  target="_blank"
                  title="Linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moezzineb"
                  target="_blank"
                  title="Github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/moezbenzineb"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <h6 className="copy-txt">Copyright © {new Date().getFullYear()}</h6>
          </nav>
        </div>
      </header>
    </div>
  );
}
