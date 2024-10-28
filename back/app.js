const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Página servicio_uno-1!' });
});

app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;