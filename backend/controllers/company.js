const statusCodes = require('http-status-codes').StatusCodes;
const logger = require('services/logger');
const companies = require('models/index').companies;
const jobs = require('models/index').jobs;

exports.signup = async (req, res) => {
    try {
        logger.info('company create request recieved.');

        const companyDetails = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            owner_name: req.body.ownerName,
            contact_number: req.body.contactNumber,
            contact_email: req.body.contactEmail,
            about: req.body.about,
        };

        if (!companyDetails.email) {
            logger.info('company create request rejected, email not provided.', companyDetails);
            return res.status(statusCodes.BAD_REQUEST).send('invalid company request.');
        }

        const existing_company = await companies.findOne({
            where: { email: companyDetails.email },
        });

        if (existing_company) {
            logger.info('a company with this email already exists');
            return res.status(400).send('a company with this email already exists');
        }

        const company = await companies.create(companyDetails);
        logger.info('company created successfully.', company.toJSON());

        return res.status(statusCodes.OK).send(company.id);
    } catch (err) {
        logger.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('internal server error');
    }
};

exports.login = async (req, res) => {
    logger.info('company login request recieved.');

    const companyDetails = {
        email: req.body.email,
        password: req.body.password,
    };

    if (!companyDetails.email) {
        logger.info('company login request rejected, email not provided.');
        return res.status(statusCodes.BAD_REQUEST).send('email not provided.');
    }

    if (!companyDetails.password) {
        logger.info('company login request rejected, password not provided.');
        return res.status(statusCodes.BAD_REQUEST).send('password not provided.');
    }

    const company = await companies.findOne({ where: { email: companyDetails.email } });
    if (!company) {
        logger.info("company login request rejected, company doesn't exist.");
        return res.status(statusCodes.BAD_REQUEST).send("company doesn't exist.");
    }

    if (companyDetails.password != company.password) {
        logger.info("company login request rejected, password doesn't match.");
        return res.status(statusCodes.BAD_REQUEST).send("password doesn't match");
    }

    logger.info('company login successfull.');
    return res.status(statusCodes.OK).send({ id: company.id });
};

exports.get = async (req, res) => {
    try {
        logger.info('company get request recieved.');

        const companyId = req.params.id;
        console.assert(companyId, 'companyId not provided.');

        const company = await companies.findByPk(companyId);
        if (!company) {
            logger.info('company not found.');
            return res.status(statusCodes.BAD_REQUEST).send('company not found.');
        }

        logger.info('company details sent.');
        return res.status(statusCodes.OK).send(company.toJSON());
    } catch (error) {
        logger.info('internal server error.', error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};

exports.getJobs = async (req, res) => {
    logger.info('company get jobs request recieved.');

    const companyId = req.params.id;
    let limit = 50;

    if (req.query.limit) {
        limit = req.query.limit;
        logger.info(`limit set to '${limit}'`);
    }

    if (!companyId) {
        logger.info('company id not provided.');
        return res.status(statusCodes.BAD_REQUEST).send('companyId not provided.');
    }

    const company = await companies.findByPk(companyId);
    if (!company) {
        logger.error(`no company found with key '${companyId}'.`);
        return req.status(statusCodes.BAD_REQUEST).send('company not found.');
    }

    const foundJobs = await jobs.findAll({
        where: {
            company_id: companyId,
        },
        limit: limit,
        subQuery: false,
    });

    logger.info('company posted jobs returned.');
    return res.status(statusCodes.OK).send({ jobs: foundJobs });
};
