const status_codes = require('http-status-codes').StatusCodes
const user_manager = require('./user_manager')

function get_users(req, res) {
    console.log('get users request recieved.')
    res.send(user_manager.get_users());
}

function get_user(req, res) {
    console.log('get user request recieved.')
    res.send('not implemented yet.')
}

async function create_user(req, res) {
    console.log('create user request recieved.')

    // todo: check request body.

    const user_details = {
        name: req.body.name,
        password: req.body.password
    }

    const user_id = await user_manager.create_user(user_details)
    if (user_id == null) {
        res.status(status_codes.INTERNAL_SERVER_ERROR)
            .send('failed to add user')

        return;
    }

    res.status(status_codes.OK).send(`${user_id}`)
}

function update_user(req, res) {
    console.log('update user request recieved.')
    res.send('not implemented yet.')
}

function delete_user(req, res) {
    console.log('delete user request recieved.')
    res.send('not implemented yet.')
}

module.exports = {
    get_users,
    get_user,
    create_user,
    update_user,
    delete_user
}
