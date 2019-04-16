import React, { Component } from 'react';
import '../contact/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="All">
                <div className="h3">
                    <h3><b>Contacto</b></h3>
                    <div>
                        <a href="https://github.com/marianacarbonell?tab=repositories" target="_blank" className="git"><i className="devicon-github-plain-wordmark github"></i></a>
                        <a href="https://www.linkedin.com/in/mariana-carbonell-machado-b25518156/" target="_blank" className="git"><i class="fab fa-linkedin-in linkedin"></i></a>
                        <a href="mailto:marianacarbonellm@gmail.com" target="_blank" className="git"><i class="fas fa-envelope mail"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;