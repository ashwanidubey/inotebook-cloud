const { body } = require('express-validator');
const LoginValidator=[
    body('email', 'please eneter a valid credential' ).isLength({ min: 5 }).isEmail() ,
    body('password', 'please eneter a valid credential').isLength({ min: 5 })
]


module.exports = LoginValidator
