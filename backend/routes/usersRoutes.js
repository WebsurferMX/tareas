const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/userController')

router.post('/', registerUser)

//router.route('/').get(getTareas).post(setTareas)
//router.route('/:id').put(updateTareas).delete(deleteTareas)

module.exports = router