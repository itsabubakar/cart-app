const { Router } = require('express')
const { handlePost } = require('../controllers/tasksControllers')
const router = Router()

router.route('/item').post(handlePost)