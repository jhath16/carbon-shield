import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: 'closed'
    }
  }

  componentDidMount() {
    let navEl = document.querySelector('header nav');
    document.addEventListener('click', (event) => {
      console.log(navEl.contains(event.target));
      if (navEl.contains(event.target)) {
        this.toggleDropdown();
      } else {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown() {
    // still need a way to determine 'which' dropdown is being used.
    if (this.state.dropdown === 'open') {
      document.querySelector('.dropdown.open').classList.remove('open');
      this.setState({dropdown: 'closed'});
    } else {
      document.querySelector('.dropdown').classList.add('open');
      this.setState({dropdown: 'open'});
    }
  }

  closeDropdown() {
    if (this.state.dropdown === 'open') {
      document.querySelector('.dropdown.open').classList.remove('open');
      this.setState({dropdown: 'closed'});
    }
  }

  render() {
    return (
      <header>
        <div className="container">
          <img alt='Carbon Shield' src="http://via.placeholder.com/200x100"/>
          <nav>
            <ul>
              <li>
                <span>Services<i className="caret"></i></span>
                <div className="dropdown">
                  <ul>
                    <li><Link to={'cloudfilter'}>CloudFilter</Link></li>
                    <li><Link to={'safesend'}>SafeSend</Link></li>
                    <li><Link to={'xtramail'}>XtraMail</Link></li>
                    <li><Link to={'securestore'}>SecureStore</Link></li>
                    <li><Link to={'bracket'}>Bracket</Link></li>
                    <li><Link to={'cloudmail'}>CloudMail</Link></li>
                    <li><Link to={'exchange'}>Exchange +</Link></li>
                    <li><Link to={'dnshosting'}>DNS Hosting</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <span>About<i className="caret"></i></span>
                <div className="dropdown">
                  <ul>
                    <li>About Us</li>
                    <li>Why Carbon Shield?</li>
                  </ul>
                </div>
              </li>
              <li>About<i className="caret"></i></li>
              <li>FAQ<i className="caret"></i></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
