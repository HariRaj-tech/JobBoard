const users = require("../modals/user_database").users;
const statusCodes = require('http-status-codes').StatusCodes

exports.auth = async (req, res) => {
    try {
        const sessionUser = req.session.session.useruser;

        // Check if the user session exists
        if (!sessionUser) {
            return res.status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: "unauthorized." });
        }

        // Find user in the dummy database based on email
        const foundUser = users.find(u => u.email === sessionUser.email);
        if (!foundUser) {
            return res.status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: "user not found." });
        }

        // Return user information
        return res.status(statusCodes.OK)
            .send({ status: true, user: foundUser });
    }
    catch (err) {
        console.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: "internal server error." });
    }
};

exports.signup = async (req, res) => {
    try {

        console.log('user create request recieved.')

        const { name, email, password } = req.body;
        if (!email) {
            return res.status(statusCodes.BAD_REQUEST)
                .send("invalid user request.");
        }

        // Check if the email already exists
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            return res.status(statusCodes.BAD_REQUEST)
                .send("user account with this email already exists.");
        }

        // Create a new user
        const newUser = { id: users.length + 1, name, email, password };
        users.push(newUser);

        // Simulate session creation
        // todo: fix this.
        // req.session.user = newUser;

        console.log('user created successfully.')

        return res.status(statusCodes.OK)
            .send({ status: true, user: newUser });
    } catch (err) {
        console.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .send("internal server error");
    }
};

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res
            .status(statusCodes.BAD_REQUEST)
            .send({ status: false, message: "email and password are required." });
    }

    try {
        // Find user in the dummy database based on email and password
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (!user) {
            return res
                .status(statusCodes.BAD_REQUEST)
                .send({ status: false, message: "user doesn't exist." });
        }

        // Simulate session creation
        // req.session.user = user;

        return res.status(statusCodes.OK)
            .send({ status: true, user: user });
    } catch (err) {
        console.error(err);
        return res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: "internal server error." });
    }
};
