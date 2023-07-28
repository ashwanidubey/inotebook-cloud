const { validationResult } = require('express-validator');


const NoteSchema=require('../models/Note');



const updateNote = async (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
      console.log("fail");
      return res.status(404).send( {result:result.array(),success:false});
    }
    try{
        const userId= req.userid ; 
        const noteid=req.params.id 
        const note = await NoteSchema.findById(noteid);
        const noteuserid=note.user;
        console.log(userId+" "+noteuserid);
        if(noteuserid==userId)
        {
            const { title, body,tag } = req.body ;
            var newnote={};
            if(title){newnote.title=title};
            if(body){newnote.body=body};
            if(tag){newnote.tag=tag};

             newnote=await NoteSchema.findByIdAndUpdate(noteid,{$set:newnote} , {new : true})
             return res.send({result:newnote,success:true});
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

  module.exports = updateNote