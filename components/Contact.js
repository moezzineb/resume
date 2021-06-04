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
                <p>
                  Libero ipsam numquam quos minus at corporis illum, reiciendis
                  aliquam ut non dolor. Optio provident numquam
                </p>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione!
                  </p>
                </div>
                <form
                  action="https://newtemplate.net/demo/resume/template/side-menu/php/form.php"
                  method="post"
                  id="validation"
                  className="form-area"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="select-area">
                        <select name="project">
                          <option value="">What your project need?</option>
                          <option value="Custom interface and layout">
                            Custom interface and layout
                          </option>
                          <option value="CMS integrations (WordPress)">
                            CMS integrations (WordPress)
                          </option>
                          <option value="Website design">Website design</option>
                          <option value="Seo optimization">
                            SEO optimization
                          </option>
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
                          <option value="">What is your budget?</option>
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
                  <h3>Call Us</h3>
                  <ul>
                    <li>(001) 8686 234 432</li>
                    <li>Office - (001) 2345 678 900</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 contact-info">
                  <div className="icon-box">
                    <span className="icon-mail"></span>
                  </div>
                  <h3>Email Us</h3>
                  <ul>
                    <li>Info@example.com</li>
                    <li>support@example.com</li>
                  </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-4 contact-info">
                  <div className="icon-box">
                    <span className="icon-location"></span>
                  </div>
                  <h3>Address</h3>
                  <ul>
                    <li>Elston TCLexington</li>
                    <li>Ave 549MD, London, UK</li>
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
