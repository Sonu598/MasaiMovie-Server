const express=require('express');
const { movieModel } = require('../models/movie.model');

const movieRouter=express.Router();

movieRouter.get('/movies', async(req,res)=>{
    const movies=await movieModel.find();
    res.send(movies)
})

module.exports={
    movieRouter
}