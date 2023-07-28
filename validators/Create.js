const { body } = require('express-validator');
const CreateValidator=[
    body('name' , 'name must be of 5 characters').isLength({ min: 5 }),
    body('email', 'please eneter a valid email').isLength({ min: 5 }).isEmail() ,
    body('password', 'password must be more than 5 characters').isLength({ min: 5 })
]


module.exports = CreateValidator
