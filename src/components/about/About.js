import React, { Component } from 'react';
import '../about/StyleAbout.css';


class About extends Component {

    render() {
        return (
            <div className="card mb-3 cardAbout" style={{ maxWidth: '540px' }}>
                <div class="row no-gutters">

                    <div class="col-md-4">
                        <img src="..." class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Mariana Carbonell</h5>
                            <h6 class="card-title">Developer Front-end(Laboratoria)</h6>
                            <h6 class="card-title">Diseñadora Gráfico (U.L.A - Venezuela)</h6>
                            <p class="card-text">Me encanta crear, diseñar e innovar. Constantemente me encuentro en la búsqueda de nuevos conocimientos para complementar los ya obtenidos con el fin de mejorar y crecer tanto profesional como personalmente.</p>

                        </div>
                    </div>
                </div>
            </div>
            // <div className="home container">
            //     <div className="h3"><h3>Sobre mí</h3></div>

            //     <div className="row">
            //         <div className="col-md-8"> </div>
            //         <div className="col-md-4">
            //             <div className="textAbout">

            //                 <p>Soy Mariana Carbonell, tengo 26 años, Developer Front-end egresada de Laboratoria y Diseñadora Gráfico egresada de la U.L.A (Venezuela).</p>

            //                 <p>Me encanta crear, diseñar e innovar. Constantemente me encuentro en la búsqueda de nuevos conocimientos para complementar los ya obtenidos con el fin de mejorar y crecer tanto profesional como personalmente.</p>

            //                 <p>En cuanto a la programación, en este tiempo que llevo programando me considero totalmente enamorada y con muchísimas ganas de seguir aprendiendo. Tengo las herramientas necesarias de auto-aprendizaje, metodologías ágiles, la motivación y voluntad para seguir creciendo en este ámbito.</p>


            //             </div>

            //         </div>

            //     </div>
            // </div>
        )
    }
}

export default About;