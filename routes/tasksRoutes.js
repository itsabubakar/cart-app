const { Router } = require('express')
const router = Router()
const { handlePost } = require('../controllers/tasksControllers')

router.route('/item').post(handlePost)

module.exports = router
