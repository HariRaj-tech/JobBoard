const statusCodes = require('http-status-codes').StatusCodes;
const users = require('models/index').users;
const logger = require('services/logger');

exports.signup = async (req, res) => {
    try {
        logger.info('user create request received.');

        const user_details = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            contact_no: req.body.userContactNumber,
            location: req.body.userLocation,
            languages: req.body.userLanguages,
            skills: req.body.userSkills,
            about: req.body.userAbout,
            image: req.files && req.files[0].buffer,
            resume: req.files && req.files[1].buffer,
        };

        if (!user_details.email) {
            return res.status(statusCodes.BAD_REQUEST).send('invalid user request.');
        }

        const existing_user = await users.findOne({ where: { email: user_details.email } });
        if (existing_user) {
            logger.info('request rejected because a user with this email already exists.');
            return res.status(400).send('this email already exists');
        }

        users.create(user_details).then((user) => {
            logger.info('user created successfully.', user.userId);
            return res.status(statusCodes.ACCEPTED).json({ user: user.userId });
        });
    } catch (err) {
        logger.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
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
        logger.info('userId is null.');
        return res.status(statusCodes.BAD_REQUEST).send('provide user id.');
    }

    const user = await users.findByPk(userId, {
        attributes: {
            include: [
                'id',
                'first_name',
                'last_name',
                'email',
                'contact_no',
                'location',
                'languages',
                'skills',
                'about',
            ],
        },
    });
    if (!user) {
        logger.info(`user for id '${userId}' not found.`);
        return res.status(statusCodes.BAD_REQUEST).send('user not found.');
    }

    return res.status(statusCodes.OK).send(user.toJSON());
};

exports.postImage = async (req, res) => {
    try {
        logger.info('image post request recieved.');

        const userId = req.params.id;
        const image = req.file;

        console.assert(userId, 'userId not provided.');
        console.assert(image, 'image not provided.');

        const user = await users.findByPk(userId);
        if (!user) {
            logger.info('user not found.');
            return res.status(statusCodes.BAD_REQUEST).send('user not found.');
        }

        if (user.image) {
            user.image = image.buffer;
            user.save();

            logger.info('image updated successfully.');
            return res.status(statusCodes.OK).send('image updated successfully.');
        } else {
            user.image = image.buffer;
            user.save();

            logger.info('image posted successfully.');
            return res.status(statusCodes.OK).send('image posted successfully.');
        }
    } catch (error) {
        logger.info('internal server error.', error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};

exports.getImage = async (req, res) => {
    try {
        logger.info('image get request recieved.');

        const userId = req.params.id;
        console.assert(userId, 'userId not provided.');

        const user = await users.findByPk(userId);
        if (!user) {
            logger.info('user not found.');
            return res.status(statusCodes.BAD_REQUEST).send('user not found.');
        }

        if (!user.image) {
            logger.info('no image was posted.');
            return res.status(statusCodes.BAD_REQUEST).send('no image was posted.');
        }

        logger.info('image sent successfully.');
        return res.status(statusCodes.OK).send({ buffer: user.image });
    } catch (error) {
        logger.info('internal server error.');
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};

exports.postResume = async (req, res) => {
    try {
        logger.info('resume post request recieved.');

        const userId = req.params.id;
        const resume = req.file;

        console.assert(userId, 'userId not provided.');
        console.assert(resume, 'resume not provided.');

        const user = await users.findByPk(userId);
        if (!user) {
            logger.info('user not found.');
            return res.status(statusCodes.BAD_REQUEST).send('user not found.');
        }

        if (user.resume) {
            user.resume = resume.buffer;
            user.save();

            logger.info('resume updated successfully.');
            return res.status(statusCodes.OK).send('resume updated successfully.');
        } else {
            user.resume = resume.buffer;
            user.save();

            logger.info('resume posted successfully.');
            return res.status(statusCodes.OK).send('resume posted successfully.');
        }
    } catch (error) {
        logger.info('internal server error.', error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};

exports.getResume = async (req, res) => {
    try {
        logger.info('resume get request recieved.');

        const userId = req.params.id;
        console.assert(userId, 'userId not provided.');

        const user = await users.findByPk(userId);
        if (!user) {
            logger.info('user not found.');
            return res.status(statusCodes.BAD_REQUEST).send('user not found.');
        }

        if (!user.resume) {
            logger.info('no resume was posted.');
            return res.status(statusCodes.BAD_REQUEST).send('no resume was posted.');
        }

        logger.info('resume sent successfully.');
        return res.status(statusCodes.OK).send({ buffer: user.resume });
    } catch (error) {
        logger.info('internal server error.');
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send();
    }
};
