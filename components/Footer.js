import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="single-section">
        <div className="container">
          <div className="row">
            <div
              className="
                col-md-12 col-sm-12
                text-center text-center
                align-self-center
              "
            >
              <ul className="footer-social">
                <li>
                  <a href="#0" target="_blank" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" target="_blank" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" target="_blank" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" target="_blank" title="Behance">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
              </ul>
              <h6 className="copy-txt">Copyright © 2018 Resume.</h6>
            </div>
          </div>
        </div>
      </footer>
      <div className="whatsapp-area">
        <div className="whatsapp-popup fadeOut">
          <div className="header">
            <button type="button" className="close-popup">
              <span className="icon-cancel"></span>
            </button>
            <h2>Need help?</h2>
            <p>Contact us by WhatsApp</p>
          </div>
          <div className="chat-area">
            <img className="img-item" src="images/whatsapp-img.jpg" alt="" />
            <p>How may I help you?</p>
          </div>
          <form className="form-area" id="form-area">
            <input
              className="whats-input"
              type="text"
              id="whats-in"
              placeholder="Send Your Message..."
            />
            <button type="submit" className="send-btn">
              <span className="icon-paper-plane-o"></span>
            </button>
          </form>
        </div>
        <div className="chat-button-area zoomOut">
          <button type="button" id="whatsapp-btn" className="whatsapp-btn">
            <span className="icon-whatsapp"></span>
          </button>
          <div className="circle-animation"></div>
        </div>
      </div>
    </>
  );
}
