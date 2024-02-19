const statusCodes = require("http-status-codes").StatusCodes;
const { pool } = require("pg");

exports.auth = async (req, res) => {
  try {
    const sessionUser = req.session.session.useruser;

    // Check if the user session exists
    if (!sessionUser) {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .send({ status: false, message: "unauthorized." });
    }

    // Find user in the dummy database based on email
    const foundUser = users.find((u) => u.email === sessionUser.email);
    if (!foundUser) {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .send({ status: false, message: "user not found." });
    }

    // Return user information
    return res.status(statusCodes.OK).send({ status: true, user: foundUser });
  } catch (err) {
    console.error(err);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .send({ status: false, message: "internal server error." });
  }
};

exports.signup = async (req, res) => {
  try {
    console.log("user create request recieved.");

    const { name, email, password } = req.body;
    if (!email) {
      return res.status(statusCodes.BAD_REQUEST).send("invalid user request.");
    }

    // Check if the email already exists
    const existingUserQuery = "SELECT * FROM users WHERE email = $1";
    const existingUserResult = await pool.query(existingUserQuery, [email]);
    if (existingUserResult.rows.length > 0) {
      return res.status(400).send("This email already exists");
    }

    // Create a new user
    const insertUserQuery =
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
    const insertUserValues = [name, email, password];
    const savedUserResult = await pool.query(insertUserQuery, insertUserValues);
    const savedUser = savedUserResult.rows[0];

    // Simulate session creation
    // todo: fix this.
    // req.session.user = newUser;

    console.log("user created successfully.");
    return res.status(200).send({ status: true, user: savedUser });
  } catch (err) {
    console.error(err);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
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
    const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
    const values = [email, password];
    const result = await pool.query(query, values);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      return res.status(statusCodes.OK).send({ status: true, user: user });
    } else {
      return res
        .status(statusCodes.BAD_REQUEST)
        .send({ status: false, message: "user doesn't exist." });
    }

    // Simulate session creation
    // req.session.user = user;

   
  } catch (err) {
    console.error(err);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .send({ status: false, message: "internal server error." });
  }
};
