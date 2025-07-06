import mongoose, { Document, Schema } from 'mongoose';
import { Movie } from '../types/movie';

const movieSchema = new Schema<Movie & Document>(
  {
    title: { type: String },
    year: { type: Number },
    genres: [{ type: String }],
    languages: [{ type: String }],
    plot: { type: String },
    runtime: { type: Number },
    cast: [{ type: String }],
    fullplot: { type: String },
    released: { type: Date },
    directors: [{ type: String }],
    rated: { type: String },
    lastupdated: { type: String },
    countries: [{ type: String }],
    num_mflix_comments: { type: Number },
    poster: { type: String },
    imdb: {
      rating: Number,
      votes: Number,
      id: Number,
    },
    awards: {
      wins: Number,
      nominations: Number,
      text: String,
    },
    tomatoes: {
      viewer: {
        rating: Number,
        numReviews: Number,
        meter: Number,
      },
      lastUpdated: Date,
    },
    type: { type: String },
  },
  { collection: 'movies' }
);

const MovieModel = mongoose.model<Movie & Document>('Movie', movieSchema);

export default MovieModel;
