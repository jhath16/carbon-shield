import React, { Component } from 'react';
import logo from '../assets/CS-Logo.svg';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: 'closed',
      openId: ''
    }
  }

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('dropdown-trigger')) {
        this.toggleDropdown(event.target.parentNode.id); //very hacky
      } else {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown(id) {
    if (this.state.dropdown === 'open') {
      // close
      if (id !== this.state.openId) {
        document.querySelector('.dropdown.open').classList.remove('open');
        document.getElementById(id).querySelector('.dropdown').classList.add('open');
        this.setState({openId: id});
      } else {
        document.querySelector('.dropdown.open').classList.remove('open');
        this.setState({dropdown: 'closed', openId: ''});
      }
    } else {
      // open
      document.getElementById(id).querySelector('.dropdown').classList.add('open');
      this.setState({dropdown: 'open', openId: id});
    }
  }

  closeDropdown() {
    if (this.state.dropdown === 'open') {
      document.querySelector('.dropdown.open').classList.remove('open');
      this.setState({dropdown: 'closed'});
    }
  }

  componentWillUnmount() {
    // if the header ever gets unmounted...
    document.removeEventListener('click');
  }

  render() {
    return (
      <header>
        <div className="container">
          <img alt='Carbon Shield' src={logo}/>
          <div className='center-container standard-nav'>
            <nav>
              <ul>
                <li><Link to='/'><span>Home</span></Link></li>
                <li id='services'>
                  <span className='dropdown-trigger'>Services<i className="caret"></i></span>
                  <div className="dropdown">
                    <ul>
                      <li><a href='https://mailprotector.com/cloudfilter/'>CloudFilter</a></li>
                      <li><a href='https://mailprotector.com/safesend/'>SafeSend</a></li>
                      <li><a href='https://mailprotector.com/xtramail/'>XtraMail</a></li>
                      <li><a href='https://mailprotector.com/securestore/'>SecureStore</a></li>
                      <li><a href='https://mailprotector.com/bracket/'>Bracket</a></li>
                      <li><a href='https://mailprotector.com/cloudmail/'>CloudMail</a></li>
                      <li><a href='https://mailprotector.com/hostedexchange/'>Exchange +</a></li>
                      <li><Link to='dnshosting'>DNS Hosting</Link></li>
                      <li><a href='/'>Office 365</a></li>
                    </ul>
                  </div>
                </li>
                <li id='about'>
                  <span className='dropdown-trigger'>About<i className="caret"></i></span>
                  <div className="dropdown">
                    <ul>
                      <li><Link to='about-us'>About Us</Link></li>
                      <li><Link to='why'>Why Carbon Shield?</Link></li>
                    </ul>
                  </div>
                </li>
                <li id='faq'>
                  <span className='dropdown-trigger'>FAQ<i className="caret"></i></span>
                  <div className="dropdown">
                    <ul>
                      <li><Link to='faq'>FAQ</Link></li>
                      <li><Link to='learn-more'>Learn More</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className='center-container float-right'>
            <button className='nav-dropdown-toggle'><i className="fa fa-bars" aria-hidden="true"></i></button>
          </div>
          <div className="header-contact center-container float-right">
            <span className='contact-number'><i className="fa fa-phone" aria-hidden="true"></i> (864) 335-1064</span>
            <Link to='signup'><div className='btn btn-success'>Sign Up</div></Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
