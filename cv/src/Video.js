import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import video from './voyage.mp4';
import './Video.css';
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports

import AOS from 'aos';
import 'aos/dist/aos.css';

function Video() {

    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return (
        <Container >
            <Row>
                <Col lg="12">
                    <ReactPlayer
                        className='react-player w-100 h-100 py-3 cvPlayer'
                        url={video}
                        controls={true}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Video;
