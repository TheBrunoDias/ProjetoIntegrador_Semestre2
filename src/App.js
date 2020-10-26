import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//COMPONENTES
import Navbar from './components/navbar/Navbar';
//PAGES
import LandingPage from './pages/landingpage/index';
import Instruções from './pages/Instrucoes/Instrucoes';
import Sobre_nos from './pages/Sobre_Nos/Sobre_nos';
import Sobre_tea from './pages/Sobre_tea/Sobre_tea';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Navbar />
          <Route path='/' exact component={LandingPage} />
          <Route path='/Instruções' component={Instruções} />
          <Route path='/Sobre_nos' component={Sobre_nos} />
          <Route path='/Sobre_tea' component={Sobre_tea} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
