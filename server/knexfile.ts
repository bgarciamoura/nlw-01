import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'admin123',
        database : 'ecoleta'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
};

// Para rodar as migrations rodar o comando no cmd dentro da pasta server npx knex migrate:latest --knexfile knexfile.ts migrate:latest