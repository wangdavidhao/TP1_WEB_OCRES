import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Image, Container, Row, Col, Button ,  FormControl, Navbar, Nav, Form} from 'react-bootstrap'; //All Bootstrap imports
import { NavLink, useHistory } from 'react-router-dom';
import './NavCv.css'

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TocIcon from '@material-ui/icons/Toc';

import Landing from './Landing.js';
import FooterCv from './FooterCv.js';
import Contact from './Contact.js';

export const NavCv = props => {

  const isActive = (path, match, location) => !!(match || path === location.pathname);
  const history = useHistory();

  const redirect = path => history.push(path);

  console.log(props.title);


    return (
      
        <Container fluid className="no-gutters">
          <Row className="rowHeader py-4">
            <Col lg="12" className="d-flex justify-content-center align-items-center">
              <Navbar  expand="lg" className="navbarCv">
                <Navbar.Toggle aria-controls="nav-collapse" />
                <Navbar.Collapse id="nav-collapse">
                  <div className="navbarCv__items">
                      <ul>
                        <li><a className={props.title==="accueil" ? "selected" : ""} onClick={() => redirect('./')}><HomeSharpIcon></HomeSharpIcon><p >Accueil</p></a></li>
                        <li><a className={props.title==="contact" ? "selected" : ""} onClick={() => redirect('./Contact')}><DraftsSharpIcon></DraftsSharpIcon><p >Contact</p></a></li>
                        <li><a><FacebookIcon></FacebookIcon><p>Suivez-moi !</p></a></li>
                      </ul>
                  </div>
                </Navbar.Collapse>
            </Navbar>

            </Col>
          </Row>
        </Container>
    )
}

export default NavCv;
