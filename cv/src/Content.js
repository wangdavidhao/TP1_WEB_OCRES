import React, {useState,useEffect} from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import './Content.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ReceiptIcon from '@material-ui/icons/Receipt';
import StyleIcon from '@material-ui/icons/Style';
import RemoveIcon from '@material-ui/icons/Remove';

import { NavLink } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = props => {
    return (
        <Container>
            <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
            <p className="schoolRow">Ecole d'ingénieur Ecole Centrale d'Electronique ECE Paris<span className="dateEducation">2017-présent</span></p>
            <p className="schoolRow">Bac S Lycée Catherine Labouré<span className="dateEducation">2015-2017</span></p>
        </Container>
    );
}

const ExpPro = props => {
    return (
        <Container>
            <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
            <p className="expRow">Conseiller clientèle - Furla Galeries Lafayette Haussmann<span className="dateExp">12/2019-02/2020</span></p>
            <p className="expRow">Développeur junior - EventAdvice<span className="dateExp">01/2019-08/2020</span></p>
            <p className="expRow">Conseiller en vente - Golden Miss<span className="dateExp">07/2019-09/2019</span></p>
        </Container>
    );

}

const Competences = props => {

    return(
        <Container>
            <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
            <ul>
                <li>C/C++</li>
                <li>JAVA</li>
                <li>Python</li>
                <li>AndroidStudio</li>
                <li>Arduino</li>
            </ul>
        </Container>

    );
}

const Accomplissements = props => {

    return(
        <Container>
            <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
            <ul>
                <li>Application mobile Soap</li>
                <li>Concours de danse (K-POP) 2019</li>
            </ul>
        </Container>

    );

}

const Langues = props => {

    return(
        <Container>
                <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
                <ul>
                    <li className="liLv">Français<span className="lvLevel">Bilingue</span></li>
                    <li className="liLv" >Anglais<span className="lvLevel">Courant C1</span></li>
                    <li className="liLv">Chinois<span className="lvLevel">Bilingue</span></li>
                    <li className="liLv">Espagnol<span className="lvLevel">Intermédiaire B2</span></li>
                </ul>     
        </Container>

    );

}

const Centre = props => {
    return(
        <Container>
            <h1 className="cvCat"><RemoveIcon className="pointIcon" fontSize="large"></RemoveIcon>{props.title}</h1>
            <ul>
                <span>Dessin - Design - Architecture - Programmation - Informatique - Voyage - Montage vidéo - Web Design</span>
            </ul>
        </Container>

    );
}

const Landing = () => {
    return (
        <Container>
            <Education title="Education"></Education>
            <ExpPro title="Expériences professionnelles"></ExpPro>
            <Competences title="Compétences"></Competences>
            <Accomplissements title="Accomplissements"></Accomplissements>
            <Langues title="Langues"></Langues>
            <Centre title="Centre d'intêrets"></Centre>
        </Container>
    );
}

const ListRow = ({Icon, title, link}) => {

    const isActive = (path, match, location) => !!(match || path === location.pathname);


        return(
            <div>   
                <ListItem className="itemText">
                    <ListItemText><NavLink  activeClassName="activeLink" className="itemLink" to={link} isActive={isActive.bind(this,link)} >
                        <Icon className="listRowIcon" fontSize="large"></Icon><p>{title}</p> </NavLink></ListItemText>
                </ListItem>
            </div>
            
        );
 

}


function Content() {

    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
      }, []);

    return (

        <div className="contentContainer">
                <h1 className="cvWelcome">BIENVENUE SUR MON CV</h1>
                <hr></hr>
                <div className="contentDiv">
                    <Router > 
                        <div className="contentLeft">
                        <List disablePadding dense>
                            <ListRow Icon={HomeIcon} link="/" title="Accueil"></ListRow>
                            <hr></hr>
                            <ListRow Icon={SchoolIcon} link="/Education" title="Education"  ></ListRow>
                            <ListRow Icon={WorkIcon} link="/ExpPro" title="Expériences professionnelles"></ListRow>
                            <ListRow Icon={StyleIcon} link="/Competences" title="Compétences"></ListRow>
                            <ListRow Icon={LanguageIcon} link="/Langues" title="Langues"></ListRow>
                            <ListRow Icon={ReceiptIcon} link="/Accomplissements" title="Accomplissements"></ListRow>
                            <ListRow Icon={SportsEsportsIcon} link="/Centre" title="Centre d'interêt"></ListRow>
                        </List>
                                
                        </div>    

                        <hr className="hrDiv"></hr>
                        
                        <div className="contentRight">
                            <Route exact path="/"><Landing></Landing></Route>
                            <Route exact path="/Education"><Education title="Education"></Education></Route>
                            <Route exact path="/ExpPro"><ExpPro title="Expériences professionnelles"></ExpPro></Route>
                            <Route exact path="/Competences"><Competences title="Compétences"></Competences></Route>
                            <Route exact path="/Accomplissements"><Accomplissements title="Accomplissements"></Accomplissements></Route>
                            <Route exact path="/Langues"><Langues title="Langues"></Langues></Route>
                            <Route exact path="/Centre"><Centre title="Centre d'interêt"></Centre></Route>
                        </div> 
                    </Router>
                </div>   
        </div>

    );
}

export default Content;