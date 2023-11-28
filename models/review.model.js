const mongoose = require('mongoose');
const movieModel = require('./movie.model');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  rating: Number,
  comment: String,
  timestamp: Date,
});

const ReviewModel=mongoose.model('Review', reviewSchema);

module.exports = {
    ReviewModel
}
