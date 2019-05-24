import React, { Component } from 'react';
import '../about/StyleAbout.css';


class About2 extends Component {

    render() {
        return (
            <div id="about2" class="home">
                <div id="tittle1" style={{ color: 'white' }}> </div>
                <div id="name" style={{ color: 'white' }}> Mariana Carbonell</div>
                <div id="" class="profession" style={{ color: 'white' }}> Front-end Developer | Diseñadora Gráfica</div>
                <div className="photo" >
                    <img style={{ width: '35%', height: "auto", marginLeft:"690px" }} src="https://raw.githubusercontent.com/marianacarbonell/portafolio/master/Bocetos/Mariana%20CarbonellPortafolioCorta.png" />
                </div>
            </div>
        )
    }
}


export default About2;