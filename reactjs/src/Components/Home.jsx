import React, { useState } from 'react';    // Importa React y el hook useState
import axios from 'axios';                  // Importa axios para realizar solicitudes HTTP
import './Home.css';                        // Importa estilos CSS para el componente Home
import profile from './img/profile-pic.jpg'; // Importa la imagen de perfil

function Home() {
    // Define dos estados locales: email y password, inicializados como strings vacíos
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar cambios en el campo del email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Función para manejar cambios en el campo de contraseña
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Función para manejar el evento de registro (Sign Up)
    const handleSignUp = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        
        try {
            // Envía una solicitud POST al endpoint '/signup' con los datos de email y password
            const response = await axios.post('/signup', { email, password });
            alert('User successfully registered'); // Muestra una alerta con el mensaje de éxito
        } catch (error) {
            // Si hay un error en la respuesta, muestra un mensaje de error
            if (error.response) {
                alert(`Error: ${error.response.data.message}`);
            } else {
                alert('Error: Could not connect to server');
            }
        }
    };
    // Devuelve el formulario de inicio de sesión y registro
    return (
        <div className='login'>
            <div className='image-pic'>
                <img src={profile} alt="Profile" />
            </div>            
            <form>
                <h1>Sign In</h1>
                <div className='input-box'>
                    <label>Email<br />
                        <input type="text" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                        value={email}
                        onChange={handleEmailChange}
                        required/>
                    </label>
                </div>
                <div className='input-box'>
                    <label>Password<br />
                        <input type="password" 
                        placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                        value={password}
                        onChange={handlePasswordChange}
                        required/>
                    </label>
                </div>
                <div className='sign-in'>
                <button href='/profile'><a href='/profile'>Sign in</a></button>
                </div>
                
                <div className='forgot-password'>
                    <a href="#">Forgot password</a>
                </div>
                <div className='sign-up'>
                   <button type='submit' onClick={handleSignUp}>Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Home;