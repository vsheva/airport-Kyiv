import './header.scss';
import React from 'react'

const Header = () => {
    return <>

        <header className="header-wrapper"><a className="header-wrapper__logo-container" href="/">
            <img
                className="header-wrapper__logo"
                src="https://iev.aero/_nuxt/img/logo.c97e286.png" alt="Logo"/></a>
            <ul className="header-navigation"></ul>
        </header>


    </>
}

export default Header;