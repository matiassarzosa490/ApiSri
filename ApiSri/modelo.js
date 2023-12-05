// modelo.js

const axios = require('axios');

async function consultarContribuyente(numeroRuc) {
    try {
        const response = await axios.get(`https://srienlinea.sri.gob.ec/sri-catastro-sujeto-servicio-internet/rest/ConsolidadoContribuyente/existePorNumeroRuc?numeroRuc=${numeroRuc}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error en la solicitud al servicio externo');
    }
}

module.exports = {
    consultarContribuyente,
};
