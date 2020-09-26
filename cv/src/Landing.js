import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import Profile from './Profile.js';
import Caption from './Caption.js';
import Header from './Header.js';
import Content from './Content.js';
import Video from './Video.js';
import NavCv from './NavCv.js';
import FooterCv from './FooterCv.js';

import './Landing.css';

function Landing() {
    return (
        <div>
            <NavCv title="accueil"></NavCv>
            <Container className="cvContainer">
                <Row className="my-5">
                    <Col lg="8">
                        <Header></Header>
                        <Content></Content> 
                    </Col>
                    <Col lg="4">
                        <Profile></Profile>
                        <Caption></Caption>
                        <Video></Video>
                    </Col>
                </Row>  
            </Container>
            <FooterCv></FooterCv>
        </div>
    )
}

export default Landing;
