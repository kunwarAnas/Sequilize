const express = require('express');
const User = require('../Models/User');


userRouter = express.Router();


// add a user
userRouter.post('/adduser',async (req,res)=>{
    const {name , email , phone} = req.body
    try{
        if(name&&email&&phone){
            let user = await User.create({name,email,phone}); 
            //update a user
            //user.set({name:'moon',email:'moon@moon'});
            //await user.save();
            res.json(user);
        }else{
            res.json("All fields are required")
        }
    }catch(err){
        res.json(err.message)
    }
})

//get all user

userRouter.get('/getall',async (req,res)=>{
    let alluser = await User.findAll({});
    res.json(alluser);
})

//get a user 

userRouter.get('/getuser/:id',async (req,res)=>{
    let id = req.params.id;
    try{
        let user = await User.findOne({
            where:{
                id
            },
        })
        if(user){
            res.json(user);
        }else{
            res.json('no user found')
        }
    }catch(err){
        res.json(err.message)
    }
})

//update a user
userRouter.patch('/updateuser/:id',async(req,res)=>{
    let id = req.params.id;
    console.log(id);
    const updateData= req.body;
    
    try{
        let user = await User.update(updateData,{where:{id}});
        res.json({'message':'user updated' ,user});
    }catch(err){
        res.json(err.message)
    }
})

module.exports = userRouter;