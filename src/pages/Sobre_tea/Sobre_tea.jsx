import React from 'react';
import './Sobre_tea.css';
//IMPORTANDO IMAGENS
import Tea from '../../../src/Assets/img/SobreOTea/tea.png';
import Color from '../../../src/Assets/img/SobreOTea/color.png';
import Warning from '../../../src/Assets/img/SobreOTea/warning.png';
import Laco from "../../../src/Assets/img/SobreOTea/laço.png";

import {useLanguage} from '../../context/language';

export default function Sobre_tea() {

  const {language} = useLanguage();

  return (
    <>
      <div className='container_sobre'>
        <div className='txt'>
          <h1>{language.about_tea.title}</h1>
          <p><b>{language.about_tea.main_text}</b></p>
        </div>
        <div className='alert'>
          <div className='alert_icon'>
            <img src={Tea} alt="tea img"/>
            <h3>{language.about_tea.title_1}</h3>
            <p>{language.about_tea.text_1}</p>
          </div>

          <div className='alert_icon'>
            <img src={Color} alt="color img"/>
            <h3>{language.about_tea.title_2}</h3>
            <p>{language.about_tea.text_2}</p>
          </div>

          <div className='alert_icon'>
            <img src={Warning} alt="warning img"/>
            <p>{language.about_tea.alert}</p>
          </div>

          <div className='alert_drawn'>
            <img src={Laco} alt="simbol img" />
          </div>
        </div>


      </div>
    </>
  );
}
