import React, { Component } from 'react';
import '../ME/me.css'

class Me extends Component {

    render() {
        return (
            <div class="homeMe" id="AboutMe">
                <div className="textMe">
                    <p >Constantemente me encuentro en la búsqueda de nuevos conocimientos,con el fin de mejorar y crecer tanto profesional como personalmente. </p>
                    <p >Me considero totalmente enamorada de la programación y con muchas ganas de seguir aprendiendo. Mi objetivo es poder integrar mis conocimientos de diseño gráfico con los de programación. Además tengo las herramientas necesarias de auto-aprendizaje y metodologías ágiles para seguir creciendo en ambos ámbitos.</p>
                </div>
                <ul className="IconsMe">
                                
                                    <div className="firstIcons">
                                    <li className="htmlIcon">
                                        <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/escalada.png"/>
                                    </li>
                                    <li className="cssIcon">
                                        <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/ilustracion.png"/>
                                    </li>
                                    <li className="jsIcon">
                                    <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/animals.png"/>
                                    </li>
                                    </div>
                                    <div className="secondIcons">
                                    <li className="gitIcon">
                                    <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/plantas.png"/>
                                    </li>
                                    <li className="aiIcon">
                                    <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/handmade.png"/>
                                    </li>
                                    <li className="psIcon">
                                    <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/leer.png"/>
                                    </li>
                                    </div>
                                
                            </ul>

            </div>
        )
    }
}


export default Me;