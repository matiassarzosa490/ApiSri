// index.js

const express = require('express');
const cors = require('cors');
const { consultarContribuyente } = require('./modelo');

const app = express();
const port = 3000;

// Configura CORS
app.use(cors());

app.get('/consulta-contribuyente', async (req, res) => {
    const { numeroRuc } = req.query;

    try {
        const data = await consultarContribuyente(numeroRuc);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
