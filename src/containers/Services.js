import React from 'react';
import {
  Footer
} from '../components';
import { default as Fade } from 'react-fade';
/**
 * Render the Services
 */
const fadeDuration = 0.5;
class Services extends React.Component {

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
   * Render Services component
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
          <div className="page-text-wrapper clearfix pg-txt" data-edit-main-image="Background" data-collection-id="573b84253c44d8cdadbaa7ba">
              <h1 className="page-title"><span data-content-field="title">Services</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Legal support for Creatives, Artists, and Innovators.</span></p>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <div className="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1469812058550" id="page-573b84253c44d8cdadbaa7ba">
                  <div className="row sqs-row">
                      <div className="col sqs-col-12 span-12">
                          <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_9691">
                              <div className="sqs-block-content">
                                  <h1 className="text-align-center">Areas of Practice</h1></div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_4_1464878088684_41409">
                              <div className="sqs-block-content">&nbsp;</div>
                          </div>
                          <div className="row sqs-row">
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_26_1463758909823_39787">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_20286">
                                      <div className="sqs-block-content">
                                          <h3>Music</h3>
                                          <p>The world of music is ever growing and evolving, and we’re not just talking about sound trends. With the consistent introduction of varying revenue streams and distribution channels, the opportunity for profit grows, but so does the complexity. We take pride in clearly explaining and navigating the often foggy landscape of entertainment law and its relationship to music industry professionals of all types. We help our clients draft and negotiate contracts relating to recording, publishing, licensing and distribution, sponsorship and merchandising.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_36877">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_22820">
                                      <div className="sqs-block-content">
                                          <h3>INTELLECTUAL PROPERTY</h3>
                                          <p>Ideas, tangible or not, are the most important things to protect in today’s competitive creative market. With so many channels and constantly replenishing feeds to watch out for, tracing the ownership and originality of a design, brand name, or invention needs the laser-focused eye of a trained attorney. We’ll handle the search, application, and filing process of trademarks, copyrights, and patents. And if your idea has been infringed upon, our litigation team will negotiate the best possible licensing and settlement agreements.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_66206">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_66919">
                                      <div className="sqs-block-content">
                                          <h3>Defamation &amp; Image Rights</h3>
                                          <p>Maintaining the integrity of your public image is an inseparable part of your business, whether you’re a creative individual or a small company. Protecting your privacy and your public image from slander and libel is only one side of the coin; negotiating sponsorships, public appearances, and endorsements is the other. Our firm advises on both, offering litigation and dispute resolution, defamation (pre and post publication), and other image protection mechanisms—all so you can amplify and control the way you want the world to see you.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_90425">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_26_1463758909823_41930">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_5_1469743261193_74196">
                                      <div className="sqs-block-content">
                                          <h3>TELEVISION, FILM, &amp; THEATRE</h3>
                                          <p>The way people consume entertainment is constantly in flux, so the laws must adapt quickly. Harris Ingram strives to anticipate these changes so you can focus more on creating a performance of a lifetime. Among our clients are actors, directors, unions, agencies, writers, animators, and many other industry talents. We draft and negotiate development, production, financing, and sales &amp; distribution agreements. Tailoring each contract according to a project’s scope, size, and budget, we secure the appropriate creative rights for all talents involved.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_37940">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_38024">
                                      <div className="sqs-block-content">
                                          <h3>Art Litigation</h3>
                                          <p>Demystifying art law is in itself a creative practice. It requires finesse, strategic structuring, and, in many ways, empathy. At the end of the day, art and its worth is profoundly personal. In such matters, mediation or arbitration almost always yields the most fulfilling results. However, should the occasion arise, our lawyers are more than prepared to move into litigation. From artists, agents, dealers, galleries, museums, and auction houses, our clients have always walked away from their disputes or deals knowing that their core interests were preserved.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_70144">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_8_1469743261193_88888">
                                      <div className="sqs-block-content">
                                          <h3>LIABILITY &amp; RISK</h3>
                                          <p>Whether you run a theater, recording studio, or an eCommerce website, all businesses need to minimize their legal liability and risk. Our lawyers will assess the structure of your operation, such as its physical or digital space, the types of products you sell, who your consumers are, what type of company you have filed under (LLC, Inc, etc.), and so on. From there, we will tailor the right risk plan, complete with permit applications, insurance policies, and more, so you can worry less about liabilities and concentrate on growing your business.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_100738">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                              <div className="col sqs-col-4 span-4">
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_26_1463758909823_42875">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_59658">
                                      <div className="sqs-block-content">
                                          <h3>FASHION, APPAREL &amp; TEXTILE LAW</h3>
                                          <p>Fashion law is a little bit like the Wild West. There’s a lot of potential, but the rules can be convoluted and vague at best. Protecting a brand or even a single design involves intellectual property, copyrights, trademarks, and patents. A successful case requires creativity and flexibility. Harris Ingram represents boutique design houses like Marta and Thorne, individual designers like Mara Bond, and illustrators and graphic designers. We protect their products against copycats large and small, and guide them through manufacturing ethics and labeling laws.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_62337">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_8_1469743261193_14801">
                                      <div className="sqs-block-content">
                                          <h3>DIGITAL MEDIA &amp; TECHNOLOGY</h3>
                                          <p>The internet, software, and technology are so pervasive that we can’t remember having ever lived without them. They make our lives simpler, but behind the curtain are fluctuating challenges in protection and monetization; challenges that our firm stays two steps ahead of. We’ve helped engineers, inventors, gaming startups, and entrepreneurs develop, license, sell, and maintain ownership over their creations. We’ve also negotiated purchasing and partnership agreements for larger investment companies looking for their unicorn.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_9_1463758909823_72951">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                                  <div className="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_9_1463758909823_70881">
                                      <div className="sqs-block-content">
                                          <h3>BUSINESS STRATEGY</h3>
                                          <p>The startup and small business marketplace is still a new and fierce frontier that requires legal advice from attorneys who are deeply entrenched in the particulars of venture financing. We offer a competitive advantage that can help you save money and make more of it in the long run. We’ve steered corporations like Tap Unlimited and Hydrocycle with a balance of legal, business, operational, and financial strategies that had clear execution and built-in problem-solving contingencies. Our holistic approach is essential to any company looking to grow.</p>
                                      </div>
                                  </div>
                                  <div className="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_5_1469743261193_32062">
                                      <div className="sqs-block-content">
                                          <hr />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_45_1464703804693_15567">
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

export default Services;
