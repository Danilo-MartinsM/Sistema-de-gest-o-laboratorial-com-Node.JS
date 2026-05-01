const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ mensagem: "Olá, Clínica! Nosso sistema LIS está vivo!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando e escutando na porta 3000!");
});