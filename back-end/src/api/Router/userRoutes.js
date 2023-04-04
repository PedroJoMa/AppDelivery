const express = require('express');
const {
    createUserHandler,
    getUserByIdHandler,
    validateLoginHandler,
    getExistingUserHandler,
    validateUsers,
 } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/users', getExistingUserHandler)
.post('/register', createUserHandler)
.get('/users/:id', getUserByIdHandler)
.post('/validateUsers', validateUsers)
.post('/login', validateLoginHandler);

module.exports = userRouter;
