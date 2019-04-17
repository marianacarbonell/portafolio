import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../Projetcs/StyleProjects.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'

class Projects extends Component {

    render() {
        return (
            <div id="proyects" className="home">

                <div className="h3">
                    <h3><b>Proyectos</b></h3>
                </div>
                <div className="row allCards" >
                    <div className="col-sm-6 col-md-3" >
                        <Card style={{ width: '14rem', height: "33rem" }} className="cardProjects">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Movie Time</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    Movie time es una aplicación que te da recomendaciones de películas o series según el tiempo que tú tengas disponibles para ver.
                </Card.Text>
                                <a href="https://github.com/marianacarbonell/SCL007-hackathon-peliculas" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <Card style={{ width: '14rem', height: "33rem" }} className="cardProjects">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="Card.Body">
                                <Card.Title ><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>BurgerQueen</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    BurgerQueen es una interfaz hecha para una cadena de comida rápida, con la cual puedan tomar pedidos usando una tablet.
                                                </Card.Text>
                                <a href="" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <Card style={{ width: '14rem', height: "33rem" }} className="cardProjects">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Pinterest</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    Replica del diseño de la página pinterest, hecha en versión desktop
                </Card.Text>
                                <a href="" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <Card style={{ width: '14rem', height: "33rem" }} className="cardProjects">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body className="Card.Body">
                                <Card.Title><h4 style={{ textAlign: 'center', fontWeight: "bolder" }}>Social Pets</h4></Card.Title>
                                <Card.Text className="Card.Text text-justify">
                                    Social Pets es red social para dueños de mascotas, que da información sobre salud y alimentación.
                </Card.Text>
                                <a href="" className="btnCard" variant="primary">Repositorio</a><br></br>
                                <a href="" className="btnCard" variant="primary">Demo</a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
        )
    }
}


export default Projects;