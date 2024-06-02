import React from 'react';
import pic from './img/default-mountain.jpg';
import './Search.css';

// Página Search, accesible desde el perfil del usuario
function Search() {
    return (
        <div className="search-page">
            <p><a href="/profile">Back</a></p>
            <section className='input-search'>
                <label>Search<br />
                    <input type="text" placeholder='Search for a friend'/>
                </label>
            </section>
            <p>Suggestions</p> 
            <section className='suggestions'>
                    <img src={pic} alt="User suggested" />
                    <img src={pic} alt="User suggested" />
                    <img src={pic} alt="User suggested" />
                    <img src={pic} alt="User suggested" />
                    <img src={pic} alt="User suggested" />
                    <img src={pic} alt="User suggested" />                
            </section>
            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a>Messages</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </div>
        
    );
};

export default Search;