import React from 'react';
import './Footer.css';
import { Container, Row, Col, Image } from 'react-bootstrap';


export const Footer = props => {

  return (
    <div className="cvFooter font-small">
      <Container fluid className="text-center d-flex justify-content-around items-align-center">
        <Row className="mt-5 mb-5 w-100 align-items-center d-flex justify-content-center">
          <Col md="1">
          </Col>
          <Col md="2 mt-2">
            <h6>Contact</h6>
            <a href="mailto: contact@trevor-app.fr">contact@trevor-app.fr</a>
          </Col>

        </Row>
      </Container>
      <Container fluid>
        <Row className="copyRightLanding justify-content-center align-items-center">
          <span className="copyRightLandingText">&copy; Copyright 2020 Trevor SAS</span>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

