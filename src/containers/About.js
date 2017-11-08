import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
/**
 * Render the About
 */

const fadeDuration = 0.5;
class About extends React.Component {

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
   * Render About component
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
          <div className="page-text-wrapper clearfix pg-txt" data-edit-main-image="Background" data-collection-id="573b5d9e7da24fb15beeb613">
              <h1 className="page-title"><span data-content-field="title">About</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Passion. Experience. Diligence.</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content" id="yui_3_17_2_1_1510040351572_378">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1472494471303" id="page-573b5d9e7da24fb15beeb613">
                  <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_377">
                      <div className="col sqs-col-12 span-12" id="yui_3_17_2_1_1510040351572_376">
                          <div className="row sqs-row">
                              <div className="col sqs-col-7 span-7">
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1464206319038_13879">
                                      <div className="sqs-block-content">
                                          <h1>History</h1>
                                          <p>Angeline Harris and Spencer Ingram met while working at Lee, Wooden &amp; Ziegler LLP, one of the most sought-after corporate firms in the country. Angeline focused on Arts &amp; Entertainment and Spencer specialized in Digital Media &amp; Technology. We found that their individual fields complemented each other’s in surprising, and what turned out to be inseparable, ways. Technology was changing the arts and vice versa. This made them eager to cultivate their own practice, one that would effectively intersect their expertise with their respective interests. They believe that what wins a case and what makes a creative business thrive is the passion that drives it. Choosing to specialize in a field means that you are completely devoted to it; that you will protect it as if it were your own. That is the energy that sets them apart.</p>
                                          <p>Harris Ingram opened its doors in 2003. Since then, they've facilitated the success of artists like Aurora Falls and Nayantara Kani along with bike company HydroCycle and established tech enterprise Tap Unlimited. In 2011, they brought on Associate Isabel Sonam to work with fashion companies, photographers, and fine artists. She brings an exceptional level of enthusiasm, dedication, and nuanced perspective that makes their firm the holistic solution for creative clients.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_27_1464894576255_91715">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_21_1464894576255_70600">
                                      <div className="sqs-block-content">
                                          <h1>Get in touch</h1>
                                          <p>We at Harris Ingram know that finding the right attorney to represent you is a choice not to be taken lightly. That’s why we offer free consultations to walk you through your needs, the scope of your goals, and your budget.</p>
                                          <h3><NavLink to="/contact" data-ajax-loader="ajax-loader-binded">Book an appointment</NavLink>&nbsp;▸</h3></div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_3_1467052658477_153991">
                              <div className="sqs-block-content">&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-6 span-6">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_209029">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-5 span-5">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_23_1467213358745_15883">
                                              <div className="sqs-block-content">
                                                  <h1>Attorneys</h1></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-6 span-6">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_163394">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_375">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_8_1467214530026_17508">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-3 span-3" id="yui_3_17_2_1_1510040351572_374">
                                  <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-aspect-ratio="140.82125603864733" data-block-type="5" id="block-yui_3_17_2_3_1467052658477_221126">
                                      <div className="sqs-block-content" id="yui_3_17_2_1_1510040351572_373">

                                          <div className="image-block-outer-wrapper layout-caption-below design-layout-inline sqs-narrow-width" id="yui_3_17_2_1_1510040351572_372">

                                              <div className="intrinsic" style={{maxWidth: '1200.0px'}} id="yui_3_17_2_1_1510040351572_371">

                                                  <div style={{paddingBottom: '140.821%', overflow: 'hidden'}} className="image-block-wrapper   has-aspect-ratio" data-description="" id="yui_3_17_2_1_1510040351572_370">
                                                      <img className="thumb-image loaded" data-src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564c3440243a48f5bda63/1467311308047/" data-image="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564c3440243a48f5bda63/1467311308047/" data-image-dimensions="1200x1692" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="577564c3440243a48f5bda63" data-type="image" data-position-mode="standard" src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564c3440243a48f5bda63/1467311308047/?format=300w" style={{left: '-0.0378437%', top: '0%', width: '100.076%', height: '100%', position: 'absolute'}} data-image-resolution="300w" />
                                                  </div>

                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-7 span-7">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_396966">
                                              <div className="sqs-block-content">
                                                  <h3>Partner</h3>
                                                  <h2>Angeline Harris</h2>
                                                  <p>From working at the prestigious Lee, Wooden &amp; Ziegler LLP to opening her own practice in 2001, Angeline has represented Arts &amp; Entertainment clients large and small for nearly 20 years. She made headlines in 2010 when she secured the “Kingston Woman” rights to songwriter Helen Jones and continues to provide the same dedication to all her clients. Practicing since the first internet boom, Angeline has hands-on experience with how technology affects the creative industry. Staying ahead of the law’s frequent changes is Angeline’s sixth sense.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_3_1467052658477_12276">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-3 span-3">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_256380">
                                              <div className="sqs-block-content">
                                                  <h2>Education</h2>
                                                  <p><strong>ATLANTIC LAW SCHOOL</strong>
                                                      <br />Juris Doctor, 1997</p>
                                                  <p><strong>IVY UNIVERSITY</strong>
                                                      <br />B.A., Film &amp; Music, 1994</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-5 span-5">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_256509">
                                              <div className="sqs-block-content">
                                                  <h2>Activities &amp; Affiliations</h2>
                                                  <p>• ABCD Bar Association, Member
                                                      <br />• IP Law for Creatives Association, Member-at-Large
                                                      <br />• Civil Rights Conservation, Secretary</p>
                                                  <h2>Bar Admissions</h2>
                                                  <p>• New York,&nbsp;Tennessee,&nbsp;California</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="1.2557077625570776" data-block-type="21" id="block-yui_3_17_2_3_1467052658477_345798">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_454" style={{paddingBottom: '1.25571%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="19.130434782608695" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_23818">
                                      <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_457" style={{paddingBottom: '19.1304%'}}>&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-10 span-10">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_8_1467214530026_169752">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="19.130434782608695" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_18898">
                                      <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_460" style={{paddingBottom: '19.1304%'}}>&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="1.2557077625570776" data-block-type="21" id="block-yui_3_17_2_8_1467214530026_214149">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_463" style={{paddingBottom: '1.25571%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_397">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_8_1467214530026_24413">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-3 span-3" id="yui_3_17_2_1_1510040351572_396">
                                  <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type="5" id="block-yui_3_17_2_3_1467052658477_10336">
                                      <div className="sqs-block-content" id="yui_3_17_2_1_1510040351572_395">

                                          <div className="image-block-outer-wrapper layout-caption-below design-layout-inline sqs-narrow-width" id="yui_3_17_2_1_1510040351572_394">

                                              <div className="intrinsic" style={{maxWidth: '1200.0px'}} id="yui_3_17_2_1_1510040351572_393">

                                                  <div style={{paddingBottom: '141%', overflow: 'hidden'}} className="image-block-wrapper   has-aspect-ratio" data-description="" id="yui_3_17_2_1_1510040351572_392">
                                                      <img className="thumb-image loaded" data-src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564d82e69cf720ba1392d/1467311329069/" data-image="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564d82e69cf720ba1392d/1467311329069/" data-image-dimensions="1200x1692" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="577564d82e69cf720ba1392d" data-type="image" data-position-mode="standard" src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564d82e69cf720ba1392d/1467311329069/?format=300w" style={{left: '-0.0378437%', top: '0%', width: '100.076%', height: '100%', position: 'absolute'}} data-image-resolution="300w" />
                                                  </div>

                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-7 span-7">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_507060">
                                              <div className="sqs-block-content">
                                                  <h3>Partner</h3>
                                                  <h2>Spencer Ingram</h2>
                                                  <p>Spencer focuses on the various facets of law that revolve around digital media and technology, whether that’s securing patents and trademarks for wearable tech or negotiating distribution agreements for the now prolific AZL App. Prior to co-founding Harris Ingram, he managed the tech startup accounts for Lee, Wooden &amp; Ziegler LLP. Spencer has represented and advised entrepreneurs on best legal practices for their business for over 15 years.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_2_1467213358745_17942">
                                              <div className="sqs-block-content">&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-3 span-3">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_18647">
                                              <div className="sqs-block-content">
                                                  <h2>Education</h2>
                                                  <p><strong>PIERCE SCHOOL OF LAW</strong>
                                                      <br />Juris Doctor,&nbsp;1999</p>
                                                  <p><strong>WORLD UNIVERSITY</strong>
                                                      <br />B.A., Economics, 1995</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-5 span-5">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_21124">
                                              <div className="sqs-block-content">
                                                  <h2>Activities &amp; Affiliations</h2>
                                                  <p>• ABCD Bar Association, Member
                                                      <br />• Constitutional Conservation, Member</p>
                                                  <h2>Bar Admissions</h2>
                                                  <p>• New York,&nbsp;Illinois,&nbsp;California</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="1.3613861386138615" data-block-type="21" id="block-yui_3_17_2_3_1467052658477_348929">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_466" style={{paddingBottom: '1.36139%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="19.130434782608695" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_65875">
                                      <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_469" style={{paddingBottom: '19.1304%'}}>&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-11 span-11">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-10 span-10">
                                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_8_1467214530026_173149">
                                              <div className="sqs-block-content">
                                                  <hr />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="19.130434782608695" data-block-type="21" id="block-yui_3_17_2_2_1467223507697_77927">
                                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_472" style={{paddingBottom: '19.1304%'}}>&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="1.261467889908257" data-block-type="21" id="block-yui_3_17_2_8_1467214530026_231766">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_475" style={{paddingBottom: '1.26147%'}}>&nbsp;</div>
                          </div>
                          <div className="row sqs-row" id="yui_3_17_2_1_1510040351572_416">
                              <div className="col sqs-col-1 span-1">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_8_1467214530026_31172">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-3 span-3" id="yui_3_17_2_1_1510040351572_415">
                                  <div className="sqs-block image-block sqs-block-image sqs-text-ready" data-block-type="5" id="block-yui_3_17_2_3_1467052658477_94705">
                                      <div className="sqs-block-content" id="yui_3_17_2_1_1510040351572_414">

                                          <div className="image-block-outer-wrapper layout-caption-below design-layout-inline sqs-narrow-width" id="yui_3_17_2_1_1510040351572_413">

                                              <div className="intrinsic" style={{maxWidth: '1200.0px'}} id="yui_3_17_2_1_1510040351572_412">

                                                  <div style={{paddingBottom: '141%', overflow: 'hidden'}} className="image-block-wrapper   has-aspect-ratio" data-description="" id="yui_3_17_2_1_1510040351572_411">
                                                      <img className="thumb-image loaded" data-src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564ec2e69cf720ba13a4c/1467311344091/" data-image="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564ec2e69cf720ba13a4c/1467311344091/" data-image-dimensions="1200x1692" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="577564ec2e69cf720ba13a4c" data-type="image" data-position-mode="standard" src="https://static1.squarespace.com/static/573a04372fe131630fd25157/t/577564ec2e69cf720ba13a4c/1467311344091/?format=300w" style={{left: '-0.0378437%', top: '0%', width: '100.076%', height: '100%', position: 'absolute'}} data-image-resolution="300w" />
                                                  </div>

                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-7 span-7">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_529783">
                                              <div className="sqs-block-content">
                                                  <h3>ASSOCIATE</h3>
                                                  <h2>Isabel Sonam</h2>
                                                  <p>Isabel got her start working under Hugo Walters, Esq., director of the ABC Fashion Institute. She specializes in all things related to fashion law, whether that’s securing a trademark for a logo design or helping clients work through federal textile laws. Before joining Harris Ingram, she was an associate at fine arts practice Veronica Chin, PLLC. Isabel also represents fine artists, galleries, appraisers, and more on art litigation matters.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-1 span-1">
                                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="1.3580246913580247" data-block-type="21" id="block-yui_3_17_2_21_1464894576255_46067">
                                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_478" style={{paddingBottom: '1.35802%'}}>&nbsp;</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row sqs-row">
                                      <div className="col sqs-col-3 span-3">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_45481">
                                              <div className="sqs-block-content">
                                                  <h2>Education</h2>
                                                  <p><strong>EMPIRE LAW SCHOOL</strong>
                                                      <br />Juris Doctor, 2002<span style={{fontSize: '14.6667px'}}></span></p>
                                                  <p><strong>NAMELESS UNIVERSITY</strong>
                                                      <br />B.A., Art History, 1999</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col sqs-col-5 span-5">
                                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_3_1467052658477_48473">
                                              <div className="sqs-block-content">
                                                  <h2>Activities &amp; Affiliations</h2>
                                                  <p>• ABCD Bar Association, Member<span style={{fontSize: '14.6667px'}}></span></p>
                                                  <h2>Bar Admissions</h2>
                                                  <p>• New York, California</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_33_1468335043885_20996">
                              <div className="sqs-block-content">&nbsp;</div>
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

export default About;
