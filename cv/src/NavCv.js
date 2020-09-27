import React, {useEffect} from 'react'

import { Container, Row, Col,  Navbar} from 'react-bootstrap'; //All Bootstrap imports
import {  useHistory } from 'react-router-dom';
import './NavCv.css'

import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import FacebookIcon from '@material-ui/icons/Facebook';

import AOS from 'aos';
import 'aos/dist/aos.css';



export const NavCv = props => {

  useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
      }, []);

  const history = useHistory();

  let bool = false;

  const redirect = path => {
    history.push(path);
  }


    return (
      
        <Container fluid className="no-gutters">
          <Row className="rowHeader py-4">
            <Col lg="12" className="d-flex justify-content-center align-items-center">
              <Navbar  expand="lg" className="navbarCv">
                <Navbar.Toggle aria-controls="nav-collapse" />
                <Navbar.Collapse id="nav-collapse">
                  <div className="navbarCv__items">
                      <ul>
                        <li><a className={props.title==="accueil" ? "selected" : ""} onClick={() => redirect('./')}><HomeSharpIcon data-aos={props.title==="accueil" ? "fade-right" : ""}></HomeSharpIcon><p >Accueil</p></a></li>
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
