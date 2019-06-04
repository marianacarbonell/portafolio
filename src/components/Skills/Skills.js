import React, { Component } from 'react';
import '../Skills/StyleSkills.css';


class Skills extends Component {
    render() {
        return (
            <div id="skills" className="home Icons">

                <div className="allIcons">

                    <ul>
                        <div className="columnaIcon">
                        <li className="htmlIcon">
                            <i class="devicon-html5-plain-wordmark"></i>
                        </li>
                        <li className="cssIcon">
                            <i class="devicon-css3-plain-wordmark"></i>
                        </li>
                        </div>

                        <div className="columnaIcon">
                        <li className="jsIcon">
                            <i class="devicon-javascript-plain"></i>
                        </li>
                        <li className="reactIcon">
                            <i class="devicon-react-original-wordmark"></i>
                        </li>
                        </div>

                        <div className="columnaIcon">
                        <li className="gitIcon">
                            <i class="devicon-github-plain-wordmark"></i>
                        </li>
                        <li className="aiIcon">
                            <i class="devicon-illustrator-plain"></i>
                        </li>
                        </div>

                        <li className="psIcon">
                            <i class="devicon-photoshop-line"></i>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}


export default Skills;