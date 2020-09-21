import React from 'react'
import './FooterCv.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function FooterCv() {
    return (
      <header className="footerCv">
      <nav className="footerCv__nav">

        <div className="footerSpace"></div>
        <div className="footerCv__items">
          <span>&copy; 2020 Copyright</span>
        </div>
      </nav>
    </header>
    )
}

export default FooterCv;
