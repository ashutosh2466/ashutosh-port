import React from 'react'
import about from '../img/as.jpg'

function  ImageSec() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about}/>
            </div>
            <div className="about-info">
                <h4>
                    I am<span> Ashutosh Shankarwar</span>

                </h4>
                <p>
                🧨 An Electronics Engineer by profession and a Javascript Lover by heart.An ambitious person with a desire to succeed 
                </p>
                <p>
                🧨currently pursuing my B.Tech in Electronics & Telecommunication from Government College Of Enginneering A'bad .
I have keen interest in Web Development.
                </p>
                <p>
                🔰 I started out  with learning HTML and CSS using W3School...and since then, its been an awesome journey.
                 </p>
                 <p>
                     💎I love working on Mission-driven Projects with teams and people who love challenge.
                 </p>
                 <a href="https://drive.google.com/drive/my-drive?lfhs=2" >
                 <button className="btn">
                     Download CV
                 </button>
                 </a>
            </div>
            
        </div>
    )
}

export default ImageSec;
