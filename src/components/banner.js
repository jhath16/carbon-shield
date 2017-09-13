import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Banner extends Component {
  render() {
    return(
      <section className='banner'>
        <h1>Carbon Shield</h1>
        <p>Making Email Fun Again</p>
        <Link to='signup'>
          <div className='btn btn-primary'>Sign Up Now</div>
        </Link>
      </section>
    )
  }
}

export default Banner;
