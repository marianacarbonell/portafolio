import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Projetcs/StyleProjects.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Diseño extends Component {

    render() {
        return (
            <div id="diseño" className="home cardProjects" >
                <Container>
                <Row >
                    <Col xs={12} md={4}>
                        <Card style={{ width: '14rem', height: "25rem" }} className="cardProjects firstCard">
                            <Card.Img style={{ width: '100%', height: "150px" }} variant="top" src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/ilustraciones.jpg" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Ilustraciones</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                   Trabajos ilustrativos de diferentes temáticas.
                </Card.Text>
                                <a href="https://www.behance.net/gallery/41785965/Animals-Illustrations-(-Digiatl-Watercolor)" target="_blank" className="btnCard" variant="primary">Ver más</a><br></br>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    {/* <div className="col-sm-6 col-md-3">
                        <Card style={{ width: '14rem', height: "31rem" }} className="cardProjects">
                            <Card.Img style={{ width: '100%', height: "200px" }} variant="top" src="holder.js/100px180" />
                            <Card.Body className="Card.Body">
                                <Card.Title ><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>BurgerQueen</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    BurgerQueen es una interfaz hecha para una cadena de comida rápida, con la cual puedan tomar pedidos usando una tablet.
                                                </Card.Text>
                                <a href="https://github.com/marianacarbonell/SCL007-BurgerQueen/tree/develop" target="_blank" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" target="_blank" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </div> */}
                   <Col xs={12} md={4}>
                        <Card style={{ width: '14rem', height: "25rem" }} className="cardProjects">
                            <Card.Img style={{ width: '100%', height: "150px" }} variant="top" src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/logos.jpg"/>
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Logotipos</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                Diseño de logotipos.
                </Card.Text>
                                <a href="https://www.behance.net/gallery/65619001/Logo-Design"  target="_blank" className="btnCard" variant="primary">Ver más</a><br></br>
                        
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card style={{ width: '14rem', height: "25rem" }} className="cardProjects">
                            <Card.Img style={{ width: '100%', height: "150px" }} variant="top" src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/tesis.jpg" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Guía de escalada</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                Guía completa de escalada, con trabajos de iconografía, fotografía, señalética y diseño de mapas.                </Card.Text>
                                <a href="https://www.behance.net/gallery/60744143/Climbing-Guide-Design" className="btnCard" target="_blank" variant="primary">Ver más</a><br></br>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                </Container>
            </div >
        )
    }
}


export default Diseño;