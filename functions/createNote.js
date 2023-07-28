const { validationResult } = require('express-validator');
const NoteSchema=require('../models/Note');


const  AddNote =  async (req,res)=> {
        try{
        console.log("hii1")
        const userId= req.userid ;  
        const data={
            title: req.body.title, 
            user: userId,
            body: req.body.body,
            tag:  req.body.tag
        }
        const note= await NoteSchema.create(data);
        console.log("success",note)
        if(note.title)
        res.status(200).send({ note,success:true});
        else
        res.status(200).send({ note,success:false});
        }
        catch{
            return res.status(401).send({error : "invalid token 3",success:false});
        }
}
const createNote = async (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
      console.log("fail");
      return res.status(404).send( {result:result.array(),success:false});
    }
   return await AddNote(req,res);
  }

  module.exports = createNote