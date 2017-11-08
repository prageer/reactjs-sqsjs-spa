import React from 'react';
import {
  Footer
} from '../components';
import {NavLink} from 'react-router-dom';
import { default as Fade } from 'react-fade';
/**
 * Render the News
 */
const fadeDuration = 0.5;
class News extends React.Component {

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
   * Render News component
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
          <div className="page-text-wrapper clearfix pg-txt" data-edit-main-image="Background" data-collection-id="573f2fd4f8baf36d30190eb0">
              <h1 className="page-title"><span data-content-field="title">News</span></h1>
              <div className="page-description" data-content-field="description">
                  <p><span>Firm Announcements and Law Updates</span></p>
              </div>
          </div>

          <div className="sqs-layout sqs-grid-12 columns-12 collection-header empty" data-layout-label="Collection Header Content" data-type="block-field" data-updated-on="1467144432681" id="collection-header-573f2fd4f8baf36d30190eb0">
              <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12"></div>
              </div>
          </div>

          <div className="main-content" data-content-field="main-content">

              <section className="BlogList BlogList--posts-excerpt sqs-blog-list clear" data-columns="3">

                  <article id="post-57715a1e725e25272be8fd47" className="BlogList-item hentry tag-fashion tag-art tag-law author-shawn-lee post-type-text article-index-1 has-tags" data-item-id="57715a1e725e25272be8fd47">

                      <NavLink to="#" className="BlogList-item-title" data-content-field="title " data-ajax-loader="ajax-loader-binded ">Isabel Sonam to Speak at World Fashion Convention in NYC</NavLink>

                      <div className="Blog-meta BlogList-item-meta ">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author " data-ajax-loader="ajax-loader-binded ">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date " dateTime="2016-08-01 ">August 01, 2016</time><span className="Blog-meta-item Blog-meta-item--tags "><NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">fashion</NavLink>, <NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">art</NavLink>, <NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">law</NavLink></span>
                      </div>

                  </article>

                  <article id="post-5773dfff9f7456f692f8d1b8 " className="BlogList-item hentry tag-design tag-tech tag-vc author-shawn-lee post-type-text article-index-2 has-tags " data-item-id="5773dfff9f7456f692f8d1b8 ">

                      <NavLink to="#" className="BlogList-item-title " data-content-field="title" data-ajax-loader="ajax-loader-binded">Spencer Ingram Interviewed in DeCode</NavLink>

                      <div className="Blog-meta BlogList-item-meta">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author" data-ajax-loader="ajax-loader-binded">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date" dateTime="2016-07-28">July 28, 2016</time>
                          <span className="Blog-meta-item Blog-meta-item--tags"><NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">design</NavLink>, <NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">tech</NavLink>, <NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">vc</NavLink></span>
                      </div>

                  </article>

                  <article id="post-577159b51b631bf0f300dbd6" className="BlogList-item hentry tag-art tag-music tag-film author-shawn-lee post-type-text article-index-3 has-tags" data-item-id="577159b51b631bf0f300dbd6">

                      <NavLink to="#" className="BlogList-item-title" data-content-field="title " data-ajax-loader="ajax-loader-binded ">Free Legal Advice for Creative People</NavLink>

                      <div className="Blog-meta BlogList-item-meta ">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author " data-ajax-loader="ajax-loader-binded ">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date " dateTime="2016-07-11 ">July 11, 2016</time><span className="Blog-meta-item Blog-meta-item--tags "><NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">art</NavLink>, <NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">music</NavLink>, <NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">film</NavLink></span>
                      </div>

                  </article>

                  <article id="post-5771598f1b631bf0f300da71 " className="BlogList-item hentry tag-ethics tag-law author-shawn-lee post-type-text article-index-4 has-tags " data-item-id="5771598f1b631bf0f300da71 ">

                      <NavLink to="#" className="BlogList-item-title" data-content-field="title" data-ajax-loader="ajax-loader-binded">Quoted in Ethics Review</NavLink>

                      <div className="Blog-meta BlogList-item-meta">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author" data-ajax-loader="ajax-loader-binded">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date" dateTime="2016-06-21">June 21, 2016</time>
                          <span className="Blog-meta-item Blog-meta-item--tags"><NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">ethics</NavLink>, <NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">law</NavLink></span>
                      </div>

                  </article>

                  <article id="post-5773dfd9c534a52ba555345d" className="BlogList-item hentry tag-intellectual-property author-shawn-lee post-type-text article-index-5 has-tags" data-item-id="5773dfd9c534a52ba555345d">
                      <NavLink to="#" className="BlogList-item-title" data-content-field="title " data-ajax-loader="ajax-loader-binded ">Angeline and Spencer are Panelists at the Inventor's Symposium</NavLink>

                      <div className="Blog-meta BlogList-item-meta ">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author " data-ajax-loader="ajax-loader-binded ">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date " dateTime="2016-05-21 ">May 21, 2016</time><span className="Blog-meta-item Blog-meta-item--tags "><NavLink to="#" className="Blog-meta-item-tag " data-ajax-loader="ajax-loader-binded ">intellectual property</NavLink></span>
                      </div>

                  </article>

                  <article id="post-5773e09346c3c49f04584362 " className="BlogList-item hentry tag-corporate tag-design author-shawn-lee post-type-text article-index-6 has-tags " data-item-id="5773e09346c3c49f04584362 ">

                      <NavLink to="#" className="BlogList-item-title " data-content-field="title" data-ajax-loader="ajax-loader-binded">Legal Guidance for Creative Agencies</NavLink>

                      <div className="Blog-meta BlogList-item-meta">
                          <NavLink to="#" className="Blog-meta-item Blog-meta-item--author" data-ajax-loader="ajax-loader-binded">Shawn Lee</NavLink>
                          <time className="Blog-meta-item Blog-meta-item--date" dateTime="2016-04-20">April 20, 2016</time>
                          <span className="Blog-meta-item Blog-meta-item--tags"><NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">corporate</NavLink>, <NavLink to="#" className="Blog-meta-item-tag" data-ajax-loader="ajax-loader-binded">design</NavLink></span>
                      </div>

                  </article>

              </section>
          </div>

          <div className="sqs-layout sqs-grid-12 columns-12 collection-footer empty" data-layout-label="Collection Footer Content" data-type="block-field" data-updated-on="1471379439422" id="collection-footer-573f2fd4f8baf36d30190eb0">
              <div className="row sqs-row">
                  <div className="col sqs-col-12 span-12"></div>
              </div>
          </div>

        </main>
        
        <Footer />
      </div>
      </Fade>
    );
  }
}

export default News;
