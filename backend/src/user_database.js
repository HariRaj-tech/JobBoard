let users = []

function create_user(user) {
    return users.push(user) - 1;
}

function get_users() {
    return users;
}

function get_user(id) {
    return users.find((value, index) => { index == id });
}

module.exports = {
    create_user,
    get_users,
    get_user
}
