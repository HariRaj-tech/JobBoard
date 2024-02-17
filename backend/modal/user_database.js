const users = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    password: "password123",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
  },
];

// function create_user(user) {
//   return users.push(user) - 1;
// }

// function get_users() {
//   return users;
// }

// function get_user(id) {
//   return users.find((value, index) => {
//     index == id;
//   });
// }

//session data
const sessions = [];

// Export the arrays for use in your application
module.exports = { users, sessions };
