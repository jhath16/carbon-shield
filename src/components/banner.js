import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Banner extends Component {
  render() {
    return(
      <section className='banner'>
        <div className='overlay'>
          <h1>Carbon Shield</h1>
          <p>Making Email Simple and Secure</p>
          <Link to='signup'>
            <div className='btn btn-primary'>Sign Up Now</div>
          </Link>
        </div>
      </section>
    )
  }
}

export default Banner;
