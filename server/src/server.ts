import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from "celebrate";

import routes from './routes';

const PORT = 3333;
const HOST = '0.0.0.0';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// SERVIR ARQUIVOS ESTATICOS COMO IMAGENS, ETC...
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(PORT, HOST);

console.log('[SERVER ONLINE]');
console.log('[SERVER USING TYPESCRIPT]');
console.log(`[SERVER LISTENING AT PORT: ${PORT}]`);