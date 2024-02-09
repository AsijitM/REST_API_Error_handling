const express = require('express');
const { basic, basic2 } = require('../controller/auth.controller');
const { tryCatch } = require('../utils/tryCatch');

const authRouter = express.Router();

// I am calling the trycatch middleware here
authRouter.get('/test', tryCatch(basic));

authRouter.post('/login', tryCatch(basic2));

module.exports = authRouter;
