import React from 'react'; //Com a nova att n é mais preciso importar o React
import { Link } from 'react-router-dom';
import './Navbar.css';
import { RiArrowDownSLine } from 'react-icons/ri'

import DropDown from '../dropdown/DropDown';

import { useLanguage } from '../../context/language';

function Navbar() {

    const { languageBool, setLanguageBool, language } = useLanguage();

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'> {/* Redirecionamento*/}
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

                <div className="language-menu-container">
                    <DropDown 
                        title={<>{languageBool ? <>Idioma</> : <>Language</>} <RiArrowDownSLine /> </>}
                    >
                        <ul className="language-menu">
                            <li onClick={() => setLanguageBool(true)}>Português</li>
                            <li onClick={() => setLanguageBool(false)}>Inglês</li>
                        </ul>
                    </DropDown>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;