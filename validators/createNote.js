const { body} = require('express-validator');
const CreateNoteValidator=[
    body('title' , 'title must be of 5 characters').isLength({ min: 5 }),
    body('body', 'description must be 10 characters').isLength({ min: 5 }) , 
]


module.exports = CreateNoteValidator
