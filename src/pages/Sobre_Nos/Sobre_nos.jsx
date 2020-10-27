import React from 'react';
import './Sobre_nos.css';
//IMPORTANDO IMAGENS
import Bruno from '../../../src/Assets/img/SobreEquipe/bruno.jpg';
import Marcelo from '../../../src/Assets/img/SobreEquipe/marcelo.jpg';
import Mariana from '../../../src/Assets/img/SobreEquipe/mariana.jpg';
import Team from "../../../src/Assets/img/SobreEquipe/Vector_imagem.png";

export default function Sobre_nos() {
  return(
    <>
    <div className='container'>
      <div className='txt'>
        <h1>Sobre a Equipe</h1>
        <p><b>A equipe é composta por alunos do 2º Período do curso de Engenharia de Software da faculdade UniAmérica.<br /><br /> O projeto vem sendo desenvolvido juntamente com acadêmicas de Pedagogia nas quais foram responsáveis por aplicar o projeto e coletar informações. Nossa equipe está responsável de digitalizar o projeto e torna-lo mais interativo e ainda mais divertido.</b></p>
      </div>
      <div className='team'>
          <div className='team_icon'>
            <img src={Bruno} />
            <h3>Bruno Dias</h3>
          </div>

          <div className='team_icon'>
            <img src={Mariana} />
            <h3>Mariana Gonzalez</h3>
          </div>
          
          <div className='team_icon'>
            <img src={Marcelo} />
            <h3>Marcelo Fortes</h3>
          </div>

          <div className='team_drawn'>
            <img src={Team} />
          </div>
      </div>


    </div>
    </>
  ); 
}
