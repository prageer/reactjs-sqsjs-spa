import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
/**
 * Render the Clients
 */

const fadeDuration = 0.5;
class Clients extends React.Component {

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
   * Render Clients component
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
          <div className="page-text-wrapper clearfix pg-txt" data-edit-main-image="Background" data-collection-id="573b5d3c59827efb0f504a4c">
              <h1 className="page-title"><span data-content-field="title">Clients</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>From New York to California</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1469744383480" id="page-573b5d3c59827efb0f504a4c">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_71_1464027709245_45707">
                              <div className="sqs-block-content">
                                  <h1 className="text-align-center">Select Clients<br />&nbsp;</h1></div>
                          </div>
                      </div>
                  </div>
                  <div className="row sqs-row">
                      <div className="col sqs-col-4 span-4">
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_22_1464814284014_17191">
                              <div className="sqs-block-content">
                                  <hr />
                              </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_23_1464015474999_16278">
                              <div className="sqs-block-content">
                                  <h2 className="text-align-center">Creatives</h2>
                                  <h3 className="text-align-center">Anamorphic Films</h3>
                                  <h3 className="text-align-center">Theatre on First</h3>
                                  <h3 className="text-align-center">Thorne Designs</h3>
                                  <h3 className="text-align-center">Darjatmoko Productions</h3>
                                  <h3 className="text-align-center">Mara Bond</h3></div>
                          </div>
                      </div>
                      <div className="col sqs-col-4 span-4">
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_2_1467038970247_16823">
                              <div className="sqs-block-content">
                                  <hr />
                              </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_23_1464015474999_26040">
                              <div className="sqs-block-content">
                                  <h2 className="text-align-center">Start-Ups</h2>
                                  <h3 className="text-align-center">Hydrocycle</h3>
                                  <h3 dir="ltr" className="text-align-center">Tap Unlimited</h3>
                                  <h3 dir="ltr" className="text-align-center">AZL Games</h3>
                                  <h3 dir="ltr" className="text-align-center">DigiArt Online</h3>
                                  <h3 dir="ltr" className="text-align-center">Capacitor</h3></div>
                          </div>
                      </div>
                      <div className="col sqs-col-4 span-4">
                          <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_2_1467038970247_17794">
                              <div className="sqs-block-content">
                                  <hr />
                              </div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1464703804693_80018">
                              <div className="sqs-block-content">
                                  <h2 className="text-align-center">Artists</h2>
                                  <h3 className="text-align-center">Aurora Falls</h3>
                                  <h3 dir="ltr" className="text-align-center">Nayantara Kani</h3>
                                  <h3 dir="ltr" className="text-align-center">Russell Inagaki</h3>
                                  <h3 dir="ltr" className="text-align-center">The Autotunes</h3>
                                  <h3 dir="ltr" className="text-align-center">Bryce York</h3></div>
                          </div>
                      </div>
                  </div>
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="7.045454545454546" data-block-type="21" id="block-yui_3_17_2_30_1464019655488_61296">
                              <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_1535" style={{paddingBottom: '7.04545%'}}>&nbsp;</div>
                          </div>
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_15_1467052288779_15736">
                              <div className="sqs-block-content">
                                  <h1 className="text-align-center">Testimonials<br />&nbsp;</h1></div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_32176">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1467212287749_24359">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_80233">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_102322">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_28_1464019655488_29589">
                                      <div className="sqs-block-content">
                                          <figure>
                                              <blockquote>
                                                  <span>“</span>Angeline negotiated top industry royalty rates for us. It’s something we could have never accomplished on our own.<span>”</span>
                                              </blockquote>
                                              <figcaption className="source">— Adrian Zhang of The Autotunes</figcaption>
                                          </figure>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_37472">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_97691">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1467212287749_31469">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_35312">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_51996">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_28_1464019655488_26828">
                                      <div className="sqs-block-content">
                                          <figure>
                                              <blockquote>
                                                  <span>“</span>With Isabel, I never have to worry about my photo rights.<span>”</span>
                                              </blockquote>
                                              <figcaption className="source">— Russell Inagaki</figcaption>
                                          </figure>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_55826">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_28_1464019655488_74146">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1467212287749_44080">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_47596">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_60682">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_28_1464019655488_35916">
                                      <div className="sqs-block-content">
                                          <figure>
                                              <blockquote>
                                                  <span>“</span>Stephen’s understanding of the legal ins and outs of startups was essential to Hydrocycle’s current success.<span>”</span>
                                              </blockquote>
                                              <figcaption className="source">— Sabrina Guzman, Founder of Hydrocycle</figcaption>
                                          </figure>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_64781">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_30_1464019655488_184716">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1467212287749_69848">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_30_1464019655488_171984">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer" data-aspect-ratio="4.230769230769231" data-block-type="21" id="block-yui_3_17_2_30_1464019655488_179911">
                                      <div className="sqs-block-content sqs-intrinsic" id="yui_3_17_2_1_1510040351572_1538" style={{paddingBottom: '4.23077%'}}>&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_30_1464019655488_178296">
                                      <div className="sqs-block-content">
                                          <figure>
                                              <blockquote>
                                                  <span>“</span>The entire team at Harris Ingram was indispensable in making sure my independent theatre had a strong foundation and a healthy relationship with the unions.<span>”</span>
                                              </blockquote>
                                              <figcaption className="source">— Daniel Carroll, Owner of Theatre on First</figcaption>
                                          </figure>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_92362">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_102239">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-8 span-8">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1467212287749_98018">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-2 span-2">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_30_1464019655488_174431">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_9_1467212287749_115666">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block quote-block sqs-block-quote" data-block-type="31" id="block-yui_3_17_2_30_1464019655488_170242">
                                      <div className="sqs-block-content">
                                          <figure>
                                              <blockquote>
                                                  <span>“</span>When Tech Gum was looking to acquire us, Harris Ingram secured our terms and ultimately helped us thrive under bigger wings.<span>”</span>
                                              </blockquote>
                                              <figcaption className="source">— Nat Stein, CEO of Capacitor</figcaption>
                                          </figure>
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_11_1467212287749_22189">
                                      <div className="sqs-block-content">&nbsp;</div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_35_1468335043885_21293">
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

export default Clients;
