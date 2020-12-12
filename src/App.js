import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTES
import Navbar from "./components/navbar/Navbar";

//PROVIDERS
import LanguageProvider from "./context/language";
import AuthProvider from "./context/auth";

//PAGES
import LandingPage from "./pages/landingpage/landingpage";
import Sobre_nos from "./pages/Sobre_Nos/Sobre_nos";
import Sobre_tea from "./pages/Sobre_tea/Sobre_tea";
import Footer from "./components/footer/Footer";
import GamePage from "./pages/Game";
import BlogMain from "./pages/Blog/Main";
import AdminPage from "./pages/Admin";
import NewPost from "./pages/Blog/NewPost";
import SinglePost from "./pages/Blog/Single";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Sobre_nos" component={Sobre_nos} />
          <Route path="/blog" exact component={BlogMain} />
          <Route path="/blog/:id" component={SinglePost} />
          <Route path="/Sobre_tea" component={Sobre_tea} />
          <Route path="/jogo" component={GamePage} />
          <AuthProvider>
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/admin/update" component={NewPost} />
          </AuthProvider>
        </Switch>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
