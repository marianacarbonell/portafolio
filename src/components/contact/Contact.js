import React, { Component } from 'react';
import '../contact/contact.css';

class Contact extends Component {
    render() {
        return (
            <div >
                <div id="contact" className="All">

                    <a href="https://github.com/marianacarbonell?tab=repositories" target="_blank" className="git"><i className="devicon-github-plain-wordmark github"></i></a>
                    <a href="https://www.linkedin.com/in/mariana-carbonell-machado-b25518156/" target="_blank" className="git"><i class="fab fa-linkedin-in linkedin"></i></a>
                    <a href="mailto:marianacarbonellm@gmail.com" target="_blank" className="git"><i class="fas fa-envelope mail"></i></a>
                    <a href="https://wa.me/56984867112" target="_blank" className="wsp"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://www.behance.net/unacarbonell" target="_blank" className="behance"><i class="fab fa-behance"></i></a>
                </div>
            </div>
        )
    }
}

export default Contact;