import React from "react";

export default function Contact() {
  return (
    <>
      <div id="quote" className="single-section silver-bg quote-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 m-auto">
              <div className="section-heading">
                <h2 className="section-title">Have a project on Mind?</h2>
                <p>I can transform your idea into real project in few weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact parallax_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 m-auto">
              <div className="contact-form">
                <div className="section-heading text-center">
                  <h2 className="section-title">Get a Quote</h2>
                  <p className="section-description">
                    Fill the contact form with real information and specify your
                    idea details to make it easy for me.
                  </p>
                </div>
                <form
                  action="#"
                  method="post"
                  id="validation"
                  className="form-area"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="select-area">
                        <select name="project">
                          <option selected="true" disabled="disabled">
                            What your project need?
                          </option>
                          <option value="ux_ui">UX / UI</option>
                          <option value="cms_wp">WordPress</option>
                          <option value="web_app">Web App</option>
                          <option value="mobile_app">Mobile App</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-area">
                        <input name="name" type="text" required />
                        <label className="floating-label">Name*</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-area">
                        <input name="email" type="email" required />
                        <label className="floating-label">Email*</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-area">
                        <input name="company" type="text" required />
                        <label className="floating-label">Company Name*</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-area">
                        <input name="phone" type="tel" required />
                        <label className="floating-label">Phone*</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="select-area">
                        <select name="budget">
                          <option selected="true" disabled="disabled">
                            What is your budget?
                          </option>
                          <option value="under $500">
                            My budget is under $500
                          </option>
                          <option value="$500 to $1000">
                            My budget is between $500 to $1000
                          </option>
                          <option value="$1000 to $1500">
                            My budget is between $1000 to $1500
                          </option>
                          <option value="over $1500">
                            My budget is over $1500
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="text-area">
                        <textarea name="message" rows="6" required></textarea>
                        <label className="floating-label">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        name="submit"
                        type="submit"
                        className="btn button-scheme"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-sm-12 m-auto">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 contact-info">
                  <div className="icon-box">
                    <span className="icon-phone"></span>
                  </div>
                  <h3>Call Me</h3>
                  <ul>
                    <li>(+33) 7 45 39 01 00</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 contact-info">
                  <div className="icon-box">
                    <span className="icon-mail"></span>
                  </div>
                  <h3>Email Me</h3>
                  <ul>
                    <li>moez.zineb@gmail.com</li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-4 contact-info">
                  <div className="icon-box">
                    <span className="icon-location"></span>
                  </div>
                  <h3>Address</h3>
                  <ul>
                    <li>98 Av. du Général de Gaulle</li>
                    <li>92140 Clamart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
