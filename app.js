const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Aplicación de gitActions!' });
});

app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;