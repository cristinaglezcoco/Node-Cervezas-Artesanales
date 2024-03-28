const express = require('express');
const {login, register, getUsers, putUsers, getUserById} = require('../controllers/user.controllers');
const { isAuth } = require('../../api/middleware/file.middleware');
const { isAdmin } = require('../middleware/auth.middleware');
const userRouter = express.Router();

userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.get('/allusers', getUsers)
userRouter.put('/modify/:id', putUsers)
userRouter.get('/:id', getUserById)
//userRouter.post('/checksession', [isAuth], checkSession)

module.exports = userRouter;