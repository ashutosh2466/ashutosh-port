import React from 'react';
import Title from '../Components/Title';
import ImageSec from '../Components/ImageSec';
import Skillsection from '../Components/Skillsection';

function AboutPage() {
    return (
        <div className="ski">
            <Title  title={'About Me'} span={'About Me '}/>
            <ImageSec /> 
            <Title title={'My Skills'} span={'My Skills'} />
           <div className="skillcontainer">
           <Skillsection skill={'HTML'} 
           progress={'70%'} width={'70%'}/>

           <Skillsection skill={'CSS'} progress={'60%'} width={'60%'}/>
           <Skillsection skill={'Javascript'} progress={'60%'} row-attach={'10px'}width={'70%'}/>
           <Skillsection skill={'ReactJs'} progress={'67%'} width={'67%'}/>
           <Skillsection skill={'C'} progress={'70%'} width={'70%'}/>
           <Skillsection skill={'Python'} progress={'60%'} width={'60%'}/>
           </div>
            
       </div>
    )
}

export default AboutPage;
