const { validationResult } = require('express-validator');


const NoteSchema=require('../models/Note');



const deleteNote = async (req,res)=>{
    try{
        const userId= req.userid ; 
        const noteid=req.params.id 
        const note = await NoteSchema.findById(noteid);
        const noteuserid=note.user;
        console.log(userId+" "+noteuserid);
        if(noteuserid==userId)
        {
            

             newnote=await NoteSchema.findByIdAndDelete(noteid)
             return res.send({"note":newnote, "message":"note has been deleted",success:true});
        }
        else
        {
            return res.status(401).send({error : "invalid token 2",success:false});
        }
       
        }
        catch{
            return res.status(401).send({error : "invalid token 3",success:false});
        }
  }

  module.exports = deleteNote