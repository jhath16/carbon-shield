import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container footer-container'>
          <div>
            <h6>Company</h6>
            <ul>
              <li><Link to='about'>About</Link></li>
              <li><a href='https://mailprotector.com/faq'>FAQ</a></li>
              <li><a href='http://status.mailprotector.com/'>Status</a></li>
              <li><a href='https://mailprotector.com/news/'>News</a></li>
              <li><Link to='support'>Support</Link></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <ul>
              <li><i className="fa fa-phone" aria-hidden="true"></i> (864) 335-1064</li>
              <li><i className="fa fa-map-marker" aria-hidden="true"></i> 1754 Woodruff Rd #131, Greenville, SC, 29607</li>
            </ul>
            <br/>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
