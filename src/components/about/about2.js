import React, { Component } from 'react';
import '../about/StyleAbout.css';


class About2 extends Component {

    render() {
        return (
            <div id="about2" class="homeAbout">
                <div className="textAbout">
                <div id="name" style={{ color: 'white' }}> Mariana Carbonell</div>
                <div class="profession" style={{ color: 'white' }}> Front-end Developer | Diseñadora Gráfica</div>
                </div>
                <div className="photo" >
                    <img src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/Mariana%20CarbonellPortafolioCorta.png" />
                </div>
            </div>
        )
    }
}


export default About2;