const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { use } = require('passport');
const user=require('../model/user-model')

module.exports = {
    register:async (req,res)=>{ 
        if(await user.exists({email:req.body.email}) == true) return res.status(400).send({message:"Email Exists"});
        bcrypt.hash(req.body.password,10,async (err,hashPassword)=>{
            if(err) return res.status(403).send({message:"this is an error"});
            req.body.password = hashPassword;
            await user.create(req.body)
            .then(result => res.status(200).send({message:"User as been Added",result}))
            .catch(err => res.status(500).send({message:"zzzz",err}))
        })
    },
    login:async (req,res)=>{
        if(user.exists(req.body.email) == false) return res.status(400).send({message:"User not exist"});
        const {email,password} = req.body;
        await user.findOne({email})
        .then(userItem => bcrypt.compare(password,userItem.password,(err,isMatch)=>{
            if (err) return res.status(400).send({message:"err try again"})
            if(!isMatch) return res.status(500).send({message:"Password incorrect"})
            jwt.sign({...userItem},process.env.SECRET_KEY,{expiresIn:"30m"},(err,token)=>{
                if(err) return res.status(400).send({message:"Error"})
                res.status(200).send({message:"Login Sucssefuly",token});
            })
        }) )
        .catch((err)=>{res.status(400).send({message:"error"})})
    }

}