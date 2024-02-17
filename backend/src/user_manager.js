// const bcrypt = require('bcrypt')
// const users_db = require('./user_database')

// async function create_user(user_details) {
//     const salt = await bcrypt.genSalt()
//     const hashed_password = await bcrypt.hash(user_details.password, salt)

//     const user = {
//         name: user_details.name,
//         password: hashed_password
//     }

//     return users_db.create_user(user);
// }

// function get_users() {
//     return users_db.get_users()
// }

// function get_user(user_id) {
//     return users_db.get_user(user_id)
// }

// function has_user(user_id) {
//     return users_db.hash_user(user_id)
// }

// function remove_user(user_id) {
//     return users_db.remove_user(user_id)
// }

// module.exports = {
//     create_user,
//     get_users,
//     get_user,
//     remove_user,
//     has_user,
// }
