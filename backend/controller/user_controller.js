const { users } = require("./modal/users");

// const status_codes = require('http-status-codes').StatusCodes
// const user_manager = require('./user_manager')

// function get_users(req, res) {
//     console.log('get users request recieved.')
//     res.send(user_manager.get_users());
// }

// function get_user(req, res) {
//     console.log('get user request recieved.')
//     res.send('not implemented yet.')
// }

exports.checkAuth = async (req, res) => {
    try {
      
      const sessionUser = req.session.user;
      
      // Check if the user session exists
      if (!sessionUser) {
        return res.status(401).send({ status: false, message: "Unauthorized" });
      }
  
      // Find user in the dummy database based on email
      const foundUser = users.find(u => u.email === sessionUser.email);
      if (!foundUser) {
        return res.status(401).send({ status: false, message: "User not found" });
      }
  
      // Return user information
      return res.status(200).send({ status: true, user: foundUser });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ status: false, message: "Internal server error" });
    }
  };

exports.signUpUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!email) {
      return res.status(400).send("Invalid user request");
    }

    // Check if the email already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).send("This email already exists");
    }

    // Create a new user
    const newUser = { id: users.length + 1, fullName, email, password };
    users.push(newUser);

    // Simulate session creation
    req.session.user = newUser;

    return res.status(200).send({ status: true, user: newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: false, message: "Email and Password are required" });
  }

  try {
    // Find user in the dummy database based on email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: "User doesn't exist" });
    }

    // Simulate session creation
    req.session.user = user;

    return res.status(200).send({ status: true, user: user });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ status: false, message: "Internal server error" });
  }
};

// async function create_user(req, res) {
//   console.log("create user request recieved.");

//   todo: check request body.

//   const user_details = {
//     name: req.body.name,
//     password: req.body.password,
//   };

//   const user_id = await user_manager.create_user(user_details);
//   if (user_id == null) {
//     res.status(status_codes.INTERNAL_SERVER_ERROR).send("failed to add user");

//     return;
//   }

//   res.status(status_codes.OK).send(`${user_id}`);
// }

// function update_user(req, res) {
//   console.log("update user request recieved.");
//   res.send("not implemented yet.");
// }

// function delete_user(req, res) {
//   console.log("delete user request recieved.");
//   res.send("not implemented yet.");
// }

// module.exports = {
//   get_users,
//   get_user,
//   create_user,
//   update_user,
//   delete_user,
// };
