const jobs = require('models/job');
const logger = require('services/logger');
const status_codes = require('http-status-codes').StatusCodes;

exports.post = async (req, res) => {
    logger.info('job create request recieved.');

    const job_details = {
        title: 'job-title',
        industry: req.body.industry,
        designation: req.body.designation,
        experience: req.body.experience,
        salary: req.body.salary,
        location: req.body.location,
        deadline: req.body.deadline,
        skills: req.body.skills,
    };

    console.assert(job_details.industry);
    console.assert(job_details.designation);
    console.assert(job_details.experience);
    console.assert(job_details.salary);
    console.assert(job_details.location);
    console.assert(job_details.deadline);
    console.assert(job_details.skills);

    const job = await jobs.create(job_details);
    logger.info('job created successfully.', job.toJSON());

    return res.status(status_codes.OK).send({ job: job.toJSON() });
};

exports.getById = (req, res) => {
    const jobId = req.body.jobId;

    logger.info('job get request recieved.');
};
