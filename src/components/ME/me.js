import React, { Component } from 'react';
import '../ME/me.css'

class Me extends Component {

    render() {
        return (
            <div class="home" id="AboutMe">
                <div className="textMe">
                    <p class="meText">Constantemente me encuentro en la búsqueda de nuevos conocimientos,con el fin de mejorar y crecer tanto profesional como personalmente. </p>
                    <p class="meText2">Me considero totalmente enamorada de la programación y con muchas ganas de seguir aprendiendo. Mi objetivo es poder integrar mis conocimientos de diseño gráfico con los de programación. Además tengo las herramientas necesarias de auto-aprendizaje y metodologías ágiles para seguir creciendo en ambos ámbitos.</p>
                </div>
                <div className="Icons">
                                <ul>
                                    <div className="firstIcons">
                                    <li className="htmlIcon">
                                        <i class="devicon-html5-plain-wordmark"></i>
                                    </li>
                                    <li className="cssIcon">
                                        <i class="devicon-css3-plain-wordmark"></i>
                                    </li>
                                    <li className="jsIcon">
                                        <i class="devicon-javascript-plain"></i>
                                    </li>
                                    </div>
                                    <div className="secondIcons">
                                    <li className="gitIcon">
                                        <i class="devicon-github-plain-wordmark"></i>
                                    </li>
                                    <li className="aiIcon">
                                        <i class="devicon-illustrator-plain"></i>
                                    </li>
                                    <li className="psIcon">
                                        <i class="devicon-photoshop-line"></i>
                                    </li>
                                    </div>
                                </ul>
                            </div>

            </div>
        )
    }
}


export default Me;