import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Image, Container, Row, Col, Button ,  FormControl, Navbar, Nav, Form} from 'react-bootstrap'; //All Bootstrap imports
import { NavLink } from 'react-router-dom';
import './NavCv.css'

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TocIcon from '@material-ui/icons/Toc';

import Landing from './Landing.js';
import FooterCv from './FooterCv.js';
import Contact from './Contact.js';

export const NavCv = props => {
  const [firstLanding,setFirstLanding] = useState(true);

  const handleFirst = (data) =>{
    setFirstLanding(false);

  }

  let first;

  if(firstLanding ){
    first=<Landing></Landing>
  }
    return (
      
      <Router>
        <Container fluid className="no-gutters">
          <Row className="rowHeader py-4">
            <Col lg="12" className="d-flex justify-content-center align-items-center">
              <Navbar  expand="lg" className="navbarCv">
                <Navbar.Toggle aria-controls="nav-collapse" />
                <Navbar.Collapse id="nav-collapse">
                  <div className="navbarCv__items">
                      <ul>
                        <li><NavLink  to="/Landing" onClick={handleFirst} className="navLi"><HomeSharpIcon></HomeSharpIcon>Accueil</NavLink></li>
                        <li><NavLink  to="/Contact" onClick={handleFirst} className="navLi"><DraftsSharpIcon></DraftsSharpIcon>Contact</NavLink></li>
                        <li><NavLink  to="/" className="navLi"><FacebookIcon></FacebookIcon>Suivez-moi !</NavLink></li>
                      </ul>
                  </div>
                </Navbar.Collapse>
            </Navbar>

            </Col>
          </Row>
          

        </Container>
          

        <Switch>
            <Route exact path="/Landing">
              <Landing></Landing>
            </Route>
            <Route exact path="/Contact">
              <Contact></Contact>
            </Route>
        </Switch>
        {first}
        <FooterCv></FooterCv>

      </Router>
   
    )
}

export default NavCv;
