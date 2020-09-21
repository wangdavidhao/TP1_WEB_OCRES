import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Button, Image, Row } from 'react-bootstrap';
import './NavCv.css'

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TocIcon from '@material-ui/icons/Toc';

const NavDrawer = () =>{

  const [drawerOpen, setDrawerOpen] = useState(true);

 
  const handleDrawer = () =>{
    setDrawerOpen(!drawerOpen);
  }

  return(
    <nav className="navDrawer">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Suivez-moi !</a></li>
      </ul>
      <FacebookIcon onClick={handleDrawer}></FacebookIcon>
    </nav>
  );
}

export const NavCv = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);

 
  const handleDrawer = () =>{
    setDrawerOpen(!drawerOpen);
  }

  let drawer;

    if(drawerOpen){
      drawer = <NavDrawer></NavDrawer>
    }
    return (
        
      <header className="navbarCv">
        <nav className="navbarCv__nav">
          <div className="navbarBurger">
            <TocIcon className="burgerIcon" onClick={handleDrawer}></TocIcon>
            {drawer}
          </div>
          <div className="navSpace"></div>
          <div className="navbarCv__items">
            <ul>
              <li><a href="/"><HomeSharpIcon></HomeSharpIcon>Accueil</a></li>
              <li><a href="/"><DraftsSharpIcon></DraftsSharpIcon>Contact</a></li>
              <li><a href="/"><FacebookIcon></FacebookIcon>Suivez-moi !</a></li>
            </ul>
          </div>
        </nav>
      </header>

        
    )
}

export default NavCv;
