import React from 'react'
import './FooterCv.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function FooterCv() {
    return (
      <div>
        <Container fluid className="text-center d-flex justify-content-around items-align-center footerCv">
        <Row className="mt-5 mb-5 w-100 align-items-center d-flex justify-content-center">
          <Col md="12" className="text-center d-flex justify-content-around items-align-center">
            <p>N'hésitez pas à me contacter pour plus d'informations ! </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="copyRightLanding justify-content-center align-items-center">
          <span className="copyRightLandingText">&copy; Copyright 2020</span>
        </Row>
      </Container>
      </div>
      
    )
}

export default FooterCv;
