import React from 'react';
import './App.css';
import Profile from './Profile.js';
import Caption from './Caption.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';


function App() {
  return (
    <div>
      <div className="cvContainer">
      <div className="cvLeft">
        <Profile></Profile>
        <Caption></Caption>
        </div>
      <div className="cvRight">
        <Header></Header>
        <Content></Content> 
        </div>
        
    </div>
    <Footer></Footer>
  </div>
    
  );
}

export default App;
