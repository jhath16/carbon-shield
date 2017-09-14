import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <span><i className="fa fa-phone" aria-hidden="true"></i> (864) 688-9731</span><br/>
          <span><i className="fa fa-map-marker" aria-hidden="true"></i> 1754 Woodruff Rd #131</span>          
        </div>
      </footer>
    )
  }
}

export default Footer;
