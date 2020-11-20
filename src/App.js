import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
import NewLP from './pages/NewLP/NewLP';


function App() {


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
