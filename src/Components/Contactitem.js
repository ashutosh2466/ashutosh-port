import React from 'react'

function Contactitem({ icon,text,title }) {
    return (
        <div>
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-item">
                    <h6>{title}</h6>
                    <p>{text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contactitem
