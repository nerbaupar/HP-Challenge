import React from 'react';
import profilepic from './img/default-profile-pic.jpg';
import './Requests.css';

// Pagina Requests, accesible desde el perfil del usuario
function Requests() {
    return (
        <div className="friends">
            <div id="friend-1">
                <img src={profilepic} alt="Default" />
                <div className="name">
                    <h2>María García</h2>
                </div>
                <ul className="accept-decline">
                    <li>Accept Friendship</li>
                    <li>Decline Friendship</li>
                </ul>
            </div>
            <div id="friend-2">
                <img src={profilepic} alt="Default" />
                <div className="name">
                    <h2>José Pérez</h2>
                </div>
                <ul className="accept-decline">
                    <li>Accept Friendship</li>
                    <li>Decline Friendship</li>
                </ul>
            </div>
        </div>
        
    );
};

export default Requests;