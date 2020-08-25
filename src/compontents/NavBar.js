import React from 'react';
import AboutMe from './AboutMe';
import resumeIcon from '../assets/resumeIcon.png';


function HideComponent() {
    const element = document.querySelector('.main-blurb');
    element.style.display = 'none';
}


function NavBar() {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand"><strong>Tyler Ink Broeker</strong></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a type="button" className="nav-link" onClick={HideComponent}>About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a type="button" className="nav-link" onClick={HideComponent}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="upcomingfeatures.html">
                            Resume
                            <img src={resumeIcon} alt="resume" height="25px" width="25px" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;
