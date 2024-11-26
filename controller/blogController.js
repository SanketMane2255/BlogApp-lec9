const Blog = require('../models/blog')



exports.getBlog = async(req,res) => {
    try{
        const blog = await Blog.find().populate('author','name ')
        res.status(200).json((blog))

    } catch(error){
        res.status(400).json({message:error})
    }
}


exports.create = async(req,res) => {
    console.log(req.user.id,"create wala hai")
    const {title,content} = req.body
    
    try{
       const blog = await Blog.create({title,content,author:req.user.id})
       res.status(201).json({message:"Blog has been created"})

    } catch(error){
        res.status(400).json({message:error})
    }
}

//extra code

