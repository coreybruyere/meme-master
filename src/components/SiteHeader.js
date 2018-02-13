import React, { Component } from 'react';

import logo from '../img/meme-lord-logo.svg';

class SiteHeader extends Component {
  render() {
    return (
      <div>
        <header className='site-header' role='banner'>
          <a className='site-header__logo' href='/'>
            <img className='block' src={logo} alt='Meme Lord Logo'/>
          </a>

          <svg className='site-header__bg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
            <defs>
              <linearGradient id='grad'>
                <stop offset='0' stopColor='#fcd9b6' />

                <stop offset='1' stopColor='#ffffff'/>
              </linearGradient>
            </defs>

            <polygon fill='url(#grad)' points='0,0 30,100 65,21 90,100 100,75 100,100 0,100' />

            <polygon fill='url(#grad)' points='0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100' />
          </svg>
        </header>
      </div>
    );
  }
}

export default SiteHeader;