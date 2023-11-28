const express=require('express');
const { ReviewModel } = require('../models/review.model');
const { movieModel } = require('../models/movie.model');

const reviewRouter=express.Router();


reviewRouter.get('/reviews/:movieId', async(req,res)=>{
    try {
        const movieId = req.params.movieId;
        const reviews = await ReviewModel.find({ movie: movieId })
        if (!reviews || reviews.length === 0) {
          return res.status(404).json({ message: 'No reviews found for the specified movie' });
        }
        res.status(200).json(reviews);
    } catch (err) {
        res.send(err.message);
    }
})

reviewRouter.post('/reviews:movieId', async(req,res)=>{
    try {
        const { rating, comment } = req.body;
        const movieId = req.params.movieId;
        const userId = req.user._id; 
        const movie = await movieModel.findById(movieId);
        if (!movie) {
          return res.status(404).json({ message: 'Movie not found' });
        }
        await newReview.save();
        movie.reviews.push(newReview._id);
        await movie.save();
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (err) {
        res.send(err.message);
    }
})

reviewRouter.patch('/reviews/:id', async (req,res) =>{
    const reviewid=req.params.id
    const payload=req.body
    await ReviewModel.findByIdAndUpdate({_id:reviewid},payload)
    res.send({"msg":`review with ID:${reviewid} has been updated.`})
})

reviewRouter.delete('/reviews/:id', async (req,res) =>{
    const reviewid=req.params.id
    await ReviewModel.findByIdAndDelete({_id:reviewid})
    res.send({"msg":`review with ID:${reviewid} has been deleted.`})
})

module.exports={
    reviewRouter
}