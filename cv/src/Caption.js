import React from "react";
import "./Caption.css";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button} from 'react-bootstrap';


function Caption(){
    return (
    <div className="captionContainer">
        <div>
            <PersonIcon className="personIcon"></PersonIcon>
            <h1>A propos de moi ... </h1>

            <p className="pCaption">Je m'appelle David Wang, j'ai 20 ans et j'habite à Saint-Denis. 
            Collaboration, détermination, organisation et sérieux sont mes principaux atouts.</p>

            <div className="socialCaption">
                <FacebookIcon className="socialIcon" fontSize="large"></FacebookIcon>
                <InstagramIcon className="socialIcon" fontSize="large"></InstagramIcon>
                <LinkedInIcon className="socialIcon" fontSize="large"></LinkedInIcon>
                <GitHubIcon className="socialIcon" fontSize="large"></GitHubIcon>
                <TwitterIcon className="socialIcon" fontSize="large"></TwitterIcon>
            </div>


        </div>
        
        
    </div>);
}

export default Caption; 