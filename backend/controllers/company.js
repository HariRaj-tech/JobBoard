const statusCodes = require('http-status-codes').StatusCodes;
const logger = require('services/logger');
const companies = require('models/index').companies;
const jobs = require('models/index').jobs;

exports.signup = async (req, res) => {
    try {
        logger.info('company create request recieved.');

        const company_details = {
            name: req.body.name,
            owner_name: req.body.ownerName,
            address: req.body.address,
            email: req.body.email,
            password: req.body.password,
        };

        if (!company_details.email) {
            logger.info('company create request rejected, email not provided.', company_details);
            return res.status(statusCodes.BAD_REQUEST).send('invalid company request.');
        }

        const existing_company = await companies.findOne({
            where: { email: company_details.email },
        });

        if (existing_company) {
            logger.info('a company with this email already exists');
            return res.status(400).send('a company with this email already exists');
        }

        const company = await companies.create(company_details);
        logger.info('company created successfully.', company.toJSON());

        return res.status(statusCodes.OK).send({ status: true, company: company.toJSON() });
    } catch (err) {
        logger.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('internal server error');
    }
};

exports.login = async (req, res) => {
    logger.info('company login request recieved.');

    const company_details = {
        email: req.body.email,
        password: req.body.password,
    };

    if (!company_details.email) {
        logger.info('company login request rejected, email not provided.');
        return res.status(statusCodes.BAD_REQUEST).send('email not provided.');
    }

    if (!company_details.password) {
        logger.info('company login request rejected, password not provided.');
        return res.status(statusCodes.BAD_REQUEST).send('password not provided.');
    }

    const company = await companies.findOne({ where: { email: company_details.email } });
    if (!company) {
        logger.info("company login request rejected, company doesn't exist.");
        return res.status(statusCodes.BAD_REQUEST).send("company doesn't exist.");
    }

    if (company_details.password != company.password) {
        logger.info("company login request rejected, password doesn't match.");
        return res.status(statusCodes.BAD_REQUEST).send("company doesn't exist.");
    }

    logger.info('company login successfull.');
    return res.status(statusCodes.OK).send({ id: company.id });
};

exports.getAllJobs = async (req, res) => {
    logger.info('get all jobs request recieved.');

    const companyId = req.body.companyId;
    if (!companyId) {
        logger.info('company id not provided.');
        return req.status(statusCodes.BAD_REQUEST).send('companyId not provided.');
    }

    const company = await companies.findByPk(companyId);
    if (!company) {
        logger.info(`no company found with key '${companyId}'.`);
        return req.status(statusCodes.BAD_REQUEST).send('company not found.');
    }

    const foundJobs = await jobs.findAll({
        where: {
            company_id: companyId,
        },
    });

    return res.status(statusCodes.OK).send({ jobs: foundJobs });
};
