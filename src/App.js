import React from 'react';
import './App.scss';
import NavBar from './Components/Navbar';
import HomePage from './pages/home';
import {Switch,Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import Projectspage from './pages/Projectspage';
import Contactpage from './pages/Contactpage';
import { useState} from 'react';



function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }  
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle':''}`}>
      <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      
      <div className="main-content">
        <div className="content">
         <Switch>
           <Route path="/" exact>
             <HomePage />
           </Route>
           <Route path="/about" exact>
             <AboutPage />
           </Route>
           <Route path="/Projects" exact>
             <Projectspage />
           </Route>
           <Route path="/Projects" exact>
             <Projectspage />
           </Route>
           <Route path="/Contact" exact>
             <Contactpage />
           </Route>
         </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
 