import React, { Component } from 'react';
import './App.css';
import NavbarPage from './components/NavbarPage/NavbarPage.js';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projetcs/Projects';
import Contact from './components/contact/Contact'
import Container from 'react-bootstrap/Carousel'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage/>
        <About/>
        <Skills/>
        
        <Projects/>
        <Contact/>
        
      </div>

    );
  }
}

export default App;
