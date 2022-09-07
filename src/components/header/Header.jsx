import './header.scss';
import React from 'react'

const Header = () => {
    return <>

        <header className="header-wrapper"><a className="header-wrapper__logo-container" href="/">
            <img
                className="header-wrapper__logo"
                src="https://iev.aero/_nuxt/img/logo.c97e286.png"
                srcSet="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png " alt="Logo"/></a>
            <ul className="header-navigation">
               {/* <li><a className="header-navigation__item" href="/">For passengers</a></li>
                <li><a className="header-navigation__item" href="/news">IEV Services</a></li>
                <li><a className="header-navigation__item" href="/news">VIP</a></li>
                <li><a className="header-navigation__item" href="/news">Corporate</a></li>
                <li><a className="header-navigation__item" href="/contacts">Press Room</a></li>*/}
            </ul>
        </header>


    </>
}

export default Header;