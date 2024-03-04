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
        description: req.body.description,
    };

    console.assert(jobDetails.company_id, 'company_id not provided.');
    console.assert(jobDetails.title, 'title not provided.');
    console.assert(jobDetails.type, 'type not provided.');
    console.assert(jobDetails.industry, 'industry not provided.');
    console.assert(jobDetails.location, 'location not provided.');
    console.assert(jobDetails.experience, 'experience not provided.');
    console.assert(jobDetails.skills, 'skills not provided.');
    console.assert(jobDetails.salary, 'salary not provided.');
    console.assert(jobDetails.deadline, 'deadline not provided.');
    console.assert(jobDetails.description, 'description not provided.');

    const company = await companies.findByPk(jobDetails.company_id);
    if (!company) {
        logger.error(`company doesn't exist.`);
        return res.status(statusCodes.BAD_REQUEST).send(`company doesn't exist`);
    }

    const job = await jobs.create(jobDetails);
    logger.info('job created successfully.', job.toJSON());

    return res.status(statusCodes.OK).send({ id: job.id });
};

exports.get = async (req, res) => {
    logger.info('job get request recieved.');

    const jobId = req.body.jobId;
    const userId = req.body.userId;
    const companyId = req.body.companyId;

    console.assert(jobId, 'jobId not provided.');

    const job = await jobs.findOne({ where: { id: jobId } });
    if (!job) {
        logger.info(`job by for id '${jobId}' not found.`);
        return res.status(statusCodes.BAD_REQUEST).send({ message: 'job not found.' });
    }

    let result = job.toJSON();

    if (userId) {
        const has = await job.hasUser(userId);
        result['applied'] = has;

        logger.info('added user relation info.');
    }
    logger.info('job details sent back.');
    return res.status(statusCodes.OK).send(result);
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

exports.apply = async (req, res) => {
    try {
        logger.info('user job apply request recieved.');

        const userId = req.body.userId;
        const jobId = req.body.jobId;

        console.assert(userId, 'userId not provided.');
        console.assert(jobId, 'jobId not provided.');

        const job = await jobs.findByPk(jobId);
        if (!job)
        {
            logger.info(`job doesn't exists.`);
            return res.status(statusCodes.BAD_REQUEST).send(`job doesn't exists.`);
        }

        const alreadyApplied = await job.hasUser(userId);
        if (alreadyApplied) {
            logger.info('user has already applied for the job.');
            return res.status(statusCodes.CONTINUE).send('user has already applied for the job.');
        }

        await job.addUser(userId);
        logger.info('user successfully applied for the job.');
        return res.status(statusCodes.OK).send('user successfully applied for the job.');
    } catch (err) {
        logger.error('internal server error.', err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR);
    }
};
