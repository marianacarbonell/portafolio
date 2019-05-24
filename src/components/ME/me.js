import React, { Component } from 'react';
import '../ME/me.css'

class Me extends Component {

    render() {
        return (
            <div class="home" id="AboutMe">
            <div className="h3">
                    <h3><b>Sobre mí</b></h3>
                </div>
                
            <p class="meText">Constantemente me encuentro en la búsqueda de nuevos conocimientos,con el fin de mejorar y crecer tanto profesional como personalmente. </p>
            <p class="meText2">Me considero totalmente enamorada de la programación y con muchas ganas de seguir aprendiendo. Mi objetivo es poder integrar mis conocimientos de diseño gráfico con los de programación. Además tengo las herramientas necesarias de auto-aprendizaje y metodologías ágiles para seguir creciendo en ambos ámbitos.</p>
           <img className="photoMe" src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/sirena.jpg" />
          

            </div>
        )
    }
}


export default Me;