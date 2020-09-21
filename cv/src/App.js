import React from 'react';
import './App.css';
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import Profile from './Profile.js';
import Caption from './Caption.js';
import Header from './Header.js';
import Content from './Content.js';
import FooterCv from './FooterCv.js';
import NavCv from './NavCv.js';
import Video from './Video.js';



function App() {
  return (
    <div>
      <NavCv></NavCv>
      <Container className="cvContainer">
          
          <div className="cvRight">
            <Header></Header>
            <Content></Content> 
            
          </div>
          <div className="cvLeft">
            <Profile></Profile>
            <Caption></Caption>
            <Video></Video>
          </div>

      </Container>
    <FooterCv></FooterCv>
  </div>
    
  );
}

export default App;
