const express = require('express');         // Importa el módulo Express para el servidor web
const bodyParser = require('body-parser');  // Importa el módulo body-parser para procesar los cuerpos de las solicitudes HTTP
const path = require('path');               // Importa el módulo path para manejar rutas de archivos
const db = require('./database');           // Importa el módulo de la base de datos

const app = express();  // Crea una instancia de la aplicación Express

app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON

app.use(express.static(path.join(__dirname, 'public'))); // Middleware para servir archivos estáticos desde la carpeta 'public'

// Función para validar el formato del email
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]{5,10}$/;
    return emailRegex.test(email);
};

// Función para validar el formato de la contraseña
const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,12}$/;
    return passwordRegex.test(password);
};

// Manejo de ruta para la solicitud POST de registro de usuario
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Valida el formato del email
    if (!validateEmail(email)) {
        return res.status(400).json({ message: 'Email must be from 5 to 10 alphanumeric characters.' });
    }

    // Valida el formato de la contraseña
    if (!validatePassword(password)) {
        return res.status(400).json({ message: 'Password must be from 8 to 12 alphanumeric characters.'});
    }

    // Consulta SQL para insertar el nuevo usuario en la base de datos
    const query = `INSERT INTO credentials (email, password) VALUES (?, ?)`;

    // Ejecuta la consulta SQL con los parámetros email y password
    db.run(query, [email, password], function(err) {
        if (err) {
            // Si hay un error al insertar el usuario en la base de datos
            if (err.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ message: 'The user name is already registered.' });
            }
            console.error('Error when registering the user:', err.message);
            return res.status(500).json({ message: 'An error occurred while registering the user.' });
        } else {
            // Si el usuario se registra correctamente, devuelve un mensaje de éxito junto con el ID del usuario insertado
            return res.status(201).json({ message: 'User successfully registered.', userId: this.lastID });
        }
    });
});
// Manejo de ruta para la solicitud POST de inicio de sesión (no implementado)
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Consulta SQL para buscar el usuario en la base de datos
    const query = 'SELECT * FROM credentials WHERE email = ? AND password = ?';

    // Ejecuta la consulta SQL con los parámetros email y password
    db.get(query, [email, password], (err, row) => {
        if (err) {
            console.error('Error when searching for user:', err.message);
            return res.status(500).json({ message: 'Internal server error.' });
        }

        if (!row) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Usuario encontrado, permitir acceso a la página de perfil
        return res.status(200).json({ message: 'Successful login.' });
    });
});

const PORT = process.env.PORT || 3000; // Puerto del servidor
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}'); // Inicia el servidor y registra el mensaje en la consola
});