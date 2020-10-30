import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTES
import Navbar from './components/navbar/Navbar';

//PAGES
import LandingPage from './pages/landingpage/index';
import Instrucoes from './pages/Instrucoes/Instrucoes';
import Sobre_nos from './pages/Sobre_Nos/Sobre_nos';
import Sobre_tea from './pages/Sobre_tea/Sobre_tea';
import Footer from './components/footer/Footer';

import * as data from './server/language.json';

function App() {

  const [language, setLanguage] = useState(data.pt_br);
  const [languageBool, setLinguageBool] = useState(false);
  return (
    <>
      <Router>
        <Navbar language={language} changeLanguage={() => {
          setLinguageBool(!languageBool);
          (languageBool) ? setLanguage(data.en) : setLanguage(data.pt_br)
        }}/>
        <Switch>
          <Route path='/' exact render={() => <LandingPage language={language} />}/>
          <Route path='/Instrucoes' component={Instrucoes} />
          <Route path='/Sobre_nos' component={Sobre_nos} />
          <Route path='/Sobre_tea' component={Sobre_tea} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
