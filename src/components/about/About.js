import React, { Component } from 'react';
import '../about/StyleAbout.css';


class About extends Component {

    render() {
        return (
            <div id="about" className="home">
                <div className="title">
                <div className="title2">
                    <h3 style={{color: 'white'}}><b>Sobre mí</b></h3>
                    </div>
                    <div className="card mb-3 cardAbout" style={{ maxWidth: '50%'}}>
                    <div class="image" style={{width:'100%', margin:"auto"}}>
                                <img  style={{ width: '50%', height: "90%"}} src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/Mariana%20Carbonell.JPG" class="card-img,  rounded-circle" alt="..." />
                            </div>
                        <div class="row no-gutters">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h2 class="card-title"><b>Mariana Carbonell</b></h2>
                                    <h6 class="card-title"><b>Developer Front-end(Laboratoria)</b></h6>
                                    <h6 class="card-title "><b>Diseñadora Gráfico (U.L.A - Venezuela)</b></h6>
                                    <p className="card-text text-justify">Constantemente me encuentro en la búsqueda de nuevos conocimientos para complementar los ya obtenidos con el fin de mejorar y crecer tanto profesional como personalmente.</p>
                                    <p className="card-text text-justify">Me considero totalmente enamorada de la programación y con muchas ganas de seguir aprendiendo. Tengo las herramientas necesarias de auto-aprendizaje y metodologías ágiles para seguir creciendo en este ámbito.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default About;