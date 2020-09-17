import React from "react";
import "./Profile.css";
import photoProfile from "./photo_david_wang.jpg";

function Profile(){
    return (
    <div className="profileContainer">
        <img src={photoProfile} alt="photoProfile"></img>
        <h1>WANG DAVID</h1>
        <h3>Etudiant en école d'ingénieur</h3>
    </div>);
}

export default Profile;