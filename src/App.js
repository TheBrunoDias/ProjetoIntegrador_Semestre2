import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTES
import Navbar from './components/navbar/Navbar';

//PAGES
import LandingPage from './pages/landingpage/index';
import Instrucoes from './pages/Instrucoes/Instrucoes';
import Sobre_nos from './pages/Sobre_Nos/Sobre_nos';
import Sobre_tea from './pages/Sobre_tea/Sobre_tea';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/Instrucoes' component={Instrucoes} />
          <Route path='/Sobre_nos' component={Sobre_nos} />
          <Route path='/Sobre_tea' component={Sobre_tea} />
        </Switch>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
