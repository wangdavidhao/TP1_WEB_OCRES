import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'; //All Bootstrap imports
import './Content.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Education = props => {
    return (
        <Container>
            <h1>{props.title}</h1>
            <p>Ecole d'ingénieur ECE Paris</p>
            <p>Bac S Lycée Catherine Labouré</p>
        </Container>
    );
}

const ExpPro = props => {
    return (
        <Container>
            <h1>{props.title}</h1>
            <p>Conseiller clientèle - Galeries Lafayette Haussmann</p>
            <p>Développeur junior - EventAdvice</p>
        </Container>
    );

}

const Competences = props => {

    return(
        <Container>
            <h1>{props.title}</h1>
            <ul>
                <li>C/C++</li>
                <li>JAVA</li>
                <li>Python</li>
                <li>AndroidStudio</li>
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
        </Container>
    );
}

function Content() {
    return (

        <div className="contentContainer">
            
                <h1>Bienvenue sur mon CV, je suis David WANG</h1>
                <hr></hr>
                <div className="contentDiv">
                    <Router > 
                        <div className="contentLeft">
                                <Link to="/">Accueil</Link>
                                <hr></hr>
                                <Link to="/Education">Education</Link>
                                <hr></hr>
                                <Link to="/ExpPro">Expériences professionnelles</Link>
                                <hr></hr>
                                <Link to="/Competences">Compétences</Link>
                                <hr></hr>
                                <Link to="/Accomplissements">Accomplissements</Link>
                                <hr></hr>
                                <Link to="/Centres">Centre d'intêrets</Link>
                        </div>    
                        
                        <div className="contentRight">
                            <Route exact path="/"><Landing></Landing></Route>
                            <Route exact path="/Education"><Education title="Education"></Education></Route>
                            <Route exact path="/ExpPro"><ExpPro title="Expériences professionnelles"></ExpPro></Route>
                            <Route exact path="/Competences"><Competences title="Compétences"></Competences></Route>
                        </div> 
                    </Router>
                </div>   
        </div>

    );
}

export default Content;