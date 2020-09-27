import React, { useState, useEffect } from 'react'
import { Image, Container, Row, Col} from 'react-bootstrap'; //All Bootstrap imports
import './Content.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
            <p className="dateRow">Ecole d'ingénieur Ecole Centrale d'Electronique ECE Paris<span className="date">2017-présent</span></p>
            <p className="dateRow">Bac S Lycée Catherine Labouré<span className="date">2015-2017</span></p>
        </Container>
    );
}

const ExpPro = props => {
    return (
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
            <p className="dateRow">Conseiller clientèle - Furla Galeries Lafayette Haussmann<span className="date">12/2019-02/2020</span></p>
            <p className="dateRow">Développeur junior - EventAdvice<span className="date">01/2019-08/2020</span></p>
            <p className="dateRow">Conseiller en vente - Golden Miss<span className="date">07/2019-09/2019</span></p>
        </Container>
    );

}

const compet1 = [ 'C/C++', 'JAVA', 'Python', 'AndroisStudio', 'Arduino'];

const compet2 = ['Git', 'Office', 'Matlab', 'Sketch'];

const Competences = props => {

    return (
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
            <div className="divCompet">
                <ul className="rowCompet1">
                {compet1.map(maCompet => {
                    return <li>{maCompet}</li>
                })}
            </ul>
            <ul className="rowCompet2">
                {compet2.map (maCompet => {
                    return <li>{maCompet}</li>
                })}
            </ul>

            </div>
            
        </Container>

    );
}

const Accomplissements = props => {

    return (
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
            <ul>
                <li>Application mobile Soap sous Android OS</li>
                <li>Concours de danse (K-POP) 2019</li>
            </ul>
        </Container>

    );

}

const Langues = props => {

    return (
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
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
    return (
        <Container className="oneCat">
            <h1 className="cvCat"><RemoveIcon className="pointIcon" ></RemoveIcon>{props.title}</h1>
            <ul>
                <span>Dessin - Design - Architecture - Programmation - Informatique - Voyage - Montage vidéo - Web Design</span>
            </ul>
        </Container>

    );
}

const Landing = () => {
    return (
        <Container className="allCat">
            <Education title="Education"></Education>
            <ExpPro title="Expériences professionnelles"></ExpPro>
            <Competences title="Compétences"></Competences>
            <Accomplissements title="Accomplissements"></Accomplissements>
            <Langues title="Langues"></Langues>
            <Centre title="Centre d'intêrets"></Centre>
        </Container>
    );
}

const ListRow = ({ Icon, title, link }) => {

    const isActive = (path, match, location) => !!(match || path === location.pathname);
    return (

        <Container>
            <Row>
                <Col lg="12">
                    <ListItem className="itemText">
                        <ListItemText>
                            <NavLink className="itemLink" activeClassName="activeLink" to={link} isActive={isActive.bind(this, link)} >
                                <Icon className="listRowIcon" ></Icon>
                                <p className="itemTitle">{title}</p>
                            </NavLink>
                        </ListItemText>
                    </ListItem>
                </Col>
            </Row>
        </Container>
        

    );
}


function Content() {

    useEffect(() => {
        AOS.init({ duration: 1200 });
        AOS.refresh();
    }, []);

    return (

        <Container className="contentContainer">
            <h1 className="cvWelcome">BIENVENUE SUR MON CV</h1>
            <hr></hr>
            <Row className="contentDiv">
                <Router >
                    <Col lg="3" className="d-none d-md-block">
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
                    </Col>

                    <Col lg="9" className="contentRight">
                        <Route exact path="/"><Landing></Landing></Route>
                        <Route exact path="/Education"><Education title="Education"></Education></Route>
                        <Route exact path="/ExpPro"><ExpPro title="Expériences professionnelles"></ExpPro></Route>
                        <Route exact path="/Competences"><Competences title="Compétences"></Competences></Route>
                        <Route exact path="/Accomplissements"><Accomplissements title="Accomplissements"></Accomplissements></Route>
                        <Route exact path="/Langues"><Langues title="Langues"></Langues></Route>
                        <Route exact path="/Centre"><Centre title="Centre d'interêt"></Centre></Route>
                    </Col>
                </Router>
            </Row>
        </Container>

    );
}

export default Content;