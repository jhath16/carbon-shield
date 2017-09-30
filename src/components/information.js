import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Information extends Component {
  render() {
    return (
      <section className='information'>
        <div className='container'>
          <div className='row'>
            <div className='info col-lg-4'>
              <i className="fa fa-question" aria-hidden="true"></i>
              <h4>Why Carbon Shield?</h4>
              <p>Carbon Shield is dedicated to your organization's email solutions. We start with a consultation of your company's needs and recommend a solution that suits. We provide the provisioning and on-boarding guidance to have you up and running in no time. Trust Carbon Shield to secure your day to day communications as well as a backup and security strategy that meets your needs.</p>
            </div>
            <div className='info col-lg-4'>
              <i className="fa fa-user" aria-hidden="true"></i>
              <h4>About Us</h4>
              <p>Being an early pioneer in the email security space, Carbon Shield has 16 years experience in email security and hosting for small and medium size business. Our experts can answer your questions big or small. We can assist with anything from business class email scanning to the most demanding compliance concerns. Our team acts as your communications consultant, helping you find a perfectly tailored solution that meets your needs while making sure you don't pay for items you don't.</p>
            </div>
            <div className='info col-lg-4'>
              <i className="fa fa-check" aria-hidden="true"></i>
              <h4>Get Started</h4>
              <p>Use the <strong>Sign Up</strong> button to fill some basic information about your organization and we will set up a time to discuss all your options. We will set up a call to understand your time schedule - whether that is a couple hours or a couple months.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Information;
