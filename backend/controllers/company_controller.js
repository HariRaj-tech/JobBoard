const statusCodes = require('http-status-codes').StatusCodes;
const pool = require('models/company');

exports.auth = async (req, res) => {
    try {
        const sessionUser = req.session.user;

        // Check if the company session exists
        if (!sessionUser) {
            return res
                .status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: 'unauthorized.' });
        }

        // Find company in the dummy database based on email
        const foundCompany = false;
        if (!foundCompany) {
            return res
                .status(statusCodes.UNAUTHORIZED)
                .send({ status: false, message: 'company not found.' });
        }

        // Return company information
        return res.status(statusCodes.OK).send({ status: true, company: foundCompany });
    } catch (err) {
        console.error(err);
        return res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: 'internal server error.' });
    }
};

exports.signup = async (req, res) => {
    try {
        console.log('company create request recieved.');

        const company_name = req.body.companyName;
        const company_email = req.body.companyEmail;
        const company_address = req.body.companyAddress;
        const owner_name = req.body.ownerName;
        const password = req.body.password;

        if (!company_email) {
            return res.status(statusCodes.BAD_REQUEST).send('invalid company request.');
        }

        // Check if the company_email already exists
        const existingCompQuery = 'SELECT * FROM registered_orgs WHERE company_email = $1';
        const existingCompResult = await pool.query(existingCompQuery, [company_email]);
        if (existingCompResult.rows.length > 0) {
            console.log('a company with this email already exists');
            return res.status(400).send('a company with this email already exists');
        }

        // Create a new company
        const insertCompQuery =
            'INSERT INTO registered_orgs (company_name, owner_name, company_address, company_email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const insertCompValues = [
            company_name,
            owner_name,
            company_address,
            company_email,
            password,
        ];
        const savedCompResult = await pool.query(insertCompQuery, insertCompValues);
        const savedComp = savedCompResult.rows[0];

        // Simulate session creation
        // todo: fix this.
        // req.session.user = savedComp;

        console.log('company created successfully.');

        return res.status(statusCodes.OK).send({ status: true, company: savedComp });
    } catch (err) {
        console.error(err);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send('internal server error');
    }
};

exports.login = async (req, res) => {
    console.log('company login request recieved.');

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res
            .status(statusCodes.BAD_REQUEST)
            .send({ status: false, message: 'email and password are required.' });
    }

    try {
        // Find company in the dummy database based on email and password
        const query = 'SELECT * FROM registered_orgs WHERE company_email = $1 AND password = $2';
        const values = [email, password];
        const result = await pool.query(query, values);
        if (result.rows.length > 0) {
            console.log('company login successfull.');

            const org = result.rows[0];
            return res.status(statusCodes.OK).send({ status: true, user: org });
        } else {
            console.log("company doesn't exist.");

            return res
                .status(statusCodes.BAD_REQUEST)
                .send({ status: false, message: "org doesn't exist." });
        }

        // Simulate session creation
        // req.session.user = company;
    } catch (err) {
        console.error(err);
        return res
            .status(statusCodes.INTERNAL_SERVER_ERROR)
            .send({ status: false, message: 'internal server error.' });
    }
};
