import React from 'react';                              // Importa React
import profilepic from './img/default-profile-pic.jpg'; // Importa la imagen de perfil predeterminada
import './Profile.css';                                 // Importa los estilos CSS para el componente Profile

// Pagina profile, tras el inicio de sesión
function Profile() {
    return (
        <div className="profile-info">
            <img src={profilepic} alt="Default" />
            <div className="name">
                <h2>John Doe</h2>
            </div>
            <ul className="user-data">
                <li>Username</li>
                <li>Website</li>
                <li>Bio</li>
            </ul>
            <ul className="navbar">
                <li><a>Friends</a></li>
                <li><a href="/requests">Requests</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </div>
    );
};

export default Profile;