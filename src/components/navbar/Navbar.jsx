import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Inicio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Instrucoes' className='nav-links'>
                        Instruções
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Sobre_nos' className='nav-links'>
                        Sobre Nós
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Sobre_tea' className='nav-links'>
                        Sobre o TEA
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;