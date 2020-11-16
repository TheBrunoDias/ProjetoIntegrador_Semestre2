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
import NewLP from './pages/NewLP/NewLP';
import Footer from './components/footer/Footer';

import LoadImg from './Assets/img/SobreEquipe/mariana.jpg';
import LoadImg1 from './Assets/img/SobreEquipe/bruno.jpg';
import LoadImg2 from './Assets/img/SobreEquipe/marcelo.jpg';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <LanguageProvider>
      {
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path='/Login' component={Login} />
              <Route path='/Sobre_nos' component={Sobre_nos} />
              <Route path='/Sobre_tea' component={Sobre_tea} />
              <Route path='/NewLP' component={NewLP} />
            </Switch>
            <Footer />
          </Router>
      }

    </LanguageProvider>
  );
}

export default App;
