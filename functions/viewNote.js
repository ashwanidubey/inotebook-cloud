const NoteSchema=require('../models/Note');


const viewNote = async (req,res)=>{
    try{   
        const userId= req.userid ;  
        const note= await NoteSchema.find({user:userId});
        res.status(200).send({ note , success:true});
        }
        catch{
            return res.status(401).send({error : "invalid token 3",success:false});
        }
  }

  module.exports = viewNote