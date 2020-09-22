import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import Profile from './Profile.js';
import Caption from './Caption.js';
import Header from './Header.js';
import Content from './Content.js';
import Video from './Video.js';

import './Landing.css';

function Landing() {
    return (
        <div>
            <Container fluid className="cvContainer">
                <Row className="my-5">
                    <Col lg="8" className="cvRight">
                        <Header></Header>
                        <Content></Content> 
                        
                    </Col>
                    <Col lg="4" className="cvLeft">
                        <Profile></Profile>
                        <Caption></Caption>
                    </Col>

                </Row>  

            </Container>
            
            
        </div>
    )
}

export default Landing;
