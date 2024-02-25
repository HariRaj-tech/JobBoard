const statusCodes = require('http-status-codes').StatusCodes;
const users = require('models/user');
const logger = require('services/logger');

exports.signup = async (req, res) => {
    try {
        logger.info('user create request recieved.');

        const user_details = {
            first_name: req.body.name,
            lasst_name: '',
            email: req.body.email,
            password: req.body.password,
        };

        if (!user_details.email) {
            return res.status(statusCodes.BAD_REQUEST).send('invalid user request.');
        }

        const existing_user = await users.findOne({ where: { email: user_details.email } });
        if (existing_user) {
            logger.info('request rejected becuase a user with this email already exists.');
            return res.status(400).send('this email already exists');
        }

        const user = await users.create(user_details);
        logger.info('user created successfully.', user.toJSON());

        return res.status(200).send({ status: true, user: user.toJSON() });
    } catch (err) {
        logger.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('internal server error');
    }
};

exports.login = async (req, res) => {
    logger.info('user login request recieved.');

    const user_details = {
        email: req.body.email,
        password: req.body.password,
    };

    if (!user_details.email || !user_details.password) {
        logger.info('invalid request.', user_details);

        return res
            .status(statusCodes.BAD_REQUEST)
            .send({ status: false, message: 'email and password are required.' });
    }

    const user = await users.findOne({ where: { email: user_details.email } });
    if (!user) {
        logger.info(`user doesn't exists`);
        return res
            .status(statusCodes.BAD_REQUEST)
            .send({ status: false, message: "user doesn't exist." });
    }

    if (user_details.password != user.password) {
        logger.info(`user password doesn't match.`);
        return res
            .status(statusCodes.BAD_REQUEST)
            .send({ status: false, message: "user password doesn't match" });
    }

    logger.info('user login succesfull.');
    return res.status(statusCodes.OK).send({ status: true, user: user.toJSON() });
};
