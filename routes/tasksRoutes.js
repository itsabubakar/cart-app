const { Router } = require('express')
const router = Router()
const { handlePost, getItem } = require('../controllers/tasksControllers')

router.route('/item').post(handlePost)
router.route('/item').get(getItem)

module.exports = router
