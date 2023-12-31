import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/recipes">Recipes</a>
                    <a href="/start here">Start Here</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;