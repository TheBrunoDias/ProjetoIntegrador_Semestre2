import React from 'react';
import './Sobre_nos.css';
//IMPORTANDO IMAGENS
import Bruno from '../../Assets/SobreEquipe/bruno.jpg';
import Marcelo from '../../Assets/SobreEquipe/marcelo.jpg';
import Mariana from '../../Assets/SobreEquipe/mariana.jpg';

export default function Sobre_nos() {
  return(
    <>
    <div className='container'>
      <div className='txt'>
        <h1>Sobre a equipe</h1>
        <p>A equipe é composta por alunos do 2º Período do curso de Engenharia de Software da faculdade UniAmérica.<br /><br /> O projeto vem sendo desenvolvido juntamente com acadêmicas de Pedagogia nas quais foram responsáveis por aplicar o projeto e coletar informações. Nossa equipe está responsável de digitalizar o projeto e torna-lo mais interativo e ainda mais divertido.</p>
      </div>
      <div className='team'>
          <div className='team_icon'>
            <img src={Bruno} />
            <p>Bruno Dias</p>
          </div>

          <div className='team_icon'>
            <img src={Mariana} />
            <p>Mariana Gonzalez</p>
          </div>
          
          <div className='team_icon'>
            <img src={Marcelo} />
            <p>Marcelo Fortes</p>
          </div>

      </div>

    </div>
    </>
  ); 
}
