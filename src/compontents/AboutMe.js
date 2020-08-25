import React from 'react';
import '../styles/Styles.css';
import Pic from '../assets/outdatedpic.jpg';

function AboutMe() {

    return (
        <section class="container content-box">
            <div class="container">
                <h1>About Me</h1>
                <hr></hr>
                <main>
                    <img class="wrap" src={Pic} alt="outdated picture" height="150px" width="160px" HSPACE="10px" align="left" />
                    <p>
                        I was born and raised in Miami, Florida. My hobbies include hiking, camping, playing video games and anything else that I can find entertaining for at least a few minutes.
                    </p>
                    <p>
                        I dabbled while in college, tryng things from acting to coding, bio to archaeology, never really settling on any one subject until I finally decided I had no idea what I wanted to do and withdrew.
                    </p>
                    <p>
                        Since then I have been trying things and working for the almighty dollar and have finally decided that I wanted to do something more fulfilling and could pay for my constant dabbling.
                    </p>
                    <p>
                        After a lot of research I found myself joining this bootcamp to try to more fully immerse myself in a skill I had only dipped my toes in previously.
                    </p>
                </main>
            </div>
        </section>
    )
}

export default AboutMe;