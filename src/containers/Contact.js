import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
/**
 * Render the Contact
 */
const fadeDuration = 0.5;
class Contact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeOut: false,
      visibility: 'visible'
    };
  }

  componentDidUpdate(nextProps, { fadeOut }) {
    if (fadeOut) {
      setTimeout(() => {
        this.setState({
          visibility: 'hidden'
        })
      }, fadeDuration)
    }
  }

  /**
   * Render Contact component
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
      <Fade
        out={this.state.fadeOut}
        duration={fadeDuration}
        style={{
          visibility: this.state.visibility
        }}
      >
      <div id="content" className="content-container">
        <main id="page" className="site-page" role="main">
          <div className="page-text-wrapper clearfix pg-txt" data-edit-main-image="Background" data-collection-id="573b72aaa3360cb666defdc8">
              <h1 className="page-title"><span data-content-field="title">Contact</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Let’s chat.</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1472494507020" id="page-573b72aaa3360cb666defdc8">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="row sqs-row">
                              <div className="col sqs-col-7 span-7">
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_10_1466627601381_74666">
                                      <div className="sqs-block-content">
                                          <h1>Contact us for rates</h1>
                                          <p>Depending on the case, we offer an hourly rate or a flat rate. Our lawyers and paralegals keep detailed logs of the time they spend on your case. We count in ten minute increments and round down when in-between them. Work logs will be disclosed to all clients upon the closing of a case. We only work for as long as a case requires, so you’ll never be overbilled for unproductive time. Final bills will include costs for copy, filing, messengers, and third-party research tools. Partner rates fall between $500 and $600 per hour while Associate rates are between $300 and $400 per hour. Our paralegals charge between $100 and $200 per hour. Retainers must be paid upfront.</p>
                                          <h1>Book an appointment</h1>
                                          <p><span style={{fontSize:'14.6667px'}}>Use the form below to tell us about your legal inquiry, and we’ll call you back to schedule an appointment. Please be as detailed as possible. Include what industry you need service for along with any specific document requests. To help us best serve your inquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment. Our general response time is one business day.</span></p>
                                      </div>
                                  </div>
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-6 span-6">
                                          <div className="sqs-block form-block sqs-block-form" data-block-type="9" id="block-yui_3_17_2_2_1463758909823_8338">
                                              <div className="sqs-block-content">

                                                  <div className="form-wrapper">

                                                      <div className="form-inner-wrapper">

                                                          <form>

                                                              <div className="field-list clear">

                                                                  <fieldset id="name-yui_3_17_2_1_1463758909823_37180" className="form-item fields name required">
                                                                      <div className="title">Name <span className="required">*</span></div>
                                                                      <legend>Name</legend>

                                                                      <div className="field first-name">
                                                                          <label className="caption">
                                                                              <input className="field-element field-control" name="fname" type="text" spellCheck="false" maxLength="30" data-title="First" /> First Name</label>
                                                                      </div>
                                                                      <div className="field last-name">
                                                                          <label className="caption">
                                                                              <input className="field-element field-control" name="lname" type="text" spellCheck="false" maxLength="30" data-title="Last" /> Last Name</label>
                                                                      </div>
                                                                  </fieldset>

                                                                  <div id="email-yui_3_17_2_1_1463758909823_37519" className="form-item field email required">
                                                                      <label className="title">Email Address <span className="required">*</span></label>

                                                                      <input className="field-element" name="email" type="text" spellCheck="false" id="email-yui_3_17_2_1_1463758909823_37519-field" />
                                                                  </div>

                                                                  <fieldset id="phone-yui_3_17_2_1_1464038823631_299530" className="form-item fields phone required">
                                                                      <div className="title">Phone <span className="required">*</span></div>
                                                                      <legend>Phone</legend>

                                                                      <div className="field text three-digits">
                                                                          <label className="caption">
                                                                              <input className="field-element" type="text" maxLength="3" data-title="Areacode" /> (###)
                                                                          </label>
                                                                      </div>
                                                                      <div className="field text three-digits">
                                                                          <label className="caption">
                                                                              <input className="field-element" type="text" maxLength="3" data-title="Prefix" /> ###
                                                                          </label>
                                                                      </div>
                                                                      <div className="field text four-digits">
                                                                          <label className="caption">
                                                                              <input className="field-element" type="text" maxLength="4" data-title="Line" /> ####
                                                                          </label>
                                                                      </div>
                                                                  </fieldset>

                                                                  <div id="checkbox-yui_3_17_2_1_1467126224954_62662" className="form-item field checkbox required">
                                                                      <div className="title">Reason of Inquiry <span className="required">*</span></div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Business Strategy" /> Business Strategy</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Fashion, Apparel, &amp; Textile Law" /> Fashion, Apparel, &amp; Textile Law</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Music" /> Music</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Liability &amp; Risk" /> Liability &amp; Risk</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="TV, Film, &amp; Theatre" /> TV, Film, &amp; Theatre</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Digital Media &amp; Tech" /> Digital Media &amp; Tech</label>
                                                                      </div>

                                                                      <div className="option">
                                                                          <label>
                                                                              <input type="checkbox" name="checkbox-yui_3_17_2_1_1467126224954_62662-field" value="Other" /> Other</label>
                                                                      </div>

                                                                  </div>

                                                                  <div id="textarea-yui_3_17_2_1_1463758909823_38375" className="form-item field textarea required">
                                                                      <label className="title">How Can We Help? <span className="required">*</span></label>
                                                                      <div className="description">Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.</div>
                                                                      <textarea className="field-element " id="textarea-yui_3_17_2_1_1463758909823_38375-field"></textarea>
                                                                  </div>

                                                              </div>

                                                              <div className="form-button-wrapper form-button-wrapper--align-left">
                                                                  <input className="button sqs-system-button sqs-editable-button" type="submit" value="Submit" />
                                                              </div>

                                                              <div className="hidden form-submission-text">Thank you!</div>

                                                              <div className="hidden form-submission-html" data-submission-html=""></div>
                                                          </form>

                                                      </div>

                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_6_1466627601381_51708">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_3_1466797426174_19937">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_29_1464038823631_23742">
                                      <div className="sqs-block-content">
                                          <h3>➤&nbsp;location</h3>
                                          <h2>777 Nameless Ave.<br />New York, NY 00000<br />&nbsp;</h2>
                                          <h3><strong>Office Hours</strong></h3>
                                          <h2>Monday - Friday<br />9AM - 6PM<br />&nbsp;</h2>
                                          <h3>☎ Contact</h3>
                                          <h2>placeholder@example.com<br />(212) 555-0110</h2>
                                          <p>&nbsp;</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </main>
        <Footer />
      </div>
      </Fade>
    );
  }
}

export default Contact;
