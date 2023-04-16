const express = require('express');

const router = express.Router();
const UserController = require('../../controllers/userController');

router.post('/users', UserController.createUser);

router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserById);

router.put('/users/:id', UserController.updateUserById);

router.delete('/users/:id', UserController.deleteUserById);

module.exports = router;
