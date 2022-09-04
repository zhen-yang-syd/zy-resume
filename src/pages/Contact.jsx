import { Row, Col } from "antd";
const Contact = () => {
  return (
    <>
      <div class="page-title">
        <h2>Contact</h2>
      </div>
      <div>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={8}>
            <div class="lm-info-block gray-default">
              <i class="lnr lnr-map-marker"></i>
              <h4>Sydney</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-phone-handset"></i>
              <h4>+61-452-159-381</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-envelope"></i>
              <h4>zhen.yang.syd@gmail.com</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>

            <div class="lm-info-block gray-default">
              <i class="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span class="lm-info-block-value"></span>
              <span class="lm-info-block-text"></span>
            </div>
          </Col>
          <Col xs={24} sm={14}>
            <div id="map" class="map">
              <div class="lmpixels-map">
                <iframe
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <div class="block-title">
              <h3>
                How Can I <span>Help You?</span>
              </h3>
            </div>

            {/* <form
              id="contact_form"
              class="contact-form"
              action="contact_form/contact_form.php"
              method="post"
              novalidate="true"
            >
              <div class="messages"></div>

              <div class="controls two-columns">
                <div class="fields clearfix">
                  <div class="left-column">
                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder=""
                        required="required"
                        data-error="Name is required."
                      />
                      <label>Full Name</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder=""
                        required="required"
                        data-error="Valid email is required."
                      />
                      <label>Email Address</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>

                    <div class="form-group form-group-with-icon">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        class="form-control"
                        placeholder=""
                        required="required"
                        data-error="Subject is required."
                      />
                      <label>Subject</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="right-column">
                    <div class="form-group form-group-with-icon">
                      <textarea
                        id="form_message"
                        name="message"
                        class="form-control"
                        placeholder=""
                        rows="7"
                        required="required"
                        data-error="Please, leave me a message."
                      ></textarea>
                      <label>Message</label>
                      <div class="form-control-border"></div>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                </div>

                <div
                  class="g-recaptcha"
                  data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                  data-theme="dark"
                >
                  <div style="width: 304px; height: 78px;">
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI&amp;co=aHR0cHM6Ly9sbXBpeGVscy5jb206NDQz&amp;hl=en&amp;v=duyHVVR9Brf6N2GewjkPRfsA&amp;theme=dark&amp;size=normal&amp;cb=yvhn91k4r16r"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-emtcoz85n1wf"
                        frameborder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      ></iframe>
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      class="g-recaptcha-response"
                      style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                    ></textarea>
                  </div>
                  <iframe style="display: none;"></iframe>
                </div>

                <input
                  type="submit"
                  class="button btn-send disabled"
                  value="Send message"
                />
              </div>
            </form> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
