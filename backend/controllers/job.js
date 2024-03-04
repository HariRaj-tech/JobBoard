const statusCodes = require('http-status-codes').StatusCodes;
const logger = require('services/logger');
const companies = require('models/index').companies;
const jobs = require('models/index').jobs;

exports.post = async (req, res) => {
    logger.info('job create request recieved.');

    const jobDetails = {
        company_id: req.body.companyId,
        title: req.body.title,
        type: req.body.type,
        industry: req.body.industry,
        location: req.body.location,
        experience: req.body.experience,
        skills: req.body.skills,
        salary: req.body.salary,
        deadline: req.body.deadline,
        about: req.body.about,
    };

    console.assert(jobDetails.company_id, 'company_id not provided.');
    console.assert(jobDetails.title, 'title not provided.');
    console.assert(jobDetails.type, 'type not provided.');
    console.assert(jobDetails.level, 'level not provided.');
    console.assert(jobDetails.industry, 'industry not provided.');
    console.assert(jobDetails.location, 'location not provided.');
    console.assert(jobDetails.experience, 'experience not provided.');
    console.assert(jobDetails.skills, 'skills not provided.');
    console.assert(jobDetails.salary, 'salary not provided.');
    console.assert(jobDetails.deadline, 'deadline not provided.');
    console.assert(jobDetails.about, 'about not provided.');

    const company = await companies.findByPk(jobDetails.company_id);
    if (!company) {
        logger.error(`company doesn't exist.`);
        return res.status(statusCodes.BAD_REQUEST).send(`company doesn't exist`);
    }

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

exports.getJobs = async (req, res) => {
    try {
        logger.info('job get all request recieved.');

        const Jobs = await jobs.findAll({ include: companies });
        logger.info('all jobs returned.');
        res.status(200).json(Jobs);
    } catch (err) {
        logger.error('internal server error.', err);
        res.status(500).send('internal server error');
    }
};
