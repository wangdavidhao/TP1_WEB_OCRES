import React, {useEffect} from 'react'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import photoProfile from "./photo_david_wang.JPG";
import Avatar from '@material-ui/core/Avatar';


import './Header.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {

    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
      }, []);

    return (
        <div className="headerContainer">
            <Row className="headerInfos " data-aos="zoom-in-right">
                <Col lg="7" className="landingInfos" >
                    <h1>Bonjour, je suis David Wang</h1>
                    <div className="d-flex justify-content-center">
                        <Avatar  alt="David Wang" src={photoProfile}></Avatar>
                    </div>
                </Col>
                <Col lg="5">
                    <p><MailIcon className="mailIcon"></MailIcon>wangdavid1999@gmail.com</p>
                    <p><PhoneIphoneIcon className="phoneIcon"></PhoneIphoneIcon>0769881269</p>
                    <p><LocationOnIcon className="locaIcon"></LocationOnIcon>Paris, France</p>
                    <a href="https://www.linkedin.com/in/david-wang-8821b5176/" target="_blank"><LinkedInIcon className="linkedinIcon"></LinkedInIcon>linkedin.com/in/david-wang-8821b5176</a>
                    <a href="https://github.com/wangdavidhao" target="_blank"><GitHubIcon className="gitIcon"></GitHubIcon>github.com/wangdavidhao</a>
                </Col>
            </Row>
            
            
        </div>
    )
}

export default Header;
