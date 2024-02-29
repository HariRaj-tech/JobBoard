const jobs = require('models/job');
const logger = require('services/logger');
const statusCodes = require('http-status-codes').StatusCodes;

exports.post = async (req, res) => {
    logger.info('job create request recieved.');

    const jobDetails = {
        title: req.body.title,
        company: req.body.company,
        type: req.body.type,
        level: req.body.level,
        industry: req.body.industry,
        experience: req.body.experience,
        salary: req.body.salary,
        location: req.body.location,
        deadline: req.body.deadline,
        skills: req.body.skills,
        about: req.body.about,
    };

    console.assert(jobDetails.title);
    console.assert(jobDetails.company);
    console.assert(jobDetails.type);
    console.assert(jobDetails.level);
    console.assert(jobDetails.industry);
    console.assert(jobDetails.experience);
    console.assert(jobDetails.salary);
    console.assert(jobDetails.location);
    console.assert(jobDetails.deadline);
    console.assert(jobDetails.skills);

    const job = await jobs.create(jobDetails);
    logger.info('job created successfully.', job.toJSON());

    return res.status(statusCodes.OK).send({ id: job.id });
};

exports.getById = async (req, res) => {
    logger.info('job get request recieved.');
    const jobId = req.body.jobId;

    console.assert(jobId);

    const job = await jobs.findOne({ where: { id: jobId } });
    if (!job) {
        logger.info(`job by for id '${jobId}' not found.`);
        return res.status(statusCodes.BAD_REQUEST).send({ message: 'job not found.' });
    }

    logger.info('job details sent back.');
    return res.status(statusCodes.OK).send(job.toJSON());
};
