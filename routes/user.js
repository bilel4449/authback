const express=require('express');
const { register, login, auth } = require('../controllers/user.controller');
const { registerRules,validator } = require('../middlewares/validator');
const verifyAuth = require('../middlewares/VerifyAuth');
const router=express.Router();
router.post('/register',registerRules(),validator,register);
router.post('/login',login);
router.get('/auth',verifyAuth,auth)

module.exports=router;