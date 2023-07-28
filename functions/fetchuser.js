const AuthSchema=require('../models/User');

const fetchuser=async (req,res)=>{
    try{
        console.log(req.userid);
    const userId= req.userid ;
    const user=await AuthSchema.findById(userId).select("-password")   
    console.log(user)     
    res.status(200).send({user,success:true});
}
    catch{
        return res.status(401).send({error : "invalid token 3",success:false});
    }
}

module.exports = fetchuser ;