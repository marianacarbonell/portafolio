import React, { Component } from 'react';
import '../Skills/StyleSkills.css';


class Skills extends Component {
    render() {
        return (
           
            <div className=" home Icons">
             <div className="h3">
                <h2><b>Habilidades</b></h2>
            </div>
            <ul>
                <li className="htmlIcon">
                    <i class="devicon-html5-plain-wordmark"></i>
                </li>
                <li className="cssIcon">
                    <i class="devicon-css3-plain-wordmark"></i>
                </li>
                <li className="jsIcon">
                    <i class="devicon-javascript-plain"></i>
                </li>
                <li className="reactIcon">
                    <i class="devicon-react-original"></i>
                </li>
                <li className="gitIcon">
                    <i class="devicon-github-plain-wordmark"></i>
                </li>
                <li className="aiIcon">
                <i class="devicon-illustrator-plain"></i>
                </li>
                <li className="psIcon">
                    <i class="devicon-photoshop-line"></i>
                </li>
                </ul>
            </div>

        )
    }
}





export default Skills;