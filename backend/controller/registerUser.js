
const db=require("../Model/db");
const router = require("express").Router()
const User=db.user;
const Op = db.Sequelize.Op;


router.post("/saveuser",async(req,res)=>{
    try{

        const users=req.body;
        console.log(users);
        const userEmail=users.email;

        const getEmails=await User.findOne({ where: {email:userEmail} });
        if(getEmails){
            res.json("already get data");
        }
        else{
            const registered=await User.create(req.body);
        res.json(registered);
     
        }
         }
     
    
      catch(err){
        res.json(err);
      }
    
});

module.exports=router;