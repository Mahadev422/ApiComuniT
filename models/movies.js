const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    plot: String,
    genres: [String],  // Array of strings
    runtime: Number,
    cast: [String],  // Array of strings
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],  // Array of strings
    released: Date,
    directors: [String],  // Array of strings
    rated: String,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: String,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],  // Array of strings
    type: String,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        fresh: Number,
        rotten: Number,
        lastUpdated: Date
    },
    num_mflix_comments: Number
});

module.exports = mongoose.model('Movie', movieSchema);
