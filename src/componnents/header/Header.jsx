import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => {

    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li>Search</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Sign In</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;