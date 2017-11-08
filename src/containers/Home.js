import React from 'react';
import {NavLink} from 'react-router-dom';
import {
  Footer
} from '../components';
import { default as Fade } from 'react-fade';
/**
 * Render the Home
 */
const fadeDuration = 0.5;
class Home extends React.Component {

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
   * Render Home component
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
        <div data-controller="BannerController" className="page-banner-wrapper page-banner-has-image" data-suggested-bg-color-thumbnail="#08182d" data-controllers-bound="BannerController" style={{minHeight: '256px'}}>

          <div className="page-banner-image-container collection-thumbnail-image-container content-fill" style={{overflow: 'hidden'}}>

              <img className="js-page-banner-image" data-src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/579a4bd7e3df285bcac93baa/1469729761345/hero_pattern.png" data-image="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/579a4bd7e3df285bcac93baa/1469729761345/hero_pattern.png" data-image-dimensions="2560x1477" data-image-focal-point="0.5,0.5" data-load="false" data-position-mode="standard" data-parent-ratio="1.9" alt="hero_pattern.png" src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/579a4bd7e3df285bcac93baa/1469729761345/hero_pattern.png?format=2500w" style={{fontSize: '0px', left: '0px', top: '-18.1479px', width: '100%', height: '508.296px', position: 'relative'}} data-image-resolution="2500w" />

          </div>

          <div className="page-text-wrapper clearfix" data-edit-main-image="Background" data-collection-id="579a49b8197aea5a0f3baf55">
              <h1 className="page-title"><span data-content-field="title">Harris Ingram LLP</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Business + Intellectual Property Attorneys</span></p>
              </div>
          </div>
        </div>

        <main id="page" className="site-page" role="main">

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1472494441131" id="page-579a49b8197aea5a0f3baf55">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_10344">
                              <div className="sqs-block-content">&nbsp;</div>
                          </div>
                      </div>
                  </div>
                  <div className="row sqs-row">
                      <div className="col sqs-col-7 span-7">
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-b9a9a4bfecab611a850a">
                              <div className="sqs-block-content">
                                  <h1>Advocating for creative communities and entrepreneurs since 2003</h1>
                                  <p>Headquartered in New York City with a satellite office in Los Angeles, Harris Ingram LLP represents creative clients on and between coasts. Our firm specializes in all Intellectual Property matters, from the seed of an idea to the final product. Whether you’re a musician, designer, engineer, or small business owner, we will not only protect what you create, but we’ll also help it thrive in the world. We bring extensive experience and professionalism to every case and customize our support to your individual needs and concerns.</p>
                                  <p>Our attorneys have been practicing for over a decade and started during the .com internet boom of the late 90s. We’re on the pulse of modern technology and media, and have monitored their evolution to inform our own legal approaches—all to give you exceptional advice that will last for years to come.</p>
                                  <p>Get in touch with us to set up a consultation, or use the contact form at the bottom of this page to enquire whether our services are right for you.</p>
                              </div>
                          </div>
                          <div className="sqs-block button-block sqs-block-button" data-block-type="53" id="block-yui_3_17_2_33_1469722138348_11265">
                              <div className="sqs-block-content" id="yui_3_17_2_1_1510040351572_139">
                                  <div className="sqs-block-button-container--left" data-alignment="left" data-button-size="medium" id="yui_3_17_2_1_1510040351572_138">
                                      <NavLink to="/about" className="sqs-block-button-element--medium sqs-block-button-element" data-initialized="true" data-ajax-loader="ajax-loader-binded">Learn More</NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col sqs-col-5 span-5">
                          <div className="row sqs-row">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_8445">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_7235">
                                      <div className="sqs-block-content">
                                          <h1>Contact</h1>
                                          <h3><strong>➤&nbsp;LOCATION</strong></h3>
                                          <h2>777 Nameless Ave.<div>New York, NY 00000</div></h2>
                                          <h3>☎ CONTACT</h3>
                                          <h2>placeholder@example.com<div>(212) 555-0110</div></h2>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="7.110778443113772" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_13632">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_145" style={{paddingBottom: '7.11078%'}}>&nbsp;</div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_15021">
                              <div className="sqs-block-content">
                                  <h1>Areas of Practice</h1></div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_20468">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_23503">
                                      <div className="sqs-block-content">
                                          <h3>MUSIC</h3>
                                          <p>The world of music is ever growing and evolving, and we’re not just talking about sound trends. With the consistent introduction of varying revenue streams and distribution channels, the opportunity for profit grows, but so does the complexity. That’s where we come in.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_30488">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_32908">
                                      <div className="sqs-block-content">
                                          <h3>ART LITIGATION</h3>
                                          <p>Demystifying art law is in itself a creative practice. It requires finesse, strategic structuring, and in many ways, empathy. At the end of the day, art and its worth are profoundly personal. That’s why we advise mediation or arbitration before stepping into litigation.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_21014">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_24912">
                                      <div className="sqs-block-content">
                                          <h3>TELEVISION, FILM, &amp; THEATRE</h3>
                                          <p>The way people consume entertainment is constantly in flux, so the laws must adapt quickly. Harris Ingram strives to anticipate these changes so you can focus more on creating the performance of a lifetime.
                                              <br />&nbsp;</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_31287">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_35277">
                                      <div className="sqs-block-content">
                                          <h3>BUSINESS STRATEGY</h3>
                                          <p>The startup and small business marketplace is still a new and fierce frontier that requires legal advice from attorneys who are deeply entrenched in the particularities of venture financing. Our firm gives you an holistic approach, so your company can get the best competitive advantage.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_22230">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_27553">
                                      <div className="sqs-block-content">
                                          <h3>DIGITAL MEDIA &amp; TECHNOLOGY</h3>
                                          <p>The internet, software, and technology are so pervasive that we can’t remember having ever lived without them. They make our lives simpler, but behind the curtain are fluctuating challenges in protection and monetization—challenges that our firm stays two steps ahead of.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_32087">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_37225">
                                      <div className="sqs-block-content">
                                          <h3>FASHION, APPAREL &amp; TEXTILE LAW</h3>
                                          <p>Fashion law is a little bit like the Wild West. There’s a lot of potential, but the rules can seem convoluted and vague at best. Protecting a brand or even a single design involves intellectual property, copyrights, trademarks, and patents.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="8.338557993730408" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_38718">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_148" style={{paddingBottom: '8.33856%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_40742">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_41746">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_45282">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_50898">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-4 span-4">
                                          <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_33_1469722138348_49583">
                                              <div className="sqs-block-content">
                                                  <figure>
                                                      <blockquote>
                                                          <span>“</span>We must all obey the great law of change. It is the most powerful law of nature.<span>”</span>
                                                      </blockquote>
                                                      <figcaption className="source">— Edmund Burke</figcaption>
                                                  </figure>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-4 span-4">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_62222">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_64708">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_33_1469722138348_65919">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_68435">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="7.7115987460815045" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_72941">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_151" style={{paddingBottom: '7.7116%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-3 span-3">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_75643">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-9 span-9">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-6 span-6">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_33_1469722138348_76960">
                                              <div className="sqs-block-content">
                                                  <h1 className="text-align-center">Let's Chat.</h1>
                                                  <p><span style={{fontSize: '14.6667px'}}>Use the form below to contact us regarding your legal enquiry. Please be as detailed as possible. Include your industry along with any specific document requests. To help us best service your enquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment.</span>
                                                      <br />
                                                      <br /><span style={{fontSize:'14.6667px'}}>For job opportunities, please email us your resume. We’re always looking for new and exceptional talent to lead the firm into uncharted fields of practice.</span></p>
                                              </div>
                                          </div>
                                          <div className="sqs-block form-block sqs-block-form" data-block-type="9" id="block-yui_3_17_2_33_1469722138348_87593">
                                              <div className="sqs-block-content">

                                                  <div className="form-wrapper">

                                                      <div className="form-inner-wrapper">

                                                        
                                                          <form>
                                                              <div className="field-list clear">

                                                                  <fieldset id="name-yui_3_17_2_1_1469722138348_27396" className="form-item fields name required">
                                                                      <div className="title">Name <span className="required">*</span></div>
                                                                      <legend>Name</legend>

                                                                      <div className="field first-name">
                                                                          <label className="caption">
                                                                          <input className="field-element field-control" name="fname" type="text" spellCheck="false" data-title="First" /> First Name</label>
                                                                      </div>
                                                                      <div className="field last-name">
                                                                          <label className="caption">
                                                                              <input className="field-element field-control" name="lname" type="text" spellCheck="false" data-title="Last" /> Last Name</label>
                                                                      </div>
                                                                  </fieldset>

                                                                  <div id="email-yui_3_17_2_1_1469722138348_27735" className="form-item field email required">
                                                                      <label className="title">Email Address <span className="required">*</span></label>

                                                                      <input className="field-element" name="email" type="text" spellCheck="false" id="email-yui_3_17_2_1_1469722138348_27735-field" />
                                                                  </div>

                                                                  <div id="textarea-yui_3_17_2_1_1469722138348_28591" className="form-item field textarea required">
                                                                      <label className="title">How Can We Help? <span className="required">*</span></label>
                                                                      <div className="description">Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.</div>
                                                                      <textarea className="field-element " id="textarea-yui_3_17_2_1_1469722138348_28591-field"></textarea>
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
                                      <div className="col sqs-col-3 span-3">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1469722138348_83448">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
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

export default Home;
