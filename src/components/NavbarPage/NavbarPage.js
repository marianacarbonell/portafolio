import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../NavbarPage/NavbarPage.css'



class NavbarPage extends Component {


    render() {
        return (
            <Navbar className="navbar" collapseOnSelect expand="lg"  >
                <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto textNavbar">
                        <Nav.Link href="#features">Habilidades</Nav.Link>
                        <Nav.Link href="#pricing">Proyectos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );


    }
}
export default NavbarPage;