const pool = require('../models/job');
const logger = require('../logger');

exports.post = (req, res) => {
    logger.info('job create request recieved.');

    const jobDetails = {
        industry: req.body.industry,
        designation: req.body.designation,
        experience: req.body.experience,
        salary: req.body.salary,
        location: req.body.location,
        deadline: req.body.deadline,
        skills: req.body.skills,
    };

    // todo: add job into database, and return the unique id

    logger.info('job created successfully.');
};

exports.getById = (req, res) => {
    const jobId = req.body.jobId;

    logger.info('job get request recieved.');

    pool.query('SELECT FROM DATB');
    logger.info('job created successfully.');
};
