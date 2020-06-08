import express from 'express';


const app = express();

app.use(express.json());

const PORT = 3333;
const HOST = '0.0.0.0';

// Rota: É um endereço completo da requisição. Ex.: http://localhost:3333/users
// Recurso: É qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: São parâmetrso que vem na própria rota da aplicação que identificam um recurso. São separados da rota com uma '/'
// Query Param: São parâmetros geralmente opcionais que vem na própria rota da aplicação para filtros, paginação, etc. São separados da rota com uma '?'
// Request Body: É corpo da requisição são parâmentros para criação/atualização de informações;

const users = [
    'Bruno',
    'Alex',
    'Thiago',
    'André'
];

app.get('/', (request, response) => {
    return response.send('HOME');
});

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email
    };
    
    return response.json(user);
});

app.listen(PORT, HOST);

console.log('[SERVER ONLINE]');
console.log('[SERVER USING TYPESCRIPT]');
console.log(`[SERVER LISTENING AT PORT: ${PORT}]`);