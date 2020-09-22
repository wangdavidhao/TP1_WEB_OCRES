import React from 'react';
import { Image, Container, Row, Col, Button , Form, FormControl} from 'react-bootstrap'; //All Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
    return (
        <div>
            <Container className="contactContainer py-5">
                <Row className="d-flex justify-content-center">
                    
                <Form className="my-3">
                <h2>Veuillez rensigner ces champs pour me contacter :</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse mail : </Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre mail" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nom : </Form.Label>
                        <Form.Control type="name" placeholder="Nom" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Commentaires : </Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <div className="d-flex justify-content-center ">
                        <Button  type="submit">
                            Envoyer
                        </Button>

                    </div>
                    
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
