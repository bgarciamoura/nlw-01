import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host : 'ecoleta-database',
        user : 'root',
        password : 'admin123',
        database : 'ecoleta'
    }
});

export default connection;