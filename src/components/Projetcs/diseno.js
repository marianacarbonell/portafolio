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
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Movie Time</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                   Aplicación que da recomendaciones de películas o series según el tiempo disponible.
                </Card.Text>
                                <a href="https://github.com/marianacarbonell/SCL007-hackathon-peliculas" target="_blank" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" target="_blank" className="btnCard" variant="primary">Demo</a>
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
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Pinterest</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    Replica del diseño de la página pinterest, hecha en versión desktop
                </Card.Text>
                                <a href="https://github.com/marianacarbonell/pinterest"  target="_blank" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="https://marianacarbonell.github.io/pinterest/" target="_blank" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card style={{ width: '14rem', height: "25rem" }} className="cardProjects">
                            <Card.Img style={{ width: '100%', height: "150px" }} variant="top" src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/tesis.jpg" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Social Pets</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    Social Pets es red social para dueños de mascotas, que da información sobre salud y alimentación.
                </Card.Text>
                                <a href="" className="btnCard" target="_blank" variant="primary">Repositorio</a><br></br>
                                <a href="#" target="_blank" className="btnCard" variant="primary">Demo</a>
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