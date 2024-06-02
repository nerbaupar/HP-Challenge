const sqlite3 = require('sqlite3').verbose(); // Importa el módulo sqlite3 y activa el modo detallado

// Crea una nueva instancia de la base de datos SQLite y la guarda en la variable 'db'
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        // Registra un error si la conexión a la base de datos falla
        console.error('Error opening the database:', err.message);
    } else {
        // Registra un mensaje de éxito si la conexión a la base de datos es exitosa
        console.log('Successful connection to the SQLite database');
    }
});

// Asegura que la tabla exista
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS credentials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL)`, (err) => {
        if (err) {
            console.error('Error creating user table:', err.message);
        } else {
            console.log('User table created or already exists.');
        }
    });
});

// Exporta la base de datos
module.exports = db;

