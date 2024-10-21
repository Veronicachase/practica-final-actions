const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

// Ruta básica
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Página servicio_uno!' });
});

// Ruta de ejemplo para pruebas
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;