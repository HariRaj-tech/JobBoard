const express = require('express')
const controller = require('./user_controller')

const router = express.Router()

router.get('/', controller.get_users)
router.get('/:userId', controller.get_user)
router.post('/', controller.create_user)
router.put('/:userId', controller.update_user)
router.delete('/:userId', controller.delete_user)

module.exports = router
