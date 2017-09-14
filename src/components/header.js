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
      if (event.target.classList.contains('dropdown-toggle')) {
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
          <nav>
            <ul>
              <li><Link to='/'><span>Home</span></Link></li>
              <li id='services'>
                <span className='dropdown-toggle'>Services<i className="caret"></i></span>
                <div className="dropdown">
                  <ul>
                    <li><Link to='cloudfilter'>CloudFilter</Link></li>
                    <li><Link to='safesend'>SafeSend</Link></li>
                    <li><Link to='xtramail'>XtraMail</Link></li>
                    <li><Link to='securestore'>SecureStore</Link></li>
                    <li><Link to='bracket'>Bracket</Link></li>
                    <li><Link to='cloudmail'>CloudMail</Link></li>
                    <li><Link to='exchange'>Exchange +</Link></li>
                    <li><Link to='dnshosting'>DNS Hosting</Link></li>
                  </ul>
                </div>
              </li>
              <li id='about'>
                <span className='dropdown-toggle'>About<i className="caret"></i></span>
                <div className="dropdown">
                  <ul>
                    <li><Link to='about-us'>About Us</Link></li>
                    <li><Link to='why'>Why Carbon Shield?</Link></li>
                  </ul>
                </div>
              </li>
              <li id='faq'>
                <span className='dropdown-toggle'>FAQ<i className="caret"></i></span>
                  <div className="dropdown">
                    <ul>
                      <li><Link to='faq'>FAQ</Link></li>
                      <li><Link to='learn-more'>Learn More</Link></li>
                    </ul>
                  </div>
              </li>
            </ul>
          </nav>
          <div className="center-container float-right">
            <span className='contact-number'><i className="fa fa-phone" aria-hidden="true"></i> (864) 688-9731</span>
            <Link to='signup'><div className='btn btn-success'>Sign Up</div></Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
