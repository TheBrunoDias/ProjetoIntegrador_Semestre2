import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

//COMPONENTES
import Navbar from './components/navbar/Navbar';

//PROVIDERS
import LanguageProvider from './context/language';

//PAGES
import LandingPage from './pages/landingpage/landingpage';
import Login from './pages/Login/Login';
import Sobre_nos from './pages/Sobre_Nos/Sobre_nos';
import Sobre_tea from './pages/Sobre_tea/Sobre_tea';
import Footer from './components/footer/Footer';

import LoadImg from './Assets/img/SobreEquipe/mariana.jpg';
import LoadImg1 from './Assets/img/SobreEquipe/bruno.jpg';
import LoadImg2 from './Assets/img/SobreEquipe/marcelo.jpg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLoad = styled.img`
  width: 10vw;
  margin-top: 5vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  animation: ${rotate} 1s linear infinite;
`;

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <LanguageProvider>
      {
        loading ?
          <ImgContainer>
            <ImgLoad src={LoadImg} alt="" />
            <ImgLoad src={LoadImg1} alt="" />
            <ImgLoad src={LoadImg2} alt="" />
          </ImgContainer>
          :
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path='/Login' component={Login} />
              <Route path='/Sobre_nos' component={Sobre_nos} />
              <Route path='/Sobre_tea' component={Sobre_tea} />
            </Switch>
            <Footer />
          </Router>
      }

    </LanguageProvider>
  );
}

export default App;
