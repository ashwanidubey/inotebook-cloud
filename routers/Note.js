const express=require('express');
const NoteSchema=require('../models/Note');
const CreateNoteValidator=require('../validators/createNote');
const validateToken=require("../middleware/validateToken");
const createNote= require('../functions/createNote');
const viewNote=require('../functions/viewNote');
const updateNote=require('../functions/updateNote');
const deleteNote=require('../functions/deleteNote');
const router=express();


router.get('/view',validateToken,viewNote);
router.post('/create',CreateNoteValidator,validateToken,createNote);
//router.post('/create',validateToken,createNote);
router.put('/update/:id',CreateNoteValidator,validateToken,updateNote)
router.delete('/delete/:id',validateToken,deleteNote)

module.exports = router ;