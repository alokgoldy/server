const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Post = mongoose.model("Post")
const requiredLogin = require('../middleware/requiredLogin')



router.get('/mypost',requiredLogin,(req,res)=>{

    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(post=>{
        res.json({post})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/postlist',(req,res)=>{

    Post.find().populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.post('/createpost',requiredLogin,(req,res)=>{
    const {title,body,pic} = req.body

    if(!title || !body || !pic)
    {
        return res.status(422).json({error:"Please add all the fields"})

    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        return res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router