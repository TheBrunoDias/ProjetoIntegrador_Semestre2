import React from 'react';

import {Nav, Li} from './style.jsx'; 

export default function NavBar(){
    return(
        <Nav>
            <Li><a href="#">Início</a></Li>
            <Li><a href="#">Instruções</a></Li>
            <Li><a href="#">Sobre Nós</a></Li>
            <Li><a href="#">Sobre o TEA</a></Li>
        </Nav>
    );
}