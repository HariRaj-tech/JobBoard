const statusCodes = require('http-status-codes').StatusCodes;
const users = require('models/index').users;
const logger = require('services/logger');

exports.signup = async (req, res) => {
    try {
        logger.info('user create request received.');

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
            logger.info('request rejected because a user with this email already exists.');
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
    logger.info('user login request received.');

    const user_details = {
        email: req.body.email,
        password: req.body.password,
    };

    if (!user_details.email || !user_details.password) {
        logger.info('invalid request.', user_details);

        return res.status(statusCodes.BAD_REQUEST).send('email and password are required.');
    }

    const user = await users.findOne({ where: { email: user_details.email } });
    if (!user) {
        logger.info(`user doesn't exists`);
        return res.status(statusCodes.BAD_REQUEST).send("user doesn't exist.");
    }

    if (user_details.password != user.password) {
        logger.info(`user password doesn't match.`);
        return res.status(statusCodes.BAD_REQUEST).send("user password doesn't match");
    }

    logger.info('user login succesfull.');
    return res.status(statusCodes.OK).send({ id: user.id });
};

exports.get = async (req, res) => {
    logger.info('user get request recieved.');

    const userId = req.params.id;

    if (!userId) {
        logger.info('user id is null.');
        return res.status(statusCodes.BAD_REQUEST).send('provide user id.');
    }

    const user = await users.findOne({ where: { id: userId } });
    if (!user) {
        logger.info(`user for id '${userId}' not found.`);
        return res.status(statusCodes.BAD_REQUEST).send('user not found.');
    }

    return res.status(statusCodes.OK).send(user.toJSON());
};

exports.uploadResume = async (req, res) => {
    try {
        logger.info('upload resume request recieved.');

        const userId = req.body.userId;
        const resume = req.file;

        console.assert(userId, 'userId not provided.');
        console.assert(resume, 'resume not provided.');

        const user = await users.findByPk(userId);
        if (!user) {
            logger.info('user not found.');
            return res.status(statusCodes.BAD_REQUEST).send('user not found.');
        }

        user.resume = resume.buffer;
        user.save();

        logger.info('resume uploaded successfully.');
        return res.status(statusCodes.OK).send('resume uploaded successfully.');
    } catch (error) {
        logger.info('internal server error.', error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};

exports.downloadResume = async (req, res) => {
    try {
        logger.info('download resume request recieved.');

        const userId = req.body.userId;
        console.assert(userId, 'userId not provided.');

        logger.info('resume downloaded successfully.');
        return res.status(statusCodes.OK).send('resume downloaded successfully.');
    } catch (error) {
        logger.info('internal server error.');
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};
