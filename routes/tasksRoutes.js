const { Router } = require('express')
const router = Router()
const { handlePost, getItem, getCategoryItems } = require('../controllers/tasksControllers')

router.route('/item').post(handlePost)
router.route('/item/items').post(getCategoryItems)
router.route('/item').get(getItem)

module.exports = router
