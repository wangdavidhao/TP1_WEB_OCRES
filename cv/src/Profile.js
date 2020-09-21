import React from "react";
import "./Profile.css";
import photoProfile from "./photo_david_wang.JPG";

function Profile(){
    return (
    <div className="profileContainer">
        <img src={photoProfile} alt="photoProfile"></img>
        <h1>WANG DAVID</h1>
        <h3>Étudiant en 4ème année d'école
         d'ingénieur à l'ECE Paris</h3>
    </div>);
}

export default Profile;