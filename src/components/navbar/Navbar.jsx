import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar({ language, changeLanguage }) {

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            {language.nav_bar.home}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Login' className='nav-links'>
                            {language.nav_bar.instructions}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Sobre_nos' className='nav-links'>
                            {language.nav_bar.about_us}
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Sobre_tea' className='nav-links'>
                            {language.nav_bar.about_tea}
                        </Link>
                    </li>
                </ul>
                <button className='nav-links linguage_btn' onClick={changeLanguage}>Linguagem</button>

            </div>
        </nav>
    );
}

export default Navbar;