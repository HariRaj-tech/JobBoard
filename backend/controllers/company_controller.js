const companies = require("../modals/company_database").companies;
const statusCodes = require('http-status-codes').StatusCodes

exports.auth = async (req, res) => {
    try {
        const sessionUser = req.session.user;

        // Check if the company session exists
        if (!sessionUser) {
            return res.status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: "unauthorized." });
        }

        // Find company in the dummy database based on email
        const foundCompany = companies.find(u => u.email === sessionUser.email);
        if (!foundCompany) {
            return res.status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: "company not found." });
        }

        // Return company information
        return res.status(statusCodes.OK)
            .send({ status: true, company: foundCompany });
    }
    catch (err) {
        console.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: "internal server error." });
    }
};

exports.signup = async (req, res) => {
    try {

        console.log('company create request recieved.')

        const { name, email, password } = req.body;
        if (!email) {
            return res.status(statusCodes.BAD_REQUEST)
                .send("invalid company request.");
        }

        // Check if the email already exists
        const existingUser = companies.find((company) => company.email === email);
        if (existingUser) {
            return res.status(statusCodes.BAD_REQUEST)
                .send("company account with this email already exists.");
        }

        // Create a new company
        const newUser = { id: companies.length + 1, name, email, password };
        companies.push(newUser);

        // Simulate session creation
        // todo: fix this.
        // req.session.user = newUser;

        console.log('company created successfully.')

        return res.status(statusCodes.OK)
            .send({ status: true, company: newUser });
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
        // Find company in the dummy database based on email and password
        const company = companies.find(
            (company) => company.email === email && company.password === password
        );
        if (!company) {
            return res
                .status(statusCodes.BAD_REQUEST)
                .send({ status: false, message: "company doesn't exist." });
        }

        // Simulate session creation
        // req.session.user = company;

        return res.status(statusCodes.OK)
            .send({ status: true, company: company });
    } catch (err) {
        console.error(err);
        return res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: "internal server error." });
    }
};
