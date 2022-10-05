import './header.scss';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header-wrapper">
        <a className="header-wrapper__logo-container" href="/">
          <img
            className="header-wrapper__logo"
            src="https://my-airport-board.netlify.app/9ce3efaf0bcc24f0ed82.png"
            alt="Logo"
          />
        </a>
        <ul className="header-navigation"></ul>
      </header>
    </>
  );
};

export default Header;
