const pg = require('pg')

const clients = new pg.Pool({
    user: "backend",
    host: "localhost",
    database: "clients",
    password: "test",
    port: "5432"
});

exports.clients = clients;
