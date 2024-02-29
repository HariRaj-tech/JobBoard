const status_codes = require('http-status-codes').StatusCodes;
const logger = require('services/logger');
const companies = require('models/index').companies;

exports.signup = async (req, res) => {
    try {
        logger.info('company create request recieved.');

        const company_details = {
            name: req.body.companyName,
            owner_name: req.body.ownerName,
            address: req.body.companyAddress,
            email: req.body.companyEmail,
            password: req.body.password,
        };

        if (!company_details.email) {
            logger.info('company create request rejected, email not provided.', company_details);
            return res.status(status_codes.BAD_REQUEST).send('invalid company request.');
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

        return res.status(status_codes.OK).send({ status: true, company: company.toJSON() });
    } catch (err) {
        logger.error(err);
        return res.status(status_codes.INTERNAL_SERVER_ERROR).send('internal server error');
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
        return res.status(status_codes.BAD_REQUEST).send('email not provided.');
    }

    if (!company_details.password) {
        logger.info('company login request rejected, password not provided.');
        return res.status(status_codes.BAD_REQUEST).send('password not provided.');
    }

    const company = await companies.findOne({ where: { email: company_details.email } });
    if (!company) {
        logger.info("company login request rejected, company doesn't exist.");
        return res.status(status_codes.BAD_REQUEST).send("company doesn't exist.");
    }

    if (company_details.password != company.password) {
        logger.info("company login request rejected, password doesn't match.");
        return res.status(status_codes.BAD_REQUEST).send("company doesn't exist.");
    }

    logger.info('company login successfull.');
    return res.status(status_codes.OK).send({ id: company.id }); 
};
