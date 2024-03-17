const express = require('express');
const {login, register, getUsers} = require('../controllers/user.controllers');
const { isAuth } = require('../../api/middleware/file.middleware');
const userRouter = express.Router();

userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.get('/allusers', getUsers)
//userRouter.post('/checksession', [isAuth], checkSession)

module.exports = userRouter;