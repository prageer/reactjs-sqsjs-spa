import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {NavLink, withRouter} from 'react-router-dom';

/**
 * Render the header including menu items
 */
class Header extends React.Component {


  componentDidMount() {
    this.setHeaderClass(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setHeaderClass(nextProps);
  }

  setHeaderClass(props) {
    const {location} = props;
    const pathName = location.pathname;

    this.homeRef.className = "nav-item collection";
    this.aboutRef.className = "nav-item collection";
    this.servicesRef.className = "nav-item collection";
    this.clientsRef.className = "nav-item collection";
    this.newsRef.className = "nav-item collection";
    this.contactRef.className = "nav-item collection";

    switch (pathName) {
        case "/":
            this.homeRef.className = "nav-item collection active";
            break;
        case "/about":
            this.aboutRef.className = "nav-item collection active";
            break;
        case "/services":
            this.servicesRef.className = "nav-item collection active";
            break;
        case "/clients":
            this.clientsRef.className = "nav-item collection active";
            break;
        case "/news":
            this.newsRef.className = "nav-item collection active";
            break;
        case "/contact":
            this.contactRef.className = "nav-item collection active";
            break;
    }
    // withRouter
  }

  /**
   * Render Header component
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
      <header id="header" className="site-header loaded" role="banner" data-nc-base="header" data-nc-group="header" data-controller="AncillaryLayout" data-controllers-bound="AncillaryLayout">
      
        <div data-nc-container="left">

            <div id="secondaryNavWrapper" className="nav-wrapper secondary-nav-wrapper" data-nc-element="secondary-nav">

                <nav className="site-navigation" role="navigation" data-content-field="navigation">

                    <div className="nav-item external">
                        <NavLink to="/contact" data-ajax-loader="ajax-loader-binded">
                            <span>☎ (212) 555-0110</span>
                        </NavLink>
                    </div>

                </nav>

            </div>
        </div>

        <div data-nc-container="center" id="yui_3_17_2_1_1510033997638_336">
            <div className="logo-wrapper" data-content-field="site-title" data-nc-element="branding" id="yui_3_17_2_1_1510033997638_335">

                <div className="logo-image active" id="yui_3_17_2_1_1510033997638_334">
                    <NavLink to="/" data-ajax-loader="ajax-loader-binded" id="yui_3_17_2_1_1510033997638_333"><img src="//static1.squarespace.com/static/573a04372fe131630fd25157/t/578e66d1e6f2e1f6d2f67d0f/1491942351946/?format=1500w" alt="Harris Ingram LLP" /></NavLink>
                </div>

            </div>
        </div>
        
        <div data-nc-container="right" id="yui_3_17_2_1_1510033997638_353">
            <div id="mainNavWrapper" className="nav-wrapper primary-nav-wrapper" data-nc-element="primary-nav">

                <nav className="site-navigation" role="navigation" data-content-field="navigation" id="yui_3_17_2_1_1510033997638_352">

                    <div className="nav-item collection homepage" ref={(ref)=>{this.homeRef = ref}} id="id-579a49b8197aea5a0f3baf55">
                        <NavLink to="/" className="nav-item-page" data-ajax-loader="ajax-loader-binded" id="yui_3_17_2_1_1510033997638_544">
                            <span>Home</span>
                        </NavLink>
                    </div>

                    <div className="nav-item collection" ref={(ref)=>{this.aboutRef = ref}}  id="id-573b5d9e7da24fb15beeb613">
                        <NavLink to="/about" className="nav-item-page" data-ajax-loader="ajax-loader-binded" id="yui_3_17_2_1_1510033997638_351">
                            <span>About</span>
                        </NavLink>
                    </div>

                    <div className="nav-item collection" ref={(ref)=>{this.servicesRef = ref}}  id="id-573b84253c44d8cdadbaa7ba">
                        <NavLink to="/services" className="nav-item-page" data-ajax-loader="ajax-loader-binded">
                            <span>Services</span>
                        </NavLink>
                    </div>

                    <div className="nav-item collection" ref={(ref)=>{this.clientsRef = ref}}  id="id-573b5d3c59827efb0f504a4c">
                        <NavLink to="/clients" className="nav-item-page" data-ajax-loader="ajax-loader-binded">
                            <span>Clients</span>
                        </NavLink>
                    </div>

                    <div className="nav-item collection" ref={(ref)=>{this.newsRef = ref}}  id="id-573f2fd4f8baf36d30190eb0">
                        <NavLink to="/news" className="nav-item-blog" data-ajax-loader="ajax-loader-binded">
                            <span>News</span>
                        </NavLink>
                    </div>

                    <div className="nav-item collection" ref={(ref)=>{this.contactRef = ref}}  id="id-573b72aaa3360cb666defdc8">
                        <NavLink to="/contact" className="nav-item-page" data-ajax-loader="ajax-loader-binded">
                            <span>Contact</span>
                        </NavLink>
                    </div>

                </nav>

            </div>
        </div>
      
      </header>
    );
  }
}

export default Header;
