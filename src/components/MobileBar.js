import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Render the header including menu items
 */
class MobileBar extends React.Component {
  /**
   * Render Header component
   * @return {jsxresult} result in jsx format
   */
  constructor(props) {
    super(props);    
  }
  
  showModal(whatKind) {
    if (!whatKind) {
      document.body.className += " mobile-menu-open";
    } else {
      document.body.className = document.body.className.replace(" mobile-menu-open", "");
    }

    this.props.goPage(whatKind);
  }

  render() {

    const {isExpand} = this.props;
    let leftIcon = null;
    if (isExpand) {
      leftIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30" height="30" fill="none" stroke="currentcolor" style={{display: 'inline-block', verticalAlign: 'middle'}} onClick={()=>{this.showModal(false);}}>
          <path d="M0 2.5 L16 2.5"></path>
          <path d="M0 8 L16 8"></path>
          <path d="M0 13.5 L16 13.5"></path>
        </svg>;
    } else {
      leftIcon = 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="none" stroke="currentcolor" style={{display: 'inline-block', verticalAlign: 'middle'}} onClick={()=>{this.showModal(true);}}>
          <path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179"></path>
          <path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179"></path>
        </svg>;
    }

    return (      
      <div className="mobile-bar-wrapper">
        <div className="mobile-bar-flex-child"></div>
        <div className="mobile-branding-wrapper">

            <div className="mobile-logo-image active">
                <a href="/" data-ajax-loader="ajax-loader-binded"><img src="//static1.squarespace.com/static/573a04372fe131630fd25157/t/578e66d1e6f2e1f6d2f67d0f/1491942351946/?format=1500w" alt="Harris Ingram LLP" /></a>
            </div>

            <div className="mobile-site-tagline">Business + Intellectual Property Attorneys</div>

        </div>
        <label className="mobile-nav-toggle-label">
            {leftIcon}
        </label>
      </div>
    );
  }
}

export default MobileBar;
