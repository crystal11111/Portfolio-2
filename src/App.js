import logo from './assets/img/crystal_gem.png';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, Banner, Skills, Projects, Contact, Footer } from "./components";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
