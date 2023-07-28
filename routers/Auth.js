const express=require('express');
const CreateValidator=require('../validators/Create');
const createUser=require('../functions/createUser')
const loginUser=require('../functions/loginUser')
const validateToken=require('../middleware/validateToken') //middleware
const fetchuser=require('../functions/fetchuser');
const LoginValidator=require('../validators/Login');
const router=express();


//create no login required
router.post('/create',CreateValidator,createUser);
//login
router.post('/login',LoginValidator,loginUser);
//read  , required login
router.post('/fetchuser',validateToken,fetchuser);
//edit
// delete
module.exports = router ;
