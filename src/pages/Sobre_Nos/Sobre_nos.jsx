import React from 'react';
import './Sobre_nos.css';
//IMPORTANDO IMAGENS
import Bruno from '../../../src/Assets/img/SobreEquipe/bruno.jpg';
import Marcelo from '../../../src/Assets/img/SobreEquipe/marcelo.jpg';
import Mariana from '../../../src/Assets/img/SobreEquipe/mariana.jpg';
import Team from "../../../src/Assets/img/SobreEquipe/Vector_imagem.png";

import { useLanguage } from '../../context/language';

export default function Sobre_nos() {
  const {language} = useLanguage();
  return (
    <>
      <div className='container_sobre'>
        <div className='txt'>
          <h1>{language.about_us.title}</h1>
          <p><b>{language.about_us.text}</b></p>
          <p><b>{language.about_us.text_2}</b></p>
        </div>

        <div className='team'>
          <div className='team_icon'>
            <img src={Bruno} alt="bruno img" />
            <h3>Bruno Dias</h3>
          </div>

          <div className='team_icon'>
            <img src={Mariana} alt="mariana img" />
            <h3>Mariana Gonzalez</h3>
          </div>

          <div className='team_icon'>
            <img src={Marcelo} alt="marcelo img" />
            <h3>Marcelo Fortes</h3>
          </div>

          <div className='team_drawn'>
            <img src={Team} alt="team img" />
          </div>
        </div>
      </div>
    </>
  );
}
