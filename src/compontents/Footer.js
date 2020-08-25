import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';


function Footer() {
    return (
        <footer className="content-box page-footer pt-4 text-center">
            <div className="container">
                <span>
                    <a href="https://github.com/TylerinkBroeker">
                        <img src={github} height="50px" width="50px" alt="GitHub" />
                    </a>

                    <a href="https://www.linkedin.com/in/tyler-broeker-6489881a4/">
                        <img src={linkedin} height="50px" width="50px" alt="LinkedIn" />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;