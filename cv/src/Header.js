import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Header.css';


function Header() {
    return (
        <div className="headerContainer">
            <p><MailIcon className="mailIcon"></MailIcon>wangdavid1999@gmail.com</p>
            <p><PhoneIphoneIcon className="phoneIcon"></PhoneIphoneIcon>0769881269</p>
            <p><LocationOnIcon className="locaIcon"></LocationOnIcon>Paris, France</p>
            <a href="https://www.linkedin.com/in/david-wang-8821b5176/" target="_blank"><LinkedInIcon className="linkedinIcon"></LinkedInIcon>linkedin.com/in/david-wang-8821b5176</a>
            <a href="https://github.com/wangdavidhao" target="_blank"><GitHubIcon className="gitIcon"></GitHubIcon>github.com/wangdavidhao</a>
        </div>
    )
}

export default Header;
