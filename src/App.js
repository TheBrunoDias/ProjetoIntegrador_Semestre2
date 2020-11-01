import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTES
import Navbar from './components/navbar/Navbar';

//PAGES
import LandingPage from './pages/landingpage/landingpage';
import Login from './pages/Login/Login';
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
          <Route path='/Instrucoes' render={() => <Login language={language} />}/>
          <Route path='/Sobre_nos'  render={() => <Sobre_nos language={language} />} />
          <Route path='/Sobre_tea'  render={() => <Sobre_tea language={language} />}   />
        </Switch>
        <Footer language={language} />
      </Router>

    </>
  );
}

export default App;
