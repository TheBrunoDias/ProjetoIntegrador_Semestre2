import React from 'react';
import './Sobre_tea.css';
//IMPORTANDO IMAGENS
import Tea from '../../../src/Assets/img/SobreOTea/tea.png';
import Color from '../../../src/Assets/img/SobreOTea/color.png';
import Warning from '../../../src/Assets/img/SobreOTea/warning.png';
import Laco from "../../../src/Assets/img/SobreOTea/laço.png";

export default function Sobre_tea() {
  return(
    <>
    <div className='container_sobre_tea'>
      <div className='txt'>
        <h1>Transtorno do Espectro Autista</h1>
        <p><b>O Transtorno do Espectro Autista (TEA) refere-se a uma série de condições caracterizadas por desafios com habilidades sociais, comportamentos repetitivos, fala e comunicação não-verbal, bem como por forças e diferenças únicas.<br /><br /> Os sinais mais óbvios do Transtorno do Espectro Autista tendem a aparecer entre 2 e 3 anos de idade. Em alguns casos, ele pode ser diagnosticado por volta dos 18 meses.
</b></p>
      </div>
      <div className='team'>
          <div className='team_icon'>
            <img src={Tea} />
            <h3>TEA</h3>
          </div>

          <div className='team_icon'>
            <img src={Color} />
            <h3>COLOR</h3>
          </div>
          
          <div className='team_icon'>
            <img src={Warning} />
            <h3>WARNING</h3>
          </div>

          <div className='team_drawn'>
            <img src={Laco} />
          </div>
      </div>


    </div>
    </>
  ); 
}
