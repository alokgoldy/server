const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')


router.post('/signup',(req,res)=>{

    const {name,email,password} = req.body

    if(!name || !email || !password)
    {
        return res.status(422).json({error: "please add all the fields"})

    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({message:"user already there"})
        }
        
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const user = new User({
                email,
                password:hashedPassword,
                name
            })
    
            user.save()
            .then(user=>{
                res.json({message:"saved successfully !!"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/signin',(req,res)=>{

    const {email,password} = req.body

    if(!email || !password)
    {
        return res.status(422).json({error:"please add email and password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)

                const {_id,name,email} = savedUser

                res.json({token,user:{_id,name,email}})
                
            }
            else{
                return res.status(422).json({error:"Invalid email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports = router