require('dotenv').config()
const { validationResult } = require('express-validator');
//bcrypt use to ecncrpt password
var bcrypt = require('bcryptjs');
//jwt use to validate user
var jwt = require('jsonwebtoken');

const AuthSchema=require('../models/User');

const jwt_secrets=process.env.JWT_TOKEN
const  AddUser =  async (req,res)=> {
  //salt is combined with password to make it more confusing
  var salt = await bcrypt.genSaltSync(10);
  // encrypting pwd with salt and real password 
  var secPass = await bcrypt.hash(req.body.password,salt);

  //checking from db if email already exist
  const response=await AuthSchema.find({email:req.body.email});
  if(response.length>0)
  {
    console.log("exist");
    return res.status(404).send({error: "alraedy exist",success:false});
  }


  //creating user
  const data={
    name: req.body.name, 
    email: req.body.email,
    password: secPass,
  }
   const user= await AuthSchema.create(data);

   //creating jwt token
   const payload={id:user.id} 
   const token = jwt.sign(payload, jwt_secrets);

   //sending response
   return res.send({token,success:true});
      
 
}
const createUser = async (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()) {
      console.log("fail");
      return res.status(404).send( {result:result.array(),success:false});
    }
   return await AddUser(req,res);
  }

  module.exports = createUser