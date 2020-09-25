import React from "react";
import "./Profile.css";
import photoProfile from "./photo_david_wang.JPG";
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports

function Profile(){
    return (
        <Container className="d-none d-md-block">
            <Row className="profileContainer">
                <Col lg="12">
                    <img src={photoProfile} alt="photoProfile" className="img-fluid"></img>
                    <h1 className="text-center">WANG DAVID</h1>
                    <h3 className="text-center">Étudiant en 4ème année d'école
                    d'ingénieur à l'ECE Paris</h3>

                </Col>
        
    </Row>

        </Container>
    );
}

export default Profile;