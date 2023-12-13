const express=require('express')
const { check, validationResult } = require('express-validator')

exports.registerRules=()=>[
    check('fullName','obligatoire').notEmpty(),
    check('email','obligatoire').notEmpty(),
    check('email','email not valid').isEmail(),
    check('password','min 6 caractere').isLength({min:6}),



];
exports.validator=(req,res,next)=>{
const errors=validationResult(req);
errors.isEmpty()?next():res.status(406).json({errors:errors.array()})
}