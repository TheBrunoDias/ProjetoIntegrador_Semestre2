import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import Logo from '../../../src/Assets/img/landingpage/Logo.png';


function backToTop() {
    window.scrollBy({
        top: -window.innerHeight*2,
        behavior: "smooth",
    });
}

export default function Footer() {

    return (
        <footer className="footer">
            <ul className="footer-list">
                <li onClick={backToTop}>Voltar para o Topo</li>
                <li><Link to='/' className="footer-link">Inicio</Link></li>
                <li><Link to='/Instrucoes' className="footer-link">Instruções</Link></li>
                <li><Link to='/Sobre_nos' className="footer-link">Sobre Nós</Link></li>
                <li><Link to='/Sobre_tea' className="footer-link">Sobre o TEA</Link></li>
            </ul>
            <img src={Logo} alt="Uniamericon Logo" />
        </footer>
    );

}