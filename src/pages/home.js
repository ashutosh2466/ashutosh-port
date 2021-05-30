import React from 'react'

import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function home() {
    return (
        <div className="HomePage">
            <header className="he">
                <h1 className="he-text">
                    Hi, I am 
                    <span>   Ashutosh Shankarwar
                    </span>
                </h1>
                <p className="h-sub-text">
                 B.Tech in Electronics & Telecommunication from Government College Of Enginneering A'bad .
                 <p>
                 🎯My Goal is to become a Full Stack Developer
                 </p>
               
                </p>
                <div className="icons"> 
                   
                   <a className="icon-hold" href="https://github.com/ashutosh2466">
                   <FontAwesomeIcon icon={faGithub} className="icon gh"  /></a>
                   <a className="icon-hold" href="https://www.linkedin.com/in/ashutosh-shankarwar-475492185/">
                   <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                  
                   </a>

                </div> 
            </header>
           
        </div>
    )
}
