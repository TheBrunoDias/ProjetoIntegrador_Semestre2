import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import Logo from '../../../src/Assets/img/landingpage/Logo.png';

import { useLanguage } from '../../context/language';


function backToTop() {
    window.scrollBy({
        top: -window.innerHeight * 2,
        behavior: "smooth",
    });
}

export default function Footer() {

    const {language} = useLanguage();
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li onClick={backToTop}>{language.footer.back_to_top}</li>
                <li><Link to='/' className="footer-link">{language.footer.home}</Link></li>
                <li><Link to='/Instrucoes' className="footer-link">{language.footer.instructions}</Link></li>
                <li><Link to='/Sobre_nos' className="footer-link">{language.footer.about_us}</Link></li>
                <li><Link to='/Sobre_tea' className="footer-link">{language.footer.about_tea}</Link></li>
            </ul>
            <img src={Logo} alt="Uniamericon Logo" />
        </footer>
    );

}