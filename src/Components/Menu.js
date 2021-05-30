import React from 'react'

function Menu({menu}) {
    return (
        <div className="proj">
            {
                menu.map((item)=>{
                    return <div className="project" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>

                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        
                        </div>
                }
                 ) }
            
        </div>
    )
}

export default Menu;
