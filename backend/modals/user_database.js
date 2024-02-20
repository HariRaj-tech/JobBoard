// require("dotenv").config();

const pg = require("pg");

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jobportal',
    port: 5432
});

module.exports = pool;
