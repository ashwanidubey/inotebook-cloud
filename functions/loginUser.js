require('dotenv').config()
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');//bcrypt use to ecncrpt password
const jwt = require('jsonwebtoken');//jwt use to validate user
const AuthSchema=require('../models/User');
const jwt_secrets=process.env.JWT_TOKEN


const  LoginUser =  async (req,res)=> {
  //checking from db if email  exist or not
  const response=await AuthSchema.findOne({email:req.body.email});
  //email do not exist
  if(response==null)
  {
    console.log("exist");
    return res.status(404).send({error: "either user or password is incorrect",success:false});
  }
  //validating passowrd
  const passwordmatched=await bcrypt.compareSync(req.body.password,response.password);
  
  if(passwordmatched==true)
  {
   const payload={id:response.id} 
   const token = jwt.sign(payload, jwt_secrets);

   //sending response
   return res.send({token,success:true});
  }
  
  return res.status(404).send({error: "either user or password is incorrect",success:false});
  

  
      
 
}
const loginUser = async (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
      console.log("fail");
      return res.status(404).send( result.array());
    }
   return await LoginUser(req,res);
}

  module.exports = loginUser