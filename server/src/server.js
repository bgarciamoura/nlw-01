const express = require('express');


const app = express();

const PORT = 3333;
const HOST = '0.0.0.0';


app.get('/', (req, res) => {
    res.send('HOME');
})

app.get('/users', () => {
    console.log('Listagem de usuários');
})

app.listen(PORT, HOST);

console.log('[SERVER ONLINE]');
console.log(`[SERVER LISTENING AT PORT: ${PORT}]`);