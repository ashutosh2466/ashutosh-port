import React from 'react';
import Categories from '../Components/Categories';
import Menu from '../Components/Menu';
import Title from '../Components/Title';
import projects from '../Components/Allpros';
import { useState } from 'react';

const allCategories = ['All', ...new Set(projects.map(item => item.category))];

function Projectspage() {
    const [categories, setCategories] = useState(allCategories);
    const [menu, setMenu] = useState(projects);

    const filter = (category) =>{
        if(category === 'All'){
            setMenu(projects)
            return;
        }
        const filteredData  = projects.filter((item)=>{
            return item.category === category;
        })
        setMenu(filteredData);
    }

    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
            <div className="project-data">
                <Categories filter={filter} categories={categories} />
                <Menu menu={menu} />
            </div>
        </div>
    )
}

export default Projectspage;
