const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genres: [String],
    languages: [String],
    plot: String,
    runtime: Number,
    cast: [String],
    fullplot: String,
    released: Date,
    directors: [String],
    rated: String,
    lastupdated: String,
    countries: [String],
    num_mflix_comments: Number,
    poster: String
}, {collection: 'movies' });

module.exports = mongoose.model('Movie', movieSchema)