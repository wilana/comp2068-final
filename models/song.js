/* The Song Model: 50 points */
// Step 1 (10 points): Import the required library to create a model
const mongoose = require('mongoose');

// Step 1:
// a) (10 points): Fix the schema syntax below.
// b) (15 points): Add "artist" as an attribute. The artist
// attribute will except a document ID as its value.
// This will create an association between a song and
// an artist
const SongSchema =  new mongoose.Schema({
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  },
  title: {
    type: String,
    required: true
  },
  length: {
    type: Number
  },
  year: {
    type: Number
  },
  genre: {
    type: String
  }
}, {
  timestamps: true
});

// Step 3 (15 points): Export the model
module.exports = mongoose.model('Song', SongSchema);