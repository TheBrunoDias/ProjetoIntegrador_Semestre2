import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";

//IMPORTANDO IMAGENS
import Logo from "../../../src/Assets/img/landingpage/Logo.png";
import Why from "../../../src/Assets/img/landingpage/why.png";
import How from "../../../src/Assets/img/landingpage/how.png";
import What from "../../../src/Assets/img/landingpage/what.png";
import Contando from "../../../src/Assets/img/landingpage/couting.png";
import Montando from "../../../src/Assets/img/landingpage/making.png";
import Criando from "../../../src/Assets/img/landingpage/creating.png";

import { useLanguage } from "./context/language";

function LandingPage() {
  const { language } = useLanguage();

  return (
    <>
      <div className="teste">
        <div className="header">
          <div div className="bem_vindo">
            <img src={Logo} alt="logo" />
            <h1>{language.landing_page.header.welcome}</h1>
            <h2>{language.landing_page.header.text}</h2>
            <Link to="/jogo" className="jogue-agora">
              {language.landing_page.header.button}
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="container-branco">
            <div className="sobre">
              <h1>{language.landing_page.about.title}</h1>
              <div className="card">
                <p>{language.landing_page.about.why_text}</p>

                <div className="card_img">
                  <img src={Why} alt="why" />
                  <h3>{language.landing_page.about.why_subtitle}</h3>
                </div>
              </div>

              <div className="card">
                <div className="card_img2">
                  <img src={How} alt="how" />
                  <h3>{language.landing_page.about.how_subtitle}</h3>
                </div>

                <p>{language.landing_page.about.how_text}</p>
              </div>

              <div className="card">
                <p>{language.landing_page.about.what_text}</p>

                <div className="card_img">
                  <img src={What} alt="what" />
                  <h3>{language.landing_page.about.what_subtitle}</h3>
                </div>
              </div>
            </div>

            <div className="como_jogar">
              <h1>{language.landing_page.play.title}</h1>
              <div className="card_cj">
                <div>
                  <img src={Contando} alt="counting" />
                  <h3>{language.landing_page.play.counting_title}</h3>
                  <p>{language.landing_page.play.counting_text}</p>
                </div>

                <div>
                  <img src={Montando} alt="joining" />
                  <h3>{language.landing_page.play.joining_title}</h3>
                  <p>{language.landing_page.play.joining_text}</p>
                </div>

                <div>
                  <img src={Criando} alt="creating" />
                  <h3>{language.landing_page.play.creating_title}</h3>
                  <p>{language.landing_page.play.creating_text}</p>
                </div>
              </div>
            </div>

            <div className="muito_legal">
              <h1>{language.landing_page.cool.title}</h1>
              <p>{language.landing_page.cool.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
