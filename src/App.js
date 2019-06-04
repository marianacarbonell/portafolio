import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage/NavbarPage.js';
import About2 from './components/about/about2';
import Me from '../src/components/ME/me';
import Skills from './components/Skills/Skills';
import Projects from './components/Projetcs/Projects';
import Diseño from './components/Projetcs/diseno';
import Contact from './components/contact/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage/>
        <About2/>
        <Me/>
        <Skills/>
        <Projects/>
        <Diseño/>
        <Contact/>
        
      </div>

    );
  }
}

export default App;
