import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../NavbarPage/NavbarPage.css'



class NavbarPage extends Component {


    render() {
        return (
            <Navbar className="navbar" collapseOnSelect expand="lg"  >
                <Navbar.Brand className="text-white" href="#about2"><b>Inicio</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto textNavbar">
                    <Nav.Link className="text-white" href="#AboutMe"><b>Sobre mí</b></Nav.Link>
                        <Nav.Link className="text-white" href="#skills"><b>Habilidades</b></Nav.Link>
                        <Nav.Link className="text-white" href="#proyects"><b>Proyectos</b></Nav.Link>
                        <Nav.Link className="text-white" href="#contact"><b>Contacto</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );


    }
}
export default NavbarPage;