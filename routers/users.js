const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware')
const router = express.Router()

router.get('/', authenticate, usersController.getAllUsers)

router.get('/user', authenticate, usersController.getAllUsers)

router.get('/login', authenticate, usersController.getUserById)

router.post('/signup', authenticate, usersController.createUser)

router.post('/workout', authenticate, usersController.createWorkout)

router.put('/bodycomp', authenticate, usersController.updateUserById)

router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router