require('app-module-path').addPath(__dirname);

const express = require('express');
const user_routes = require('routes/user');
const job_routes = require('routes/job');
const company_routes = require('routes/company');
const logger = require('services/logger');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use('/api/user', user_routes);
app.use('/api/company', company_routes);
app.use('/api/job', job_routes);

app.listen(port, () => {
    logger.info(`server listening on port ${port}...`);
});
