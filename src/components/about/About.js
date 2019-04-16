import React, { Component } from 'react';
import '../about/StyleAbout.css';


class About extends Component {

    render() {
        return (
            <div className="home">
                <div className="title">
                    <h3><b>Sobre mí</b></h3>
                    <div className="card mb-3 cardAbout" style={{ maxWidth: '50%' }}>
                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <img src="http://img.imgur.com/Y0ONI.jpg" class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Mariana Carbonell</h5>
                                    <h6 class="card-title"><b>Developer Front-end(Laboratoria)</b></h6>
                                    <h6 class="card-title"><b>Diseñadora Gráfico (U.L.A - Venezuela)</b></h6>
                                    <p className="card-text text-justify">Me encanta crear, diseñar e innovar. Constantemente me encuentro en la búsqueda de nuevos conocimientos para complementar los ya obtenidos con el fin de mejorar y crecer tanto profesional como personalmente.</p>
                                    <p className="card-text text-justify">En cuanto a la programación,  me considero totalmente enamorada y con muchas ganas de seguir aprendiendo. Tengo las herramientas necesarias de auto-aprendizaje y metodologías ágiles para seguir creciendo en este ámbito.</p>
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